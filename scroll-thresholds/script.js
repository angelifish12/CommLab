function getScrollPercentage() {
    // how far we have scrolled 
    let scrollTop = window.scrollY;
    // console.log(scroll.Top);

    //how far we scroll in total
    let maxScroll = document.body.scrollHeight - window.innerHeight;
    let perc = (scrollTop / maxScroll) * 100;
    return perc;
}
window.addEventListener("scroll", function () {
    // console.log("we are scrolling");
    // how far have we scroll
    // let scrollTop = window.scrollY;
    // console.log(scrollTop);
    // how far can we scroll in total
    // let maxScroll = document.body.scrollHeight - window.innerHeight;
    let percentage = getScrollPercentage();
    // console.log(percentage);
    if (percentage > 33) {
        document.querySelector(".one p").style.transform = "rotate(720deg)";
    } else {
        document.querySelector(".one p").style.transform = "rotate(0deg)";
    }
    if (percentage > 77) {
        document.querySelector(".two p").style.transform = "scale(3)";
    } else {
        document.querySelector(".two p").style.transform = "scale(1)";
    }


    let catAngle = (18000 / 100) * percentage;
    console.log("CATT ANGLE", catAngle);
    document.querySelector("#cat").style.transform = "rotate(" + catAngle + "deg)";
})