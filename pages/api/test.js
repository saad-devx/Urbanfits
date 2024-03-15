import ConnectDB from "@/utils/connect_db";
import Product from "@/models/product";
import Order from "@/models/orders";
import StandardApi from "@/middlewares/standard_api";

const TestApiHandler = (req, res) => StandardApi(req, res, { method: "POST", verify_user: false }, async () => {
    await ConnectDB()

    const order = await Order.create({
        "user_id": "651ab014f10bff23784dd8e8",
        "name": "Faizan Tariq",
        "email": "faizan@urbansoftware.tech",
        "order_items": [
            {
                "product_id": "656a0cc84839597ecab95819",
                "variant_id": "656a0cce4839597ecab9582e",
                "variant": "Black",
                "name": "Waist Fabric Belt Knitwear Tunic",
                "price": 425,
                "size": "S",
                "sku": "UF1011-#000000-SS",
                "quantity": 1,
                "image": "/product-images/656a0cc84839597ecab95819/656a0cc84839597ecab9581a/0.webp",
                "weight": "430"
            }
        ],
        "gift_cards": [],
        "shipping_address": {
            "address_title": "Home",
            "firstname": "Faizan",
            "lastname": "Sohail",
            "address": "Lower Mall street 123, Lahore",
            "apt_suite": "",
            "city": "Lahore",
            "country": "pk",
            "phone_prefix": "+92",
            "phone_number": "31643454837"
        },
        "earned_points": 700,
        "points_used": 0,
        "shippping_method": "standard_shipping",
        "payment_method": "cash_on_delivery",
        "discounts": {
            "points": 0,
            "coupon": 0,
            "gift_card": 0,
            "payment": 0
        },
        "price_details": {
            "total": 1783.991,
            "sub_total": 1709,
            "shipping_fees": 18,
            "total_discount": 0
        },
        "month": "march",
        "year": 2024,
        // "order_status": {
        //     "status": "REQUESTED"
        // },
        "shipping_label_url": "/uf-shipping-labels/65f4644c564d4116cd75156b",
        "stage": "TRANSIT",
        "tracking_number": "WFHON33262",
        "tracking_url": "https://t.swftbox.com/WFHON33262"
    })

    res.status(200).json({
        success: true,
        msg: "order creations fucking completed ",
        order
        // balance1, deduct, balance2
    })
})

export default TestApiHandler