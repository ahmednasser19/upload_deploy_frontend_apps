import { S3 } from "aws-sdk";
import fs from "fs";
require("dotenv").config();

const s3 = new S3({
  region: "fra1",
  accessKeyId: process.env.BUCKET_ACCESS_KEY,
  secretAccessKey: process.env.BUCKET_SECRET_KEY,
  endpoint: process.env.BUCKET_ENDPOINT,
  s3ForcePathStyle: true,
});

export const uploadFile = async (fileName: string, localFilePath: string) => {
  console.log("Uploading file to S3");
  const fileContent = fs.readFileSync(localFilePath);
  console.log("process.env", process.env.BUCKET_ACCESS_KEY);
  const response = await s3
    .upload({
      Body: fileContent,
      Bucket: "vercel-buckets",
      Key: fileName,
    })
    .promise();
  console.log(response);
};
