// let a = 10
// const b = 20
// var c = 40

// console.log(a)
// console.log(b)
// console.log(c)

var c = 300 //it not good for use because it is access from anywhere which creats problem

//block scope and globle scope

if(true){
    let a = 10 
    const b = 20
    var c = 30
    //   c = 40

}

// console.log(a)//it can't be access outside of block 
// console.log(b)// this is also not accessible outside of block
//console.log(c)//this can be which is not good to use

let a = 300

if(true){
    let a = 20

    // console.log("Inner :" ,a)
}

// console.log(a)

function one(){
    const userName = "Sonam"

    function two(){
        const website = "Google"
        console.log(userName);
    }

    //console.log(website) // can't accessible outside the scope

    two()
}

//one()

if(true){
    const UserName = "Sonam"
    if(UserName === "Sonam"){
        const website = " youtube"
        //console.log(UserName + website);
    }

    //console.log(website)

}

//console.log(userName)

//------------- interesting --------

console.log(addone(5))

function addone(num){
    return num + 1
}

addtwo()//can't accessible

const addtwo = function(num){
    return num + 2
}