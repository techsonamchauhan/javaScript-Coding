"use strict"; //treat all JS code as newer version

//alert(3+3)// we are using nodejs, not browser

/*let name = "Sona"
let age = 18
let isLonggedIn = false*/

//number => 2 to power 53
// bigint
// String => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique



// object 

/*console.log(typeof null)


let score = "33abc"

console.log(typeof score);
console.log(typeof (score));
let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);*/


//"33" => 33
//"33abc" => NaN
//true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);
//console.log(booleanIsLoggedIn);

let Number = 33;

let StringNumber = String(Number);
//console.log(StringNumber);
//console.log(typeof StringNumber);

//=========================Operations=========================

let value = 3
let negvalue = -value
// console.log(negvalue);

/*console.log("1" + 2);//12
console.log(1 + "2");//12
console.log("1" + 2 + 2);//122
console.log(1 + 2 + "2");//32*/

let Counter = 100
Counter++;//101
//++Counter;//101
// console.log(Counter);

/*console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);*/

/*console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true*/
//in case of undefined it always give false

//===
//console.log("2" === 2);//false
 

//their are 7 type of primitive datatype
// String,Number,Boolean,BigInt,Symbol,Null,Undefined

//reference (Non Primitive data type)
//Array,Object,Function

const heros = ["shaktiman","Thor","Doga"];

let myObj = {
    name: "Sonam",
    Age: 23
}

let myFun = function(){
    console.log("Hello World");
}

console.log(typeof heros);

//==========Memory allocatin======

// Stack(Primitive), Heap(Non-Primitive)

/*let myName = "Sonam Chauhan";
    Stack                 Heap
|---------------|__      |--------------------|
|---------------|  \     |                    |
|---------------|   \_/=>|     obj{           |
|---------------|        |                    |
|---------------|        |              }     |
|---------------|        |--------------------|                    
*/

//===========String==========
const name = "Sonam";
const repoCount = 50

//console.log(name + repoCount);     X

//console.log(`Hello my name is  ${name} and my repo couint is ${repoCount}`);

const gameName = new String('Sonam-hc')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase());
//console.log(gameName.charAt(3));
//console.log(gameName.indexOf('o'));

/*const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);*/

const newString1 = "    Sonam    "
console.log(newString1);
console.log(newString1.trim());//to remove space

const url = "https://Google.com/Sonam chauhan"

console.log(url.replace(' ', '-'))

console.log(url.includes('Sonam'))

console.log(gameName.split('-'))