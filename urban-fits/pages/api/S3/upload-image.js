import { PutObjectCommand, S3 } from "@aws-sdk/client-s3";
import CorsMiddleware from "@/utils/cors-config"

const UploadImage = async (req, res) => {
    try {
        await CorsMiddleware(req, res);

        if (req.method === "POST") {
            const { file, folder, fileName } = req.body;
            const s3 = new S3({
                region: process.env.AWS_REGION,
                credentials: {
                    accessKeyId: process.env.AWS_ACCESS_KEY,
                    secretAccessKey: process.env.AWS_SECRET_KEY,
                },
            });

            const bufferImage = Buffer.from(file, "base64")
            const pathKey = `${folder}/${fileName ? fileName : Date.now()}`
            const params = {
                Bucket: "urban-fits",
                Key: pathKey,
                Body: bufferImage,
                ContentType: "application/octet-stream",
            };

            const response = await s3.send(new PutObjectCommand(params));

            const imageUrl = `https://urban-fits.s3.${process.env.AWS_REGION}.amazonaws.com/${pathKey}`

            return res.status(200).json({
                success: true,
                response,
                imageUrl
            });
        } else return res.status(405).json({ success: false, msg: "Method not allowed, Allowed method 'POST'" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            msg: "Internal Server Error occurred, please try again in a while.",
            error
        });
    }
};

export default UploadImage;