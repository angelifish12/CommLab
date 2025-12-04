
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}


function pillowPlaced() {
    console.log("dogdog")

    // show arrows
    document.querySelector(".scroll-arrows").style.display = "block";

    // unlock the scroll
    document.body.style.overflow = "scroll";

}


let reachedRightSide = false;

let reachedLeftSide = true;

window.addEventListener("scroll", function () {
    // console.log("scrolling");
    let scrollSoFar = window.scrollX;
    let possibleScrollDistance = document.body.scrollWidth - window.innerWidth;
    let perc = scrollSoFar / possibleScrollDistance;
    // console.log(perc);

    if (perc > .95 && reachedRightSide == false) {
        console.log("reached the right side")
        reachedRightSide = true;
        reachedLeftSide = false;
    }

    if (perc < .05 && reachedLeftSide == false) {
        console.log("reached the left side")
        reachedLeftSide = true;
        reachedRightSide = false;
    }

})
