import { pusherServer } from "@/utils/pusher";
import CorsMiddleware from "@/utils/cors-config"

export default async function ChannelAuth(req, res) {
    try {
        await CorsMiddleware(req, res)
        const { user_id, email, socket_id, channel_name } = req.body;
        if (!user_id || !email || !socket_id || !channel_name) return res.status(401).send(null)

        const user = {
            user_id,
            user_info: {
                user_id,
                email
            },
        };

        const channelAuth = pusherServer.authorizeChannel(socket_id, channel_name, user);
        console.log(channelAuth)
        res.send(channelAuth);
    } catch (error) {
        console.error(error)
        res.status(500).json({ success: false, error, msg: "Internal Server Error occurred. Please retry later." })
    }
}