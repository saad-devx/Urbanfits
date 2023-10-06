import ConnectDB from "@/utils/connect_db";
import mongoose from "mongoose";
import User from "@/models/user"
import UFpoints from "@/models/ufpoints"
import jwt from "jsonwebtoken";
import CorsMiddleware from "@/utils/cors-config"
const uf_points_sourcees = {
    signup: 100,
    follow_on_facebook: 100,
    follow_on_instagram: 100,
    daily_checkin: 10
}
const AddUFpoints = async (req, res) => {
    try {
        await CorsMiddleware(req, res)
        if (req.method === 'PUT') {
            // const { token } = req.body
            // if (!token) return res.status(400).json({ success: false, msg: "A valid jwt is required. Body parameters: token, token: card_number, user_id, points, source" })
            // const decodedToken = jwt.decode(token, process.env.SECRET_KEY)
            // console.log(decodedToken)
            const { card_number, user_id, source } = req.body
            if (!card_number || !user_id || !source) return res.status(403).json({ success: false, msg: "Invalid token arguments." })
            await ConnectDB()

            const user = await User.findOne({ _id: user_id, "uf_wallet.card_number": card_number })
            if (!user) return res.status(401).json({ success: false, msg: "Invalid information of user uf-card" })
            const pointsDoc = await UFpoints.create({
                user_id,
                card_number,
                source,
                points: uf_points_sourcees[source],
                // expiration_date: new Date(new Date().setMinutes(new Date().getMinutes() + 2))
            })
            console.log(pointsDoc)

            res.status(200).json({
                msg: `Item added successfully.`,
                pointsDoc
            })
        }
        else res.status(405).json({ success: false, msg: "Method not allowed. Allowed methods: PUT" })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ success: false, error, msg: "Internal server error ocurred, please try later." })
    }
}

export default AddUFpoints