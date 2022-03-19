//Q. given an array arr=[audio,video,image,software,documents,applications,other]
//   make folder for each element in the given array and inside each folder make 4 files of that type

let fs=require("fs");
let path=require("path");

let arr = ['Audio','Video','Software','Documents','Applications','Others'];
let nameArr = ['abc','def','ghi','jkl'];
let extArr = ['.mp3','.mp4','.exe','.pdf','.apk','.rar'];

let organisePath=path.join(__dirname,"Organised");

if(!(fs.existsSync("Organised"))){
    fs.mkdirSync("Organised");

    for(let i=0;i<arr.length;i++)
    {
        let folderpath=path.join(organisePath,arr[i])
        if(!(fs.existsSync(folderpath)))
            fs.mkdirSync(folderpath);
        for(let j=0;j<nameArr.length;j++)
        {
            let fileName=nameArr[j]+extArr[i];
            let filepath=path.join(folderpath,fileName);
            fs.writeFileSync(filepath,"");
        }
    }

}