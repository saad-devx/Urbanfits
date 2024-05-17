import ConnectDB from "@/utils/connect_db";
import Category from "@/models/category";

const TestApiHandler = async (req, res) => {
    await ConnectDB();

    res.status(200).json({
        success: true,
        msg: "The work's done!"
    })
}
export default TestApiHandler