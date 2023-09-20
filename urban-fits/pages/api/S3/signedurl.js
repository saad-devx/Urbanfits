import { S3 } from "aws-sdk";
import CorsMiddleware from "@/utils/cors-config"

const GetSignedS3Url = async (req, res) => {
    try {
        await CorsMiddleware(req, res)
        if (req.method === "GET") {
            const { folder, fileName } = req.query
            const s3 = new S3({
                region: "eu-north-1",
                credentials: {
                    accessKeyId: process.env.AWS_ACCESS_KEY,
                    secretAccessKey: process.env.AWS_SECRET_KEY,
                },
                signatureVersion: 'v4'
            })
            const params = {
                Bucket: "urban-fits",
                Key: folder + `${fileName ? fileName : Date.now()}`
            }
            const uploadUrl = await s3.getSignedUrlPromise("putObject", params)
            return res.status(200).json({
                success: true,
                uploadUrl
            })

        } else return res.status(405).json({ success: false, msg: "Method not allowed, Allowed methods: 'GET'" })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            msg: "Internal Server Error occurred, please trey again in a while.",
            error
        })
    }
}

export default GetSignedS3Url