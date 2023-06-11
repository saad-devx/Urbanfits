import ConnectDB from "@/utils/connect_db"
import Newsletter from "@/models/newsletter"

const UpdateNewsletter = async (req, res) => {
    try {
        if (req.method === 'PUT') {
            await ConnectDB()
            await Newsletter.updateMany({}, {$unset: { active: 1}}, { multi: true })
            res.status(200).json({
                success: true,
                msg: `Newsletter data has been updated successfully`,
            })
        }
        else {
            res.status(403).json({ success: false, msg: "Method no allowed, you are using wrong request method!" })
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).send("Internal Server Error occurred. Please retry later.")
    }
}

export default UpdateNewsletter