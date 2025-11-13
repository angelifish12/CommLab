let s = document.querySelector("span");
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

// s.addEventListener("mouseover", move)

function addMover(element) {
    element.addEventListener("mouseover", move)

}

//select all the spans
let allSpans = document.querySelectorAll("span");
allSpans.forEach(addMover);

