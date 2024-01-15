// import Jazzcash from 'jazzcash-checkout';
const Jazzcash = require('jazzcash-checkout')
import CorsMiddleware from "@/utils/cors-config";
import axios from "axios"

const JazzCheckoutSession = async (req, res) => {
    try {
        if (req.method === "POST") {
            await CorsMiddleware(req, res)
            // Jazzcash.credentials({
            //     config: {
            //         merchantId: "MC70232",
            //         password: "c61u689ws3",
            //         hashKey: "98415a74zw",
            //     },
            //     environment: 'sandbox'
            // });

            // Jazzcash.setData({
            //     pp_Version: '1.1',
            //     pp_DiscountedAmount: '',
            //     pp_DiscountBank: '',
            //     pp_Amount: '1000',
            //     pp_TxnCurrency: 'PKR',
            //     pp_MobileNumber: "03123456789",
            //     pp_BillReference: 'billRef123',
            //     pp_Description: 'Description of transaction',
            // });

            // // REQUEST TYPES(PAY, WALLET, INQUIRY, REFUND)
            // const data = await Jazzcash.createRequest("WALLET")

            const apiUrl = 'https://sandbox.jazzcash.com.pk/ApplicationAPI/API/4.0/purchase/domwallettransactionviatoken';

            // Parameters for Wallet Payment
            const paymentData = {
                pp_MerchantID: "MC70232",
                pp_Password: "c61u689ws3",
                pp_SubMerchantID: "",
                pp_TxnRefNo: "T20210830104840",
                pp_MobileNumber: "03362160806",
                // pp_CNIC: "4210112345678",
                pp_MPIN: "4444",
                pp_Amount: "10000",
                // pp_DiscountedAmount: "",
                pp_TxnDateTime: "20210830104840",
                pp_BillReference: "bill red",
                pp_Description: "a test payment made in sandbox",
                pp_TxnExpiryDateTime: "20210930104840",
                pp_SecureHash: "",
                pp_PaymentToken: ""
            };

            const { data } = await axios.post(apiUrl, paymentData)


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