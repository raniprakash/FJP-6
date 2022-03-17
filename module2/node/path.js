let path=require('path');

let extensionName = path.extname("D:\\FJP-6\\module1\\project1\\index.html");
console.log(extensionName);

let baseName = path.basename("D:\\FJP-6\\module1\\project1\\index.html");
console.log(baseName);



console.log(__dirname);//gives you the path of directory
console.log(__filename);//gives you the path of file

let dirname=__dirname;
let newFilePath=path.join(dirname,"test.js")

console.log(newFilePath);
