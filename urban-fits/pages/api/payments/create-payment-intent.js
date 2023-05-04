// This is your test secret API key.
const stripe = require("stripe")('sk_test_51MkU2DHF1bkFLgck4aQNuqKxTOrWh2uSlx8AxKJucUFGPl4cDSpjLhhn4ynhISjShrTqGhl2U4A1UZJFe0RRclyo00hWAfnqeB');

const calculateOrderAmount = (costs) => {
  console.log(costs)
  const {total, otherCosts} = costs
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  const Total = total + otherCosts?.shipping + otherCosts?.tax;
  console.log(Total)
  return Total
};

export default async function handler(req, res) {
  const { costs } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(costs),
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  console.log(paymentIntent.client_secret)
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};

