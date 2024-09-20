//if
const isUserloggedIn = true
const temperature = 41

// if(temperature < 50){
//     console.log("temperature less then 50")
// }else{
//     console.log("temperature greater than 50")
// }

//<,>,<=,>=,==,!=,===, !== 

// const score = 200

// if(score>100){
//     let power = "fly"
//     console.log(`User power: ${power}`)
// }
// console.log(`User power: ${power}`)

//############we should void using var

/*const balance = 1000

if(balance < 500){
    console.log("less than");
}else if(balance < 750){
    console.log("less than 750")
}else if(balance < 900){
    console.log("less than 900");
}else{
    console.log("less than 1200");
}*/

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user loggedIn");
}