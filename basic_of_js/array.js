// array

const myArr = [0, 1, 2, 3, 4, 5]
// const myHero = ["shaktiman",'naagraj']
// const myArray2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr);
// console.log(myHero);
// console.log(myArray2);

// Array method

//myArr.push(6)
//myArr.push(7)
//myArr.pop()

//myArr.unshift(9);// time complexity comes a lot not recomended to use
//myArr.shift()

/*console.log(myArr.includes(9));
console.log(myArr.indexOf(9));

const myNewArr = myArr.join()
console.log(myArr);
console.log(myNewArr);*/

//========slice, splice=====

//console.log("A", myArr);
const myn1 = myArr.slice(1, 3)//it doesn't changes the original Array

// console.log(myn1);
// console.log("B", myArr);

const myn2 = myArr.splice(1,3);//it change the Original Array by removing that part
// console.log("C", myArr);
// console.log(myn2);

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros);
//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);

//===spred operator===

const all_new_heros = [...marvel_heros,...dc_heros]   // we can add mpre value by using ...dots but concetination we can't
//console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity);
//const real_another_array = another_array.flat(1);
// const real_another_array = another_array.flat(2);
//console.log(real_another_array);

console.log(Array.isArray("Sonam"))
console.log(Array.from("Sonam"))
console.log(Array.from({name: "Sonam"}))// interesting Question because it will convert it will give empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));


