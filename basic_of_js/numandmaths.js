const score = 100
//console.log(score);

const balance = new Number(100)
//console.log(balance);

//console.log(balance.toString());
//console.log(balance.toFixed(2));

const No = 123.8966
//console.log(No.toPrecision(3));

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN')); 


//=============== Maths =================

/*console.log(Math);

console.log(Math.abs(-4));//4
console.log(Math.round(4.6));//5
console.log(Math.ceil(4.2));// it take upper vale
console.log(Math.floor(4.2));//it takes lower value
console.log(Math.sqrt(2));
console.log(Math.min(4, 6, 8, 10));
console.log(Math.max(4, 6, 8, 10));*/

/*console.log(Math.random());
console.log(Math.random()*10);//it can be zero also to avoid this problem

console.log((Math.random()*10) + 1);//to avoid zero
console.log(Math.floor(Math.random()*10) + 1);
*/
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) * min);

//========== Date and Time =======

let myDate = new Date()
/*console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(myDate.getTimezoneOffset());*/

console.log(typeof myDate);//object

//let myCreatedDate = new Date(2001, 0 ,6);
//let myBCreatedDate = new Date(2001, 4 ,1);

//console.log(myCreatedDate.toDateString());
//console.log(myBCreatedDate.toDateString());

//let myBCreatedDate = new Date(2023, 0, 23, 5, 3);
//let myBCreatedDate = new Date("2023-01-04");
let myBCreatedDate = new Date("04-14-2023");
//console.log(myBCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(myBCreatedDate.getTime());
//console.log(Date.now()/1000);//decimal value take to remove this we use
//console.log(Math.floor(Date.now()/1000));

/*let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);//month
console.log(newDate.getDate());//date
console.log(newDate.getDay());//day

let todayDate =`${newDate.getDate()} and the day is ${newDate.getDay()}`
console.log(todayDate)

let newfun = newDate.toLocaleString('default', {
    weekday: "long"
})

console.log(newfun);//current weekday name*/

