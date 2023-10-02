import ConnectDB from "@/utils/connect_db";
import User from "@/models/user";
import UFpoints from "@/models/ufpoints";
import GuestUser from "@/models/guest_user";
import { generateRandomInt } from "@/utils/generatePassword";

export default async function PusherWebhooks(req, res) {
    try {
        if (req.method === 'POST') {
            const { events } = req.body;

            for (const event of events) {
                if (event.name === 'member_added') {
                    console.log("A member just joined with id: " + event.user_id)
                    if (event.user_id.endsWith('_isguest')) return res.status(200).json({ message: 'Webhook received successfully' });
                    await ConnectDB()
                    await User.findByIdAndUpdate(event.user_id, {
                        is_active: true,
                    })

                    const currentDate = new Date()
                    const user = await User.findById(event.user_id)
                    const { last_seen } = user
                    currentDate.setHours(0, 0, 0, 0);
                    last_seen.setHours(0, 0, 0, 0);
                    const expiryDate = new Date(new Date().setDate(new Date().getDate() + 7))
                    if (currentDate > last_seen && user.createdAt < currentDate) {
                        const reward = generateRandomInt(20, 50)
                        await UFpoints.create({
                            user_id: user._id,
                            card_number: user.card_number,
                            points: reward,
                            source: "daily_checkin",
                            expiration_date: expiryDate
                        })
                    }
                }
                else if (event.name === 'member_removed') {
                    console.log("A member just left server with id: " + event.user_id)
                    await ConnectDB()
                    if (event.user_id.endsWith('_isguest')) {
                        const userId = event.user_id.split("_")[0]
                        console.log(userId)
                        await GuestUser.findByIdAndDelete(userId)
                    }
                    else {
                        await User.findByIdAndUpdate(event.user_id, {
                            is_active: false,
                            last_seen: new Date()
                        })
                    }
                }
            }

            res.status(200).json({ message: 'Webhook received successfully' });
        } else {
            res.status(405).json({ message: 'Method not allowed, Allowed Methods: POST' });
        }
    } catch (error) {
        console.error('Webhook Error:', error);
        res.status(500).json({ message: 'Webhook processing error' });
    }
}