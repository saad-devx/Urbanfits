import ConnectDB from "@/utils/connect_db";
import Addresses from "@/models/addresses";
import { getDateOfTimezone, groupBy } from "@/utils/cyphers";
// import StandardApi from "@/middlewares/standard_api";

const TestApiHandler = async (req, res) => {
    await ConnectDB();
    await Addresses.updateMany({}, {
        $rename: {
            "shipping_address": "address1",
            "billing_address": "address2"
        },
        // $unset: {
        //     stockDate: 1,
        //     manufacturer: 1,
        //     vendors: 1
        // }
    })

    res.status(200).json({
        success: true,
        msg: "Yoo the work's done"
    })
}
export default TestApiHandler