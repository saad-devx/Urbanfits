import ConnectDB from "@/utils/connect_db";
import User from "@/models/user";
import UFpoints from "@/models/ufpoints";
import GuestUser from "@/models/guest_user";
import SavePointsHistory from "@/utils/save_points_history";
import { sendNotification } from "@/utils/send_notification";
import { generateRandomInt } from "@/utils/generatePassword";
import StandardApi from "@/middlewares/standard_api";

const HandlePresence = async (req, res) => StandardApi(req, res, { method: "PUT" }, async () => {
    const { name, user_id } = req.body.event;
    if (!name || !user_id) return res.status(400).send("Valid event body paramters are required. Query parameters: name, user_id. Note that a guest user's id must be suffixed by `_isguest`.");
    if (name === 'user_joined') {
        console.log("A member just joined with id: " + user_id)
        if (user_id.endsWith('_isguest')) return res.status(200).end();

        await ConnectDB()
        const user = await User.findByIdAndUpdate(user_id, { is_active: true }, { new: true })

        const currentDate = new Date().setHours(0, 0, 0, 0)
        const last_checkin = new Date(user.last_checkin).setHours(59, 59, 59, 999);
        const expiryDate = new Date(new Date().setDate(new Date().getDate() + 7))
        if ((currentDate > last_checkin) && (new Date(user.createdAt).setHours(59, 59, 59, 999) < currentDate)) {
            const reward = generateRandomInt(20, 50)
            await UFpoints.create({
                user_id: user._id,
                card_number: user.uf_wallet.card_number,
                points: reward,
                source: "daily_checkin",
                expiration_date: expiryDate
            })
            await sendNotification(user._id, {
                category: "reward",
                heading: "Daily Check in Bonus",
                type: "daily_checkin",
                mini_msg: `Welcome back, you won ${reward} UF-Points today!`,
                message: `Welcome back! ${reward} UF-Points are added to your UF-wallet, they will expire after 7 days and shall be deducted from your wallet. Keep coming everyday and win exciting rewards.`
            }, { notify: true })
            await SavePointsHistory(user._id, user.uf_wallet.card_number, { earned: reward })
            await User.findByIdAndUpdate(user_id, { last_checkin: new Date(new Date().setHours(59, 59, 59, 999)) })
        }
        console.log("user_joined handled successfully.")
    }
    else if (name === 'user_left') {
        console.log("A member just left server with id: " + user_id)
        await ConnectDB()
        if (user_id.endsWith('_isguest')) {
            const userId = user_id.split("_")[0]
            await GuestUser.findByIdAndDelete(userId)
        }
        else await User.findByIdAndUpdate(user_id, { is_active: false })
        console.log("user_left handled successfully.")
    }
    res.status(200).end();
})
export default HandlePresence