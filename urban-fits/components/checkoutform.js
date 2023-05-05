import React, { useState, useEffect } from "react";
import {
    PaymentElement,
    LinkAuthenticationElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
import styles from '@/styles/StripeForm.module.css'
import toaster from "@/utils/toast_function";

export default function CheckoutForm() {
    const stripe = useStripe();
    let elements = useElements();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!stripe) return;
        const clientSecret = new URLSearchParams(window.location.search).get(
            "payment_intent_client_secret"
        );
        if (!clientSecret) return;
        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
            switch (paymentIntent.status) {
                case "succeeded":
                    setMessage("Payment succeeded!");
                    break;
                case "processing":
                    setMessage("Your payment is processing.");
                    break;
                case "requires_payment_method":
                    setMessage("Your payment was not successful, please try again.");
                    break;
                default:
                    setMessage("Something went wrong.");
                    break;
            }
        });
    }, [stripe]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            setIsLoading(true);
        }

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // Make sure to change this to your payment completion page
                return_url: `${process.env.HOST}/checkout/thanks`,
            },
        });

        // This point will only be reached if there is an immediate error when
        // confirming the payment. Otherwise, your customer will be redirected to
        // your `return_url`. For some payment methods like iDEAL, your customer will
        // be redirected to an intermediate site first to authorize the payment, then
        // redirected to the `return_url`.
        if (error.type === "card_error" || error.type === "validation_error") {
            setMessage(error.message);
        } else {
            setMessage("An unexpected error occurred.");
        }
        setIsLoading(false);
    };

    return (
        <form id="payment-form" className={`${styles.Stripe_form} w-full lg:w-[30vw] my-5 p-5 xl:p-10 font_gotham space-y-5`} onSubmit={handleSubmit}>
            <LinkAuthenticationElement
                id="link-authentication-element" value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <PaymentElement id="payment-element" options={{
                layout: 'tabs',
                paymentMethodOrder: ['card'],
            }} />
            <button disabled={isLoading || !stripe || !elements} id="submit" className={`${styles.stripe_btn} my-2 md:my-4 rounded-2xl`}>
                <span id="button-text" className="font_gotham_medium text-white text-sm tracking-expand">
                    {isLoading ? <div className={styles.spinner} id="spinner"></div> : "PAY NOW"}
                </span>
            </button>
            {/* Show any error or success messages */}
            {message && <div id="payment-message" className={styles.payment_message}>{message}</div>}
        </form>
    );
}