//Empty Object
let obj={};
console.log(obj);


let obj1={
    "Name":"Rani Prakash",
    "Age":22,
    "PhoneNo": 8563254698,
    lastName :"Prakash"    //keys are by default considered as strings. Whether you mention them in quotes or not, it doesn't matter.
}

console.log(obj1);

let capAmerica={
    Name: "Steve Rogers",
    Age:120,
    friends:["Natasha Romanoff", 'Bruce Banner','Tony Stark','Bucky'],
    Address: {
        City: 'Queens',
        State: 'New York'
    },
    saysHi:function(){
        console.log("Captain America says Hi!!");
    }

}

//whole object
//console.log(capAmerica);


//Name of capAmerica
console.log(capAmerica.Name);

//Age
console.log(capAmerica.Age);

//Friends
console.log(capAmerica.friends);
console.log(capAmerica.friends[0]);


//Address
console.log(capAmerica.Address);

//city
console.log(capAmerica.Address.City);

//sayHi
console.log(capAmerica.saysHi());
capAmerica.saysHi();
