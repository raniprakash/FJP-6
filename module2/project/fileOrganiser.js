
// let input = process.argv;
// console.log(input);
// //['pathToNode','pathToFile','Input passed in the terminal']

// let inputArr = process.argv;
// console.log(inputArr[2]);


let fs = require("fs");
let path=require("path");
//Task 1: to take input
let folderpath = process.argv[2];
//console.log(folderpath);


/*
    We assume that the folder we are organising doesn't contain any sub-folders, it only contains files.
*/

//Task 2: to read the folder

let folderExists = fs.existsSync(folderpath);

let extensions = {
    Audio:[".mp3"],
    Video:[".mp4",".mkv"],
    Document:[".doc",".xlsx",".pdf",".txt"],
    Image:[".jpeg",".jpg",".png",".gif"],
    Software:[".exe"]
};

if(folderExists){
    let files=fs.readdirSync(folderpath);
    // console.log(files);
    for(let i=0;i<files.length;i++)
    {
        let ext=path.extname(files[i]);
        let nameOfFolder=giveNameOfFolder(ext);
        // console.log("Ext-->",ext,"FolderName-->",nameOfFolder);
        //Task 4: Check if the folder exists, if it is not then create the folder
        let pathOfFolder=path.join(folderpath,nameOfFolder);
        let exist=fs.existsSync(pathOfFolder);
        if(exist){
            moveFile(folderpath,pathOfFolder,files[i]);
        }else{
            fs.mkdirSync(pathOfFolder);//doesn't exist create folder
            moveFile(folderpath,pathOfFolder,files[i]);

        }
    }
}
else{
    console.log("Please enter valid pathname!!!");
}

//Task 3: Differentiating files
function giveNameOfFolder(ext)
{
    for(key in extensions){
        let extArr=extensions[key];
        for(let i=0;i<extArr.length;i++)
        {
            if(extArr[i]==ext)
                return key;
        }
    }
    return 'Others';
}
   
function moveFile(folderpath,pathOfFolder,fileName){
    let srcpath=path.join(folderpath,fileName);
    let destpath=path.join(pathOfFolder,fileName);

    fs.copyFileSync(srcpath,destpath);
    fs.unlinkSync(srcpath);
}