const coding = ["js","ruby","java","python","cpp"]
//------1-Way

// coding.forEach( function (item) {
//     console.log(item);
    
// })

//-----2-Way

// coding.forEach( (val) => {
//     console.log(val);
    
// })

//---3-Way

// function printMe(item){
//     console.log(item)   
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
    
// })


//[{},{},{}]------Most importent

const myCoding = [
    {
        languageName: "javaScript",
        languageFileName: "js"
    },

    {
        languageName: "java",
        languageFileName: "java"
    },

    {
        languageName: "python",
        languageFileName: "py"
    }
]

// myCoding.forEach( (item) => {
//     console.log(item.languageName);
    
// })

const Coding = ["js","ruby","java","python","cpp"]


// here we will undertand that forEach does not return anything

// const values = Coding.forEach( (item) => {
//     // console.log(item);
//     return item
// })

// console.log(values);


const myNums = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10]

//const newNums = myNums.filter( (num) => num > 4)

//----another way to write----

// const newNums = myNums.filter( (num) => {
//     return num > 4 // when we use scope we have to use return keyword always
// })


//----similar thing by using forEach loop

// const newNums = []

// myNums.forEach( (nums) => {
//     if(nums > 4){
//         newNums.push(nums)
//     }
// })

//console.log(newNums);

const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},

    {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},

    {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},

    {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},

    {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},

    {title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},

    {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},

    {title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},

    {title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989}
];

// const userBooks = books.filter( (bk) => bk.genre == 'History') 

let userBooks = books.filter( (bk) => bk.genre === 'History')

/*const userBooks = books.filter( (bk) => bk.publish >= 2000)*/   // ----Error come to remove this use let========Identifier 'userBooks' has already been declared

/*userBooks = books.filter( (bk) => {bk.publish >= 2000})*/
//it will give empty array----because we use block scope to remove this use return keyword

// userBooks = books.filter( (bk) => {return bk.publish >= 2000})

userBooks = books.filter( (bk) => {return bk.publish >= 1995 && bk.genre === 'History'})

console.log(userBooks);

