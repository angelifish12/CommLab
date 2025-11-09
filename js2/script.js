
let container = document.querySelector("#container");
function welcome() {
    let headline = document.createElement("h5");

    // create element in "JS space":
    headline.innerText = "Welcome to my Page";
    // put it on the page
    // document.body.append(headline);
    container.append(headline);
    // remove an element from the page
    document.querySelector(".songLyrics").remove()
    // container.prepend(headline);
}

function moveBox() {
    container.classList.toggle("move");
    // random between 0 and 100
    let r1 = Math.random();
    console.log(r1);
    // custom number size
    let r2 = Math.random() * 100;
    console.log(r2);
    let r3 = 10 + Math.random() * 10;
    console.log(r3);
    let r4 = Math.floor(r3);
    console.log(r4);

    document.querySelector(".songLyrics").style.fontSize = r2 + "px"
}