import stripe from "stripe";

// API to handle Stripe Webhooks

export const stripeWebhooks = async (request, response) => {
    // Stripe Gateway Initialize
    const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY);
    const sig = request.headers['stripe-signature'];
    let event;

    try {
        event = stripeInstance.webhooks.constructEvent(
            request.body,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET
        );
    } catch (err) {
        response.status(400).send(`Webhook Error: ${err.message}`);
    }

    if(event.type === "payment_intent.succeeded") {
        const paymentIntent = event.data.object;
        const paymentIntentId = paymentIntent.id;
        // Handle successful payment intent here
        const session = await stripeInstance.   }
};
