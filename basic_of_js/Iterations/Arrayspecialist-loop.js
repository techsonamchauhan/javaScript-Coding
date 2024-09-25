// for of

//["","",""]
//[{},{},{}]

/*const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
    
}*/

/*const greetings = "Hello world!"

for (const i of greetings) {
    if (i == " ") {
        // console.log(`"" detected`);
        continue
    }
    console.log(`Each char is: ${i}`);
    
}*/

//Maps:- it takes unique values only

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

//console.log(map);

for (const [key, value] of map) {  //destructuring
   console.log(key, ':-', value);
    
}

/*const myObject = {
    'Game1' : 'NFS',
    'Game2' : 'Spiderman'
}

for (const [] of object) {
    
}*/ //for of loop doesn't work on objects