//this refers to current context
/*const user = {
    username: "sonam",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this)
    }
}

// user.welcomeMessage()//sonam
// user.username = "sam"
// user.welcomeMessage()//sam

// console.log(this);//empty
//-----but in window it no empty window having global object

function anyfunc(){
    let username = "sonam"
    console.log(this.username);//can't access like this
    console.log(this)
}

anyfunc()

/*const anyfunc = function(){
    let username = "sonam"
    console.log(this.username);
}//undefined
*/

/*const anyfunc = () => {
    let username = "sonam"
    // console.log(this);
    console.log(this.username);
}
anyfunc()*/

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

//------implict return no need use {}  ===inline code
//const addTwo = (num1,num2) => num1 + num2
// const addTwo = (num1,num2) => (num1 + num2)

//by using this method how to return object

//const addTwo = (num1, num2) => ({username: "sonam"})
//console.log(addTwo(3,5))


//-----------Immediately Invoked Function Expressions (IIFE)

// we use iife to reduce problems caused by Global pollution 

// (function anyfun(){
//     console.log(`DB CONNECTED`)
// })();


// ( () => {
//     console.log(`DB CONNECTED TWO`);
// } )()


((name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})('sonam')




