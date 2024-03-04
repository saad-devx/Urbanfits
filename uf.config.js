export const DefaultTasks = [
    {
        name: "sign_up",
        title: "Sign Up Bonus",
        description: "Sign up and win 500 points.",
        reward: 500,
        completed: true,
        link: "/auth/signup"
    },
    {
        name: "place_order",
        title: "Place an Order",
        description: "Win upto 350 points.",
        link: "/"
    },
    {
        name: "review_product",
        title: "Review a Product",
        description: "Review and win upto 350 points.",
        reward: 350,
        disabled: true,
        link: "/"
    },
    {
        name: "follow_facebook",
        type: "social",
        title: "Follow & like us on Facebook",
        description: "Follow and win 100 points.",
        reward: 100,
        need_image: true,
        image_submitted: false,
        link: "https://www.facebook.com"
    },
    {
        name: "follow_instagram",
        type: "social",
        title: "Follow & like us on Instagram",
        description: "Follow and win 100 points.",
        reward: 100,
        need_image: true,
        image_submitted: false,
        link: "https://www.instagram.com"
    },
    {
        name: "follow_tiktok",
        type: "social",
        title: "Follow & like us on Tiktok",
        description: "Follow and win 100 points.",
        reward: 100,
        need_image: true,
        image_submitted: false,
        link: "https://www.tiktok.com/"
    },
    {
        name: "share_on_social",
        title: "Share on Social Media",
        description: "Follow and win 100 points.",
        reward: 100,
        need_image: true,
        image_submitted: false,
        link: "/"
    },
    {
        name: "spin_wheel",
        title: "Spin the wheel",
        description: "Win upto 500 points.",
        link: "#prize_wheel"
    },
    {
        name: "download_app",
        title: "Download mobile app",
        reward: 500,
        description: "Get 500 points."
    }
]

export const shippingRates = {
    "standard_shipping": {
        "name": "Standard",
        "swft_profile": "nextday",
        "rate": 18,
        "time_limit": null,
        "additional_kg_charge": 2,
        "timespan": "1 - 2 days"
    },
    "express_shipping": {
        "name": "Express",
        "swft_profile": "sameday",
        "rate": 30,
        "time_limit": new Date().setHours(16, 0, 0, 0),
        "additional_kg_charge": 2,
        "timespan": "Today"
    },
    "express_4h_shipping": {
        "name": "Express 4h",
        "swft_profile": "express4h",
        "rate": 40,
        "time_limit": new Date().setHours(16, 0, 0, 0),
        "additional_kg_charge": 2,
        "timespan": "Today"
    }
}

export const paymentOptions = {
    "cash_on_delivery": {
        "rate": 3.3,
        "discount": 0
    },
    "online_payment": {
        "rate": 0,
        "discount": 2.5
    }
}

export const currencies = ["AED", "SAR", "PKR"];
export const jwtExpiries = {
    default: 7, // 7 days
    extended: 30 // 30 days
}
export const giftCardPrices = {
    giftcard_bronze: 100,
    giftcard_silver: 200,
    giftcard_gold: 300,
    giftcard_platinum: 400,
    giftcard_diamond: 500
}
export const adminRoles = ['administrator', 'editor', 'author']