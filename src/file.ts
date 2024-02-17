import fs from "fs";
import path from "path";

//get all files in a folder that you uploaded to put it in  s3 bucket
export function getAllFiles(folderPath: string) {
  let response: string[] = [];

  const allFilesFolders = fs.readdirSync(folderPath);
  allFilesFolders.forEach((file) => {
    const fileFullPath = path.join(folderPath, file);
    if (fs.lstatSync(fileFullPath).isDirectory()) {
      response = response.concat(getAllFiles(fileFullPath));
    } else {
      response.push(fileFullPath);
    }
  });
  return response;
}
