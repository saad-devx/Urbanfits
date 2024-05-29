import { DeleteObjectCommand, S3Client, ListObjectVersionsCommand } from "@aws-sdk/client-s3";
import StandardApi from "@/middlewares/standard_api";

const DeleteS3Object = async (req, res) => StandardApi(req, res, { method: "PUT", verify_user: false }, async () => {
    const { object_url } = req.query;
    if (!object_url) return res.status(400).json({ success: false, msg: "A valid `object_url` query parameter for object deletion is required." })

    const client = new S3Client({
        region: process.env.NEXT_PUBLIC_AWS_REGION,
        credentials: {
            accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY,
            secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_KEY,
        }
    });

    try {
        // List all versions of the object
        const listVersionsParams = {
            Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME,
            Prefix: object_url,
        };
        const versionsData = await client.send(new ListObjectVersionsCommand(listVersionsParams));

        console.log("Here is the version data : ", versionsData)

        // Iterate over each version and delete it
        if (versionsData.Versions) {
            for (const version of versionsData.Versions) {
                const deleteParams = {
                    Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME,
                    Key: object_url,
                    VersionId: version.VersionId,
                };
                await client.send(new DeleteObjectCommand(deleteParams));
                console.log(`Deleted version: ${version.VersionId}`);
            }
        }

        return res.status(200).json({
            success: true,
            msg: "Object and all its versions deleted successfully."
        });

    } catch (error) {
        console.error("Error deleting object versions:", error);
        return res.status(500).json({
            success: false,
            msg: "Failed to delete object versions.",
            error: error.message
        });
    }
});

export default DeleteS3Object;