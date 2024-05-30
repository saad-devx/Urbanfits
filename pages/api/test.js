import axios from "axios";

const TestApiHandler = async (req, res) => {
    // await ConnectDB();
    try {
        const objDeletion = await axios.put(`${process.env.NEXT_PUBLIC_HOST}/api/S3/delete-object?object_url=carousel-images/home/1716994438444.webp`)
        console.log(`Image deleted successfully.`)
    } catch (e) { console.log("Error deleting an S3 object: ", e) }

    res.status(200).json({
        success: true,
        msg: "The work's done!"
    })
}
export default TestApiHandler