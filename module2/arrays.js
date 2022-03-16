//empty array
let arr=[];
console.log(arr);

//array with elements

let eleArr=[1,2,3,4,"Hello, I am String",false,'c',5,6];
console.log(eleArr);

console.log("Element at 4th index: "+eleArr[4]);
console.log("Element at 5th index: "+eleArr[5]);
console.log("Element at 6th index: "+eleArr[6]);

//array methods
   //1. Push Method
   console.log("Array before push: ",eleArr);
   eleArr.push("new item");
   console.log("Array after push : ",eleArr);
   
   //2. pop
   
   console.log("Array before pop : ",eleArr);
   eleArr.pop();
   console.log("Array after pop: ",eleArr);
   
   //3. shift
   
   console.log("Array before shift: ",eleArr);
   eleArr.shift();
   console.log("Array after shift: ",eleArr);
   
   
   //4. unshift
   
   console.log("Array before unshift: ",eleArr);
   eleArr.unshift("newly added item");
   console.log("Array after unshift: ",eleArr);
   
   //length
   
   let len = eleArr.length;
   console.log(len);