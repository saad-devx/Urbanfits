import ConnectDB from "@/utils/connect_db"
import speakeasy from 'speakeasy';
import qrcode from 'qrcode';

const GetQrCode = async (req, res) => {
    try {
        if (req.method === 'GET') {
            const { user_id } = req.query
            if (!user_id) return res.status(401).json({ success: false, msg: "All valid parameters required. Parameters: user_id" })

            const secret = speakeasy.generateSecret({
                issuer: "Urban Fits",
                name: "Urban Fits - 2FA key",
                length: 30
            })
            console.log(secret)
            const qrCodeUrl = await qrcode.toDataURL(secret.otpauth_url)

            res.status(200).json({
                success: true,
                qrSecret: secret.base32,
                qrCodeUrl
            })
        }
        else res.status(405).json({ success: false, msg: "bad request, you are using wrong request method!" })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ success: false, msg: "Internal server error, please try again later" })
    }
}
export default GetQrCode