
//sets

const fruits = new Set(['apple', 'mango']);
console.log(fruits);

//maps

const animal = new Map([
    ["Dog", 400],
    ["Sheep", 300]   
]);

animal.forEach(function(value, key){
    console.log(key + " : " + value + "\n");
})

console.log(animal.get("Dog")); // get method to grab the value of a specific key
console.log(animal.set("Cow", 900)); // insert in Map
console.log(animal.has("Sheep")); //return true value if value existed
console.log(animal.delete("Dog"));