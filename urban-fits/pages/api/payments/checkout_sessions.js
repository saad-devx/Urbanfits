const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const coming_products = req.body.items
  if (req.method === 'POST') {
    try {

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        shipping_options: [
          {
            shipping_rate_data: {
              type: 'fixed_amount',
              fixed_amount: {
                amount: 1500,
                currency: 'usd',
              },
              display_name: 'Next day air',
              delivery_estimate: {
                minimum: {
                  unit: 'business_day',
                  value: 1,
                },
                maximum: {
                  unit: 'business_day',
                  value: 1,
                },
              },
            }
          }
        ],
        line_items: coming_products.map((product, index) => {
          return {
            price_data: {
              currency: 'usd',
              product_data: {
                name: product.name,
                images: [product.images[0].url]
              },
              unit_amount: Math.floor(product.price * 100),
            },
            quantity: product.quantity,
          }
        }),
        mode: 'payment',
        success_url: `${process.env.HOST}/checkout/thanks?success=true`,
        cancel_url: `${process.env.HOST}/checkout/step1?payment=false`,
      });
      res.send(session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}