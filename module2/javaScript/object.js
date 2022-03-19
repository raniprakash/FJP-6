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


//adding keys to objects

console.log("object before adding new key: ",capAmerica);
capAmerica.Movies =['Captain America:The First Avenger','Avengers','Civil-War','Endgame'];
console.log("object after adding new key: ",capAmerica);

//deleting key
delete capAmerica.Movies;
console.log(capAmerica);

/* to change an existing key or to add new key we use '=' assignment operator*/


//other methods to access key
console.log(capAmerica.Name);  //the .here by default considers Name to be a string
console.log(capAmerica['Name']);
//console.log(capAmerica[Name]); gives error