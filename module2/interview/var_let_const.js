/*  "var"
  
var supports re-initialisation, re-declaration, hoisting

console.log(a);
a=10;
console.log(a);
var a = 20;
console.log(a);

*/





/*   "let"

let supports re-initialisation, but not redeclaration and hoisting. Yes, JS supports hoisting but "let" variable is pushed to 
temporary dead zone.

console.log(a);
let a;
a = 10;
console.log(a);

let a = 20;
console.log(a);

*/





/*  "const"

const doesn't support re-declaration, re-initialisation and hoisting(TDZ).

const a;
a = 10; // gives error because const requires declaration with initialisation.

*/








