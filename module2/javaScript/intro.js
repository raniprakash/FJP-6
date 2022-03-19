//to print
console.log("Hello Everyone!!!");
console.log("Lets code using JavaScript");

//variables and datatypes in js

let num=10;//Number
console.log(num);

let char='a';//Character
console.log(char);

let str="I am string";//String
console.log(str);

let bool=true;//boolean
console.log(bool);

//loops

//for loop
for(let i=1;i<=5;i++)
{
    console.log(i);
}

//while loop
let count=10;
while(count>0)
{
    console.log(count);
    count--;
}


//isPrime JS code

let a=13;
let isPrime=true;

for(let i=2;i*i<a;i++)
{
    if(a%i==0)
    {
        isPrime=false;
        break;
    }
}
if(isPrime)
{
    console.log("Number is Prime.");
}else{
    console.log("Number is not prime.");
}
