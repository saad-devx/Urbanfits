import UFpoints from "@/models/ufpoints";
import WeeklyCheckinPointsHistory from "@/models/weekly_checkin_history"
import { getDateOfTimezone } from "./cyphers";

export const AddPoints = async (user_id, card_number, timezone, data) => {
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

        await UFpoints.create({
            user_id,
            card_number,
            source,
            spent,
            points: earned,
            actual_points: earned,
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

export const GetUFBalance = async (user_id, card_number, timezone) => {
    const currentDate = getDateOfTimezone(timezone);
    const pointsDocs = await UFpoints.find({
        user_id,
        card_number,
        $or: [
            { expirationDate: { $exists: false } },
            { expirationDate: { $gt: currentDate } }
        ]
    })
    const totalPoints = pointsDocs.reduce((prevTotal, currentObj) => prevTotal + currentObj.actual_points, 0);
    return totalPoints;
}

export const DeductPoints = async (user_id, card_number, timezone, points_to_deduct) => {
    const pointsDocs = await UFpoints.find({ user_id, card_number, source: { $ne: "deduction" } });

    console.log("iterating over the docs to deduct points")
    let deductedPoints = 0;
    for (const pointsDoc of pointsDocs) {
        const remainingPoints = pointsDoc.points - deductedPoints;

        if (remainingPoints >= points_to_deduct) {
            pointsDoc.points -= points_to_deduct;
            await pointsDoc.save();

            deductedPoints += points_to_deduct;
            break;
        } else if (remainingPoints >= 0) {
            pointsDoc.points -= remainingPoints;
            await pointsDoc.save();

            deductedPoints += remainingPoints;
        }
    }

    console.log(deductedPoints)
    await AddPoints(user_id, card_number, timezone, { spent: points_to_deduct, source: "deduction" })
}