let cp = require('child_process');

// //opening calculator 
// cp.execSync("calc");

// //opening vs code
// cp.execSync("code")

let content = cp.execSync("node test.js");
console.log("Output of test.js: "+ content);

/*
    console.log(content); --> will give output in binary form, to get the output in string without any extra text, 
*/

console.log(""+content);

