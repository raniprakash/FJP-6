//fs helps you Create, Read, Update, Delete file - CRUD 


let fs=require("fs");
// console.log(fs);

let path=require("path");

// let filepath=path.join(__dirname,"file.txt");

// //C-it creates if it does not exist else overides it
// fs.writeFileSync(filepath,"Hello, I am a text file.");


// //R-reading a file
// let content=fs.readFileSync(filepath,'utf-8');
// console.log(content);

// //U-updating a file
// fs.appendFileSync(filepath,"Newly added content");
// console.log("After Update: ");
// console.log(fs.readFileSync(filepath,'utf-8'));

// D-delete
// fs.unlinkSync(filepath);


//Create a Directory
if(!(fs.existsSync("NewDirectory"))){
    fs.mkdirSync("NewDirectory");
}else{
    console.log("Already Exists");
}

//Read a Directory
let folderpath="D:\\FJP-6\\module1";

let contentOfPath=fs.readdirSync(folderpath);
console.log(contentOfPath);
 

//Delete a Directory

// fs.rmdirSync("NewDirectory");


//Copy a file

let sourcePath=path.join(__dirname,"file.txt");
let destinationPath=path.join(__dirname,"module","file.txt");

// console.log(sourcePath);
// console.log(destinationPath);

fs.copyFileSync(sourcePath,destinationPath);


