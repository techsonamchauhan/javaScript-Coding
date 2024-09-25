// for Loop

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 7){
        //console.log("7 is best no.")
    }
    //console.log(element)
    
}


for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //   console.log(i + '*' + j + '=' + i*j);
        
    }
    
}


let myArray = ['flash','batman','superman']

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
        
}

//break and continue

// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`value of i is: ${index}`);
      
// }


for (let index = 1; index <= 20; index++) {
    if(index == 5){
        //console.log(`Detected 5`);
        continue
    }
    //console.log(`value of i is: ${index}`);
      
}

//While loop

/*let index = 0
while (index <= 10) {
    console.log(`value of index is ${index}`);
    index = index + 2
}*/

/*let NewArray = ['flash','batman','superman']
let arr = 0
while (arr<NewArray.length) {
    console.log(`Value is ${NewArray[arr]}`);
    arr = arr + 1
    
}*/

/*let score = 11//it will run at least one time 
do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);*/
