import fs from "node:fs"

function fileContent(){ 
    // const Content = fs.readFileSync("./file-data.txt", "utf-8")
    // console.log(Content)
    try {
        return fs.readFileSync("file-data.txt", "utf-8");
    } catch (error) {
        console.error("Error reading file:", error);
        return null;
    }
}

export {fileContent}