import ConnectDB from "@/utils/connect_db";
import UFpoints from "@/models/ufpoints"
import StandardApi from "@/middlewares/standard_api"

const TestApiHandler = (req, res) => StandardApi(req, res, { method: "POST", verify_user: false }, async () => {
    await ConnectDB()

    const monthNames = [
        'january', 'february', 'march', 'april',
        'may', 'june', 'july', 'august',
        'september', 'october', 'november', 'december'
    ];

    console.log("getting all the points docs...")
    const allPointsDocs = await UFpoints.find();

    console.log("iterating over the docs to save respected year and month...")
    for (let doc of allPointsDocs) {
        const createdDate = new Date(doc.createdAt);
        doc.month = monthNames[createdDate.getMonth()];
        doc.year = createdDate.getFullYear();
        doc.spent = 0;
        if (!doc.total_balance) doc.total_balance = 0
        await doc.save()
    }
    console.log("terraforming completed")

    res.status(200).json({
        success: true,
        msg: "terrafroming completed successfully"
    })
})

export default TestApiHandler