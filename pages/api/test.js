import ConnectDB from "@/utils/connect_db";
import Signs from "@/models/signs";
import { getDateOfTimezone, groupBy } from "@/utils/cyphers";
// import StandardApi from "@/middlewares/standard_api";

const TestApiHandler = async (req, res) => {
    await ConnectDB();
    const currentDate = getDateOfTimezone();

    const avgPeriod = 30; // in days

    // Signs metrics
    const pastMonthDate = new Date(getDateOfTimezone().setDate(currentDate.getDate() - avgPeriod));
    const signMetrics = await Signs.find({ createdAt: { $gt: pastMonthDate } }).sort({ _id: 1 });

    const dailyVisitsNumbers = [];
    const dailySignupsNumbers = [];
    const groupedItems = groupBy(signMetrics, "month");
    Object.keys(groupedItems).forEach(key => {
        const dateGrouping = Object.values(groupBy(groupedItems[key], "date"))[0];
        const signups = dateGrouping.filter(item => item.type == "signup").length;;
        const visits = dateGrouping.filter(item => item.type == "visit").length;;
        dailySignupsNumbers.push(signups)
        dailyVisitsNumbers.push(visits)
    });

    const avg_signups = dailySignupsNumbers.reduce((acc, value) => acc + value, 0) / avgPeriod;
    const avg_visits = dailyVisitsNumbers.reduce((acc, value) => acc + value, 0) / avgPeriod;

    res.status(200).json({
        success: true,
        avg_signups,
        avg_visits
    })
}
export default TestApiHandler