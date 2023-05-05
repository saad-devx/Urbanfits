const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const calculateOrderAmount = (costs) => {
  const { total, otherCosts } = costs
  const Total = Math.floor((total + otherCosts?.shipping + otherCosts?.tax) * 100);
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
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};

