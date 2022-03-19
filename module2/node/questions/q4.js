// read content of unorganised folder and make  an array which has extension name of each file

let fs=require("fs");
let path=require("path");


let folderpath="D:\\FJP-6\\module2\\node\\unorganised";
let contentOfPath=fs.readdirSync(folderpath);

let extArr=[];
for(let i=0;i<contentOfPath.length;i++)
{
    let name=contentOfPath[i];
    extArr.push(path.extname(name));
}

console.log(extArr);