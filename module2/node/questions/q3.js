//Q. copy index.html file from module1 to a new folder inside module2 having name html.

let fs=require("fs");
let path=require("path");


let sourcePath=path.join(__dirname,"..","..","..","\\module1\\project1\\index.html");
console.log(sourcePath);
let destinationPath=path.join(__dirname,"..","..","index.html");
console.log(destinationPath);

fs.copyFileSync(sourcePath,destinationPath);
