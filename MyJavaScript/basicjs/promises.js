
let num = new Promise((resolve, reject) => {
    let a = 1 + 3
    if(a == 2){
        resolve("Successfull")
    }else{
        reject("Failed")
    }
})

//use then for resolve display and catch for reject
num.then((message) => {
    console.log("It is " + message)
}).catch((message) => {
    console.log("It is " + message)
})