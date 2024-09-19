
// type 1
/*const obj = {

    uid: 101,
    uname: "Admin",
    uemail: "admin@techunit.com",
    year: 2023   
}
console.log(obj);

// type 2
const user = {};
user.id = 1;
user.name = "Punit";
user.year = 2023;
console.log(user);

// type 3

const card = new Object();
card.id = 101;
card.name = "Admin";
card.year = 2023;
console.log(card);


//singleton:- when we create object as litral then singleton doesn't creates when object created as constructor then singlrton also creates
//Object.create:- constructor type

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name1 : " sonam",
    "full name": "Sonam Chauhan",
    [mySym] : "myKey1",//declare symbol like this only
    age : 18,
    location : "Noida",
    email: "sonam123@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Manday", "Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);//in this case full name can't be call by dot(.)
console.log(jsUser[mySym]);//syntax of accesing symbol only this

//Override
jsUser.email = "sonam234@gmail.com";
//Object.freeze(jsUser);
jsUser.email = "sona@microsoft.com";
console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello everyone");
}

jsUser.greeting2 = function(){
    console.log(`hello JS user, ${this.name1}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());*/

//singleton

//const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = 'sonam'
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "sona@gmail.com",

    fullname:{
        userfulname:{
            fistname:"Soham",
            lastname: "chauhan"

        }
    }
}


// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfulname);
// console.log(regularUser.fullname.userfulname.fistname);

const obj1={1:"a", 2:"b"}
const obj2={3:"a", 4:"b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign(obj1,obj2);
// const obj3 = Object.assign({},obj1,obj2);

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const user = [
    {
        id: 1,
        email: '123@gmail.com'
    },
    {
        id: 2,
        email: '123@gmail.com'
    },
    {
        id: 1,
        email: '123@gmail.com'
    },
    {
        id: 1,
        email: '123@gmail.com'
    }
]

user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isloggedIn'));//if value does not exist then we can ask

//sistructuring of object 

const course = {
    coursename: "JavaScript",
    price: "999",
    courseInstructor: "Hitesh"
}

//course.courseInstructor

const {courseInstructor} = course
//console.log(courseInstructor);

const {courseInstructor:instructor} = course
console.log(instructor);

// {
//     "name": "sonam",
//     "coursename": "jas in hindi",
//     "price": "0"
// }






