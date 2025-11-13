// let firstButton = document.querySelector("#firstButton");
// // changeInnerText(firstButton);
// function clickedButton() {
//     console.log("clicked")
//     //create a button
//     let b = document.createElement("button");
//     b.innerText = "Start the Engine";
//     // b.onlick = changeInnerText(b);
//     b.onclick = changeInnerText;
//     document.body.append(b);
// }

// // we gave an element to this fcn
// // the elemet will turn red and change text
// function changeInnerText(elm) {
//     elm.innerText = "STARTED";
//     elm.style.color = "red";
// }

function colorize(elm) {
    elm.style.backgroundColor = "red";
}

function clickedButton() {
    //select box
    // let b = document.querySelector(".box");
    // colorize(b);
    //use colorize to color box

    let bs = document.querySelectorAll(".box");
    console.log(bs);
    // call function
    // for each element (forEach)
    // in a list(bs)
    bs.forEach(colorize);
}