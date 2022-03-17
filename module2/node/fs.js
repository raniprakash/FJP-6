//fs helps you Create, Read, Update, Delete file - CRUD 


let fs=require("fs");
// console.log(fs);

let path=require("path");

let filepath=path.join(__dirname,"file.txt");

//C-it creates if it does not exist else overides it
fs.writeFileSync(filepath,"Hello, I am a text file.");


//R-reading a file
let content=fs.readFileSync(filepath,'utf-8');
console.log(content);

//U-updating a file
fs.appendFileSync(filepath,"Newly added content");
console.log("After Update: ");
console.log(fs.readFileSync(filepath,'utf-8'));

// D-delete
// fs.unlinkSync(filepath);
