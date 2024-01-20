import speakeasy from 'speakeasy';
import qrcode from 'qrcode';
import User from '@/models/user'
import StandardApi from '@/middlewares/standard_api';

const GetQrCode = async (req, res) => StandardApi(req, res, {}, async () => {
    const { user_id } = req.query
    if (!user_id) return res.status(401).json({ success: false, msg: "All valid parameters required. Parameters: user_id" })
    const user = await User.findById(user_id)
    if (!user) return res.status(404).json({ success: false, msg: "User with this id does not exist." })

    const secret = speakeasy.generateSecret({
        issuer: "Urban Fits",
        name: `Urban Fits: ${user.username}`,
        length: 30
    })
    const qrCodeUrl = await qrcode.toDataURL(secret.otpauth_url)

    res.status(200).json({
        success: true,
        qrSecret: secret.base32,
        qrCodeUrl
    })
})
export default GetQrCode