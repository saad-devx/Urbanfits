import Signs from "@/models/signs";
import { monthNames } from "@/uf.config";
import { getDateOfTimezone } from "./cyphers";

const SaveSignsMetrics = async (incProp) => {
    if (!["signups", "visits"].includes(incProp)) throw new Error("Invalid incrememnt property, should be the one of: signups, visitors")
    const date = getDateOfTimezone("Asia/Karachi");

    const dateObj = {
        month: monthNames[date.getMonth()],
        date: date.getDate(),
        year: date.getFullYear()
    }

    await Signs.findOneAndUpdate(dateObj, {
        ...dateObj,
        $inc: {
            [incProp]: 1
        }
    }, { upsert: true })
    console.log(incProp + " incremented by 1")
}

export default SaveSignsMetrics