
// let input = process.argv;
// console.log(input);
// //['pathToNode','pathToFile','Input passed in the terminal']

// let inputArr = process.argv;
// console.log(inputArr[2]);


let fs = require("fs");
//Task 1: to take input
let folderpath = process.argv[2];
//console.log(folderpath);


/*
    We assume that the folder we are organising doesn't contain any sub-folders, it only contains files.
*/

//Task 2: to read the folder

let folderExists = fs.existsSync(folderpath);

if(folderExists){
    let files=fs.readdirSync(folderpath);
    console.log(files);
}
else{
    console.log("Please enter valid pathname!!!");
}
