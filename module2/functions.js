//function without parameters and return type
function sayHello(){
    console.log("Heyy");
}

//function with parametes
function sum(num1,num2){
    let sum=num1+num2;
    console.log("sum = "+sum);
}

//storing function in a variable
let a=function diff(num1,num2){
    return num1-num2;
}

//IIFE - Immediately Invoked Function Expression
(function(){
    console.log("Hello, I am IIFE");
})();

//IIFE with parameter
(function(num1,num2){
    return num1-num2;
})(10,5);


sayHello();
sum(1,3);
console.log(a);
console.log(a(10,5));