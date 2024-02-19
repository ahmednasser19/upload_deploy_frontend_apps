"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllFiles = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
//get all files in a folder that you uploaded to put it in  s3 bucket
function getAllFiles(folderPath) {
    let response = [];
    const allFilesFolders = fs_1.default.readdirSync(folderPath);
    allFilesFolders.forEach((file) => {
        const fileFullPath = path_1.default.join(folderPath, file);
        if (fs_1.default.lstatSync(fileFullPath).isDirectory()) {
            response = response.concat(getAllFiles(fileFullPath));
        }
        else {
            response.push(fileFullPath);
        }
    });
    return response;
}
exports.getAllFiles = getAllFiles;
