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
    console.log("got these events params: ", events)
    for (const { name, user_id } of events) {
        console.log("the each event data: ", name, user_id)
        if (name === 'member_added') {
            console.log("A member just joined with id: " + user_id)
            if (isValidObjectId(user_id)) {
                console.log("entry point 1")
                await ConnectDB()
                const user = await User.findByIdAndUpdate(user_id, { is_active: true }, { new: true, lean: true })

                const todayDate = getDateOfTimezone(user.timezone);
                const currentDate = getDateOfTimezone(user.timezone).setHours(0, 0, 0, 0);
                const last_checkin = new Date(user.last_checkin).getTime();
                const expiryDate = new Date(todayDate.setDate(todayDate.getDate() + 7));
                if ((currentDate > last_checkin) && (new Date(user.createdAt).setHours(23, 59, 59, 999) < currentDate)) {
                    const reward = generateRandomInt(20, 50)
                    console.log("the reward rewarded: ", reward)
                    await AddPoints(user._id, user.uf_wallet.card_number, user.timezone, { earned: reward, expirationDate: expiryDate, })
                    console.log("entry point 2")
                    await sendNotification(user._id, {
                        category: "reward",
                        heading: "Daily Check in Bonus",
                        type: "daily_checkin",
                        mini_msg: `Welcome back, you won ${reward} UF-Points today!`,
                        message: `Welcome back! ${reward} UF-Points are added to your UF-wallet, they will expire after 7 days and shall be deducted from your wallet. Keep coming everyday and win exciting rewards.`
                    }, { notify: true })
                    console.log("entry point 3")
                    await User.findByIdAndUpdate(user_id, { last_checkin: new Date(getDateOfTimezone(user.timezone).setHours(23, 59, 59, 999)) })
                    console.log("entry point 4")
                }
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