const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const fs = require("fs");
const { loadEnvFile } = require("node:process");

// 1. Load ENVs (Only for Node 20.6+)
try { loadEnvFile(); } catch (e) { console.log("⚠️ No .env file found, using manual process.env"); }

async function runTest() {
    const fileKey = "backend-test-" + Date.now() + ".jpg";
    const localPath = "C:\\Users\\saada\\Projects\\Client Porjects\\Urban Fits\\Website\\public\\card imgs\\card img8.jpg"; // Make sure this file exists!

    const s3client = new S3Client({
        endpoint: "https://s3.eu-central-003.backblazeb2.com",
        region: "eu-central-003",
        credentials: {
            accessKeyId: "003eceb734722080000000001",
            secretAccessKey: "K0039LV35X/jQIuD53JjpuJWKL5Jb3A",
        }
    });

    try {
        console.log("🚀 Starting Backend Test...");

        // Step A: Generate Signed URL
        const putCommand = new PutObjectCommand({
            Bucket: "urbanfits",
            Key: fileKey,
            ContentType: "image/jpg"
        });
        const uploadUrl = await getSignedUrl(s3client, putCommand, { expiresIn: 3600 });
        console.log("✅ Step A: Signed URL generated:", uploadUrl);

        // Step B: Read Local File
        if (!fs.existsSync(localPath)) throw new Error(`File not found at ${localPath}`);
        const fileBuffer = fs.readFileSync(localPath);
        console.log("✅ Step B: Local file read successfully.");

        // Step C: Upload via Fetch (Simulating the frontend)
        console.log("⏳ Step C: Uploading to Backblaze...");
        const response = await fetch(uploadUrl, {
            method: "PUT",
            body: fileBuffer,
            headers: { "Content-Type": "image/webp" }
        });

        if (response.ok) {
            console.log("🎉 SUCCESS! File uploaded to B2.");
            console.log("🔗 Public/Signed Link:", uploadUrl.split('?')[0]);
        } else {
            const errorBody = await response.text();
            console.error(`❌ FAILED! Status: ${response.status}`);
            console.error("Error Body:", errorBody);
        }

    } catch (err) {
        console.error("💥 CRITICAL ERROR:", err.message);
    }
}

runTest();