let myText = document.querySelector("#myText");
let output = document.querySelector("#output");
let counter = 0;



// challenge 1: 
// as we type into the input box, 
// the text should appear inside the "ouput" p tag:

myText.addEventListener("input", typeSomething);


function typeSomething(eventInfo) {
    let elementInteractedWith = eventInfo.target;
    // spin(elementInteractedWith);
    console.log(eventInfo.target.value);
    let text = eventInfo.target.value;
    output.innerText = text
    if (text == "spin") {
        spin(elementInteractedWith);
        eventInfo.target.value = "";
        output.innerText = "";
    } else {
        output.innerText = "TRY AGAIN";
    }
    // get text from input element, put text to output element
}



// function to spin an element 
function spin(element) {
    element.style.transition = "all 1s linear"
    element.style.transform = "rotate(360deg)"
}



// -------- PART 2
let myButton = document.querySelector("#myButton");

myButton.addEventListener("click", function (eventInfo) {
    counter = counter + 1;
    if (counter >= 10) {
        // document.body.style.backgroundColor = "black";
        supersize(eventInfo.target);
        setTimeout(function () { eventInfo.target.remove() }, 500)
        setTimeout(removeButton, 500);
        clearInterval(messageInterval);
        messageBoard.innerHTML = "";
    }
})






let messageBoard = document.querySelector("#messageBoard");


let messageInterval = setInterval(function () {
    let clicksLeft = 10 - counter;
    addMessage("click the button " + clicksLeft + " more time");
}, 100)





// function to add text to the div with id "messageboard"
function addMessage(messagetext) {
    let p = document.createElement("p");
    p.innerText = messagetext;
    messageBoard.prepend(p);
}

// function to rapidly increase the size of an element
function supersize(element) {
    element.style.transition = "all .5s linear"
    element.style.transform = "scale(100)"
}

