const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => num + 10)


//const newNums = myNumbers.map( (num) => {return num + 10})

//======chaining method=====

const newNums = myNumbers
            .map( (num) => num * 10)
            .map( (num) => num + 1)
            .filter( (num) => num >= 40)
//console.log(newNums);


//=======Reduce=========

const myNums = [1, 2, 3]


// const myTotal = myNums.reduce( function (accu, currval) {
//     console.log(`accu: ${accu} and currval: ${currval}`);
    
//     return accu + currval
// }, 0)


//======2 way by using arrow fun==

const myTotal = myNums.reduce( (accu, curr) => accu + curr, 0)

//console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }

]

const Total = shoppingCart.reduce( (accu,item) => accu + item.price,0)

console.log(Total);
