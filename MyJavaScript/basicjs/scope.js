
//global variable
let num = 5;

function example(){
    
    return num = 10;
}

console.log(example());

//local variable

function example2(){
    let num = 20;
    return num;
}
console.log(example2());


//arrow function

let add = (x, y) => {
    return x + y;
}

console.log(add(10, 5));