import { beamsServer } from "@/utils/pusher";
import ConnectDB from "@/utils/connect_db";
import User from "@/models/user"
import mongoose from "mongoose";
import CorsMiddleware from "@/utils/cors-config"

export default async function BeamAuth(req, res) {
    try {
        await CorsMiddleware(req, res)
        const { user_id } = req.query;
        if (!mongoose.Types.ObjectId.isValid(user_id)) return res.status(401).send(null)

        await ConnectDB()
        const user = await User.findById(user_id)
        if (!user) return res.status(401).send(null)
        else {
            const beamToken = beamsServer.generateToken(user_id)
            res.send(beamToken);
        }

    } catch (error) {
        console.error(error)
        res.status(500).json({ success: false, error, msg: "Internal Server Error occurred. Please retry later." })
    }
}