import ConnectDB from "@/utils/connect_db";
import { isValidObjectId } from "mongoose";
import User from "@/models/user";
import { AddPoints } from "@/utils/uf-points";
import { generateRandomInt, getDateOfTimezone } from "@/utils/cyphers.js";
import { sendNotification } from "@/utils/send_notification";

export default async function PusherWebhooks(req, res) {
    try {
        if (req.method === 'POST') {
            const { events } = req.body;
            console.log("the webhook api got called with these events: ", events)
            // try {
            //     axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/pusher/handle-presence-events`, { events })
            // } catch (e) { console.log(e) }
            await HandlePresenceEvents(events)

            res.status(200).json({ success: true, message: 'Webhook received successfully' });
        } else res.status(405).json({ message: 'Method not allowed, Allowed Methods: POST' });
    } catch (error) {
        console.error('Pusher Webhook Error:', error);
        res.status(500).json({ message: 'Webhook processing error' });
    }
}

async function HandlePresenceEvents(events) {
    for (const { name, user_id } of events) {
        if (name === 'member_added') {
            console.log("A member just joined with id: " + user_id)
            if (isValidObjectId(user_id)) {
                await ConnectDB()
                User.findByIdAndUpdate(user_id, { is_active: true }, { new: true, lean: true })
                console.log("user_joined handled successfully.")
            } else return
        }
        else if (name === 'member_removed') {
            console.log("A member just left server with id: " + user_id)
            await ConnectDB()
            if (isValidObjectId(user_id)) await User.findByIdAndUpdate(user_id, { is_active: false })
            console.log("user_left handled successfully.")
        }
    }
}