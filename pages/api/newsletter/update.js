import ConnectDB from "@/utils/connect_db"
import Newsletter from "@/models/newsletter"
import jwt from 'jsonwebtoken'
const mongoose = require('mongoose')
import StandardApi from "@/middlewares/standard_api"

const UpdateNewsletter = async (req, res) => StandardApi(req, res, { method: "PUT" }, async () => {
    const { id } = req.query
    if (!id) return res.status(400).json({ success: false, msg: "no user id parameter was found in the query." })
    await ConnectDB()
    const letter = await Newsletter.findOneAndUpdate({ user: mongoose.Types.ObjectId(id) }, req.body, { new: true })
    if (!letter) return res.status(404).json({ success: false, msg: "No registration found with the corresponding user id" })
    console.log(letter)
    const payload = jwt.sign({ ...letter }, process.env.NEXT_PUBLIC_SECRET_KEY)
    res.status(200).json({
        success: true,
        msg: `Newsletter subscription updated successfully`,
        payload
    })
})
export default UpdateNewsletter