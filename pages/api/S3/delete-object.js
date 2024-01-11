import { DeleteObjectCommand, S3Client } from "@aws-sdk/client-s3";
import CorsMiddleware from "@/utils/cors-config";
import mongoose from "mongoose"

const DeleteS3Object = async (req, res) => {
    try {
        if (req.method === "PUT") {
            await CorsMiddleware(req, res)
            const { object_url, user_id } = req.query;
            if (!object_url || !mongoose.Types.ObjectId.isValid(user_id)) return res.status(400).json({ success: false, msg: "A valid `object_url` and `user_id` query parameters for object deletion are required." })

            const client = new S3Client({
                region: process.env.NEXT_PUBLIC_AWS_REGION,
                credentials: {
                    accessKeyId: process.env.NEXT_PUBLIC_S3_ACCESS_KEY,
                    secretAccessKey: process.env.NEXT_PUBLIC_S3_SECRET_KEY,
                }
            });

            const deletecommand = new DeleteObjectCommand({
                Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME,
                Key: object_url,
            });
            const data = await client.send(deletecommand);

            return res.status(200).json({
                success: true,
                msg: "Object deleted successfully.",
                data
            })

        } else return res.status(405).json({ success: false, msg: "Method not allowed, Allowed methods: 'PUT'" })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, msg: "Internal Server Error occurred, please trey again in a while.", error })
    }
}

export default DeleteS3Object