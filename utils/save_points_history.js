import UFpoints from "@/models/ufpoints";
import WeeklyCheckinPointsHistory from "@/models/weekly_checkin_history"
import { getDateOfTimezone } from "./cyphers";

const SavePointsHistory = async (user_id, card_number, timezone, data) => {
    try {
        const currentDate = getDateOfTimezone(timezone);
        const {
            earned = 0,
            spent = 0,
            source = "daily_checkin",
            expirationDate
        } = data;
        const monthNames = [
            'january', 'february', 'march', 'april',
            'may', 'june', 'july', 'august',
            'september', 'october', 'november', 'december'
        ];

        const pointsDocs = await UFpoints.find({
            user_id,
            card_number,
            $or: [
                { expirationDate: { $exists: false } },
                { expirationDate: { $gt: currentDate } }
            ]
        })
        const totalBalance = pointsDocs.reduce((prevTotal, currentObj) => prevTotal + currentObj.points, 0)
        console.log(data)

        await UFpoints.create({
            user_id,
            card_number,
            source,
            spent,
            points: earned,
            total_balance: (totalBalance + earned) - spent,
            createdAt: currentDate,
            month: monthNames[currentDate.getMonth()],
            year: currentDate.getFullYear(),
            ...(expirationDate && { expiration_date: expirationDate }),
        })

        if (source === "daily_checkin") {
            const weeklyPointsHistory = await WeeklyCheckinPointsHistory.create({
                user_id,
                card_number,
                points: earned
            })
            console.log(weeklyPointsHistory)
        }
    } catch (error) { console.log(error) }
}
export default SavePointsHistory