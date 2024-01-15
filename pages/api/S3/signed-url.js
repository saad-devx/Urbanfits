import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import CorsMiddleware from "@/utils/cors-config";

const GetSignedS3Url = async (req, res) => {
    try {
        if (req.method === "GET") {
            await CorsMiddleware(req, res)
            const { file_key } = req.query
            if (!file_key) return res.status(403).json({ success: false, msg: "A valid `file_key` query parameter required." })

            const s3client = new S3Client({
                region: process.env.NEXT_PUBLIC_AWS_REGION,
                credentials: {
                    accessKeyId: process.env.NEXT_PUBLIC_S3_ACCESS_KEY,
                    secretAccessKey: process.env.NEXT_PUBLIC_S3_SECRET_KEY,
                }
            });
            const putCommand = new PutObjectCommand({
                Bucket: "urban-fits",
                Key: file_key
            });
            const uploadUrl = await getSignedUrl(s3client, putCommand);

            return res.status(200).json({
                success: true,
                uploadUrl
            })
        } else return res.status(405).json({ success: false, msg: "Method not allowed, Allowed methods: 'GET'" })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, msg: "Internal Server Error occurred, please trey again in a while.", error })
    }
}
export default GetSignedS3Url