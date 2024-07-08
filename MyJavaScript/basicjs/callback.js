
//example of sorting on object using sort function
//also the use of call back function like sort((a, b) => {})
//a callback function is any argument that passed to one function
const arr = [
    {
        name : "Shark"
    },
    {
        name : "Whale"
    },
    {
        name : "Cow"
    }
]
const letSort = () => {
    const makeSort = arr.sort((a, b) => {
        if(a.name < b.name){
            return -1;
        }
        if(a.name > b.name){
            return 1
        }
        return 0

    })
    return makeSort
}
console.log(letSort())

// using the find method
// find used to check the first greatest or lowest number according to the condition
const least = [20, 30, 40]
const findNum = least.find((number) => number > 20)
   
console.log(findNum);


// filter method 
// return the value base on the condition this will print 10, 15, and 20
const makeShort = [2, 1, 10, 3, 15, 20];
const filterized = makeShort.filter((i) => i > 3)
console.log(filterized);