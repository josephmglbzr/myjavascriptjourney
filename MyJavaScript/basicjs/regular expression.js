
//example of ternary operator
let x = 5;
console.log(x >= 6 ? "The Answer is Correct" : "Wrong Answer");

let name = {
    firstName: "Joseph",
    age: 20,
}


//destructuring
let {firstName, age} = name;
console.log(firstName);


//reg expression
// i represent case insensitive either the match value is written in upper or lower case

const myself = "Joseph Miguel";
console.log(myself.search(/miguel/i));

let text = "Hello World";
console.log(text.replace("World", "Joseph"));


//regular expression 
// regular expression always start in open / and close /;
// the g represents the global search
//the [\W_] ignore any character that is not a word non alpha numeric symbols including white spacing
// the lower case w will ignore any word written 
const para = "MATETAM";

const newStr = para.toLowerCase().replace(/[\W_]/g, '');
console.log(newStr)
const reverseStr = newStr.split('').reverse().join('');
console.log(reverseStr);

console.log(newStr === reverseStr);