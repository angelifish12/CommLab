// below is a fcn 
let name = "Angelina ";
let temperature = 16;
let headline = document.querySelector("h1");
let myText = document.querySelector(".myText");
function changeText() {
    console.log("click")
}
// document.querySelector("h1").innerText = "Tried it. Didn't like it";
// alert("Hi " + name + "It's " + temperature + " degrees outside.");
console.log("the page has loaded and the temperature is " + temperature);

function doManyThings() {
    alert("Hi " + name + "It's " + temperature + " degrees outside.");
    console.log("button was clicked");
}

function greet(greeting) {
    console.log("received" + greeting)
    alert(greeting);
    headline.innerText = "Tried it. Didn't like it";
}

function ppap() {
    alert("no");
}

function watashi(me) {
    console.log("ha" + me)
    alert(me);
    headline.innerText = "Angelina Chen"
}

function changeText() {
    console.log("click");
    myText.innerHTML = "click <a href= 'google.com'>here</a>";
    headline.style.textDecoration = "underline";
    myText.style.color = "white";
    myText.style.backgroundColor = "black";
}
