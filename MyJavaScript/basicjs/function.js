

const x = function(y, x){
    return y ** x;
}

console.log(x(2, 5));

//arrow function
const num =  (y, x) => {
    return y % x;
}

//function constructor

function Person(firstName, lastName){

    this.firstName = firstName;
    this.lastName = lastName;

}

const myObj = new Person("Joseph", "Bazar");