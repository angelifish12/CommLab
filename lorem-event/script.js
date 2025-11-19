let s = document.querySelector("span");
let myInput = document.querySelector("#myInput");
let myOutput = document.querySelector("#myOutput");
let myButton = document.querySelector("#myButton");
console.log(s);

function move(eventInfo) {
    console.log("mouse over")
    let element = eventInfo.target;
    element.style.color = "red";
    // element.style.transform = translate(-30px, 0px);
    let randomX = -50 + Math.random() * 100; // random value between -50 and 50
    let randomY = -50 + Math.random() * 100;
    // "translate (50px, 50px"
    element.style.transform = "translate(" + randomX + "px, 0px)";
}

myButton.addEventListener("mouseover", buttonClicked);

// s.addEventListener("mouseover", move)

function addMover(element) {
    element.addEventListener("mouseover", move)

}

function inputChanged(eventInfo) {
    myOutput.innerHTML = eventInfo.target.value;
}

//select all the spans
let allSpans = document.querySelectorAll("span");
allSpans.forEach(addMover);
myInput = addEventListener("input", inputChanged);
