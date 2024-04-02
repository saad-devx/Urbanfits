import ConnectDB from "@/utils/connect_db";
import StandardApi from "@/middlewares/standard_api";
import SaveSignsMetrics from "@/utils/signs-metrics";

const UserVisit = async (req, res) => StandardApi(req, res, { method: "POST", verify_user: false }, async () => {
    await ConnectDB();
    SaveSignsMetrics("visits")
    res.status(200).end()
})
export default UserVisit;