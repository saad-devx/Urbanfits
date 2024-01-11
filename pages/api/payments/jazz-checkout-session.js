// import Jazzcash from 'jazzcash-checkout';
const Jazzcash = require('jazzcash-checkout')
import CorsMiddleware from "@/utils/cors-config";

const JazzCheckoutSession = async (req, res) => {
    try {
        if (req.method === "POST") {
            await CorsMiddleware(req, res)
            Jazzcash.credentials({
                config: {
                    merchantId: "MC70232",
                    password: "c61u689ws3",
                    hashKey: "98415a74zw",
                },
                environment: 'sandbox'
            });

            Jazzcash.setData({
                pp_Amount: 1 * 100,
                pp_BillReference: "billRef123",
                pp_Description: "Test Payment",
                pp_MobileNumber: "03123456789",
                pp_CNIC: "345678",
            });

            // REQUEST TYPES(PAY, WALLET, INQUIRY, REFUND)
            const data = await Jazzcash.createRequest("WALLET")
            return res.status(200).json({
                success: true,
                msg: "something wokred at least",
                data
            })

        } else return res.status(405).json({ success: false, msg: "Method not allowed, Allowed methods: 'POST'" })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, msg: "Internal Server Error occurred, please trey again in a while.", error })
    }
}

export default JazzCheckoutSession