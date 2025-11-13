let myButton = document.querySelector("#myButton");
let myInput = document.querySelector("#myInput");
let myOutput = document.querySelector("#myOutput");

// define fcn
function buttonClicked(eventInfo) {
    document.body.style.backgroundColor = "black";
    eventInfo.target.remove();

}
// eventInfo.target.remove();
// reference fcn to b called upon event happening 
myButton.addEventListener("mouseover", buttonClicked);
// myButton.addEventListener("click", function () {
//     document.body.style.backgroundColor = "black"
// });
function inputChanged(eventInfo) {
    console.log(eventInfo.target.value);
    console.log("input changed");
    myOutput.innerText = eventInfo.target.value;
}
//                      "change"
myInput.addEventListener("input", inputChanged);