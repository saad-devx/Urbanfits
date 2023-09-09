import Stripe from 'stripe';
import { buffer } from 'micro';
import Cors from 'micro-cors';
import sendEmail from "@/utils/sendEmail"
import OrderConfirmed from '@/email templates/order_confirm';
import OrderSession from '@/models/order_session';
import { pusherServer } from '@/utils/pusher';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
const webhookSecret = "whsec_08929f835f85103c35eeda9ecb0cd3a3a7b6e0de46df40b9c6c7d7de306f38e9";

// Stripe requires the raw body to construct the event.
export const config = {
  api: {
    bodyParser: false,
  },
};

const cors = Cors({
  allowMethods: ['POST', 'HEAD'],
});

const webhookHandler = async (req, res) => {
  if (req.method === 'POST') {
    const buf = await buffer(req);
    const signature = req.headers['stripe-signature'];

    let event;
    try {
      event = stripe.webhooks.constructEvent(
        buf.toString(),
        signature,
        webhookSecret
      );
    } catch (err) {
      console.log(`❌ Error message: ${err.message}`);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Successfully constructed event.
    console.log('The event of checkout construction was successfull ✅ Success:', event.id);

    switch (event.type) {
      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object;
        console.log(`PaymentIntent status: ${paymentIntent.status}`);
        console.log("here is the whole event:", event);

        const orderSession = await OrderSession.findById(paymentIntent.metadata.order_session_id)

        let template = OrderConfirmed(orderSession.name)
        await sendEmail({ to: orderSession.email, subject: "Your order has been placed." }, template)
        console.log("entry point 1")

        try {
          pusherServer.trigger('payments', 'payment-succeeded', {
            order_session: orderSession,
            success: true,
            type: 'success',
            msg: "Your payment was successfull!"
          })
        } catch (error) { console.log(error) }
        console.log("entry point 2")
        await OrderSession.findByIdAndDelete(paymentIntent.metadata.order_session_id)
        break;
      }
      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object;
        console.log(`❌ Payment failed: ${paymentIntent.last_payment_error?.message}`);
        pusherServer.trigger('payments', 'payment-succeeded', {
          success: true,
          type: "error",
          msg: "Your payment was failed!"
        })
        break;
      }
      case 'charge.succeeded': {
        const charge = event.data.object;
        console.log(`Charge id: ${charge.id}`);
        break;
      }
      default: {
        console.warn(`Unhandled event type: ${event.type}`);
        break;
      }
    }

    // Return a response to acknowledge receipt of the event.
    res.json({ received: true });
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
};

export default cors(webhookHandler);