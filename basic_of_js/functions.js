function MyName(){
    console.log("S")
    console.log("o")
    console.log("n")
    console.log("a")
    console.log("m")
}

//MyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1+num2);
// }

//const result = addTwoNumbers(2,4)
//console.log("Reasult: ", result)//This is wrong way to print


function addTwoNumbers(num1, num2){
    
    // let result = num1 + num2
    // return result
    
    return num1 + num2
}

const result = addTwoNumbers(3,5)
//console.log("Result: ",result);

// function userLoginMessage(username){
//     return `${username} just logged in`
// }

//console.log(userLoginMessage("Sonam"))
//console.log(userLoginMessage(""))

// function logInUserMessage(username){
//     // if(username === undefined){
//     //     console.log("Please enter a username")
//     //     return
//     // }
//     if(!undefined){
//         console.log("Please enter a username")
//         return
//     }
    
//     return `${username} just logged in`
// }
function logInUserMessage(username = "Soham"){   //default value
    if(!username){
        console.log("Please enter a username")
        return
    }
    
    return `${username} just logged in`
}
// console.log(logInUserMessage())
// console.log(logInUserMessage("sonam"))

// function calculateCartPrice(...num1){ //Rest operator or spred but yet it is used as rest operator
//     return num1
// }
// console.log(calculateCartPrice(100,200,300,434))

function calculateCartPrice(val1,val2,...num1){ //Rest operator or spred but yet it is used as rest operator
    return num1
}

// console.log(calculateCartPrice(100,200,4000,6588))

const user = {
    username: "Sonam",
    price: 199
}

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }

// // handleObject(user)
// handleObject({
//     username: "chauhan",
//     price: 399
// })

const myArray = [200, 300, 400, 500]

function returnSecondValue(anyArray){
    return anyArray[1]
}

//console.log(returnSecondValue(myArray))
console.log(returnSecondValue([200, 300, 400, 500]))









