

const bg = [

    "black",
    "orange",
    "yellow",
    "red",

];


let body = document.querySelector("body");
let textCol = document.querySelector("#color");
function changeBg(){

    const color = Math.floor(bg.length * Math.random());

    return color;
}

function changeColor(){
    const bgColor = bg[changeBg()];
    body.style.background = bgColor;
    textCol.innerText = bgColor;
}

let btn = document.querySelector("#btn");
btn.onclick = changeColor;