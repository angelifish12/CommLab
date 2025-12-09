let sadTooth;
let isFalling = false;
let toothTop = window.innerHeight / 2 - 50;
let hand;
let stage = 1;

// function sadToothh() {
sadTooth = document.querySelector(".special.healthy");
console.log(sadTooth)
sadTooth.addEventListener("click", startFalling);
// window.addEventListener("scroll", function(startFalling));
// }

function startFalling() {
    console.log("start falling");
    if (isFalling == false) {
        isFalling = true;
        document.body.style.overflow = "scroll";
        // hide special healthy tooth
        sadTooth.style.visibility = "hidden";

        // reveal special falling tooth
        sadTooth = document.querySelector(".special.falling");
        sadTooth.style.display = "block";
        sadTooth.style.top = "200px";
        sadTooth.style.animation = "shake 3s infinite";
    }
}

function stopFalling() {
    console.log("stop falling");
    isFalling = false;
    let hand = document.createElement("img");
    hand.src = "assets/hand.gif";
    hand.className = "hand-moving";
    hand.style.position = "fixed";
    hand.style.top = toothTop + "px";
    hand.style.right = "800px";
    hand.style.width = "800px";
    document.body.append(hand);
    // cappu spotting
    let spotted = document.createElement("img");
    spotted.src = "assets/spotted.gif";
    spotted.style.position = "fixed";
    spotted.style.top = "50%";
    spotted.style.right = "50px";
    spotted.style.width = "300px";
    spotted.style.opacity = "0.7";
    spotted.style.transform = "translateY(-50%)";
    document.body.append(spotted);
    setTimeout(function () {
        document.location = "bed.html";
    }, 3000);
}

function bed() {
    document.location = "bed.html"
}

function getScrollPercentage() {
    let scrollTop = document.documentElement.scrollTop;
    let maxScroll = document.body.scrollHeight - window.innerHeight;
    let perc = (scrollTop / maxScroll) * 100;
    return perc;
}

function tooth() {
    let a1 = document.createElement("a");
    a1.className = "tooth";
    a1.onclick = toothClicked;
    let rTop = Math.random() * 800;
    let rLeft = Math.random() * 1400;
    a1.style.top = rTop + "px";
    a1.style.left = rLeft + "px";
    document.body.append(a1);
}

function updateFalling() {
    if (isFalling) {
        let percentage = getScrollPercentage();
        let toothTop = 200 + (percentage * 3);
        sadTooth.style.top = toothTop + "px";
        console.log(toothTop)
        toothTop = toothTop + 0.3;
        sadTooth.style.top = toothTop + "px";
        if (toothTop > 200 && stage == 1) {
            console.log("Changing to jump.gif");
            sadTooth.src = "assets/jump.gif";
            stage = 2;
            let scream = document.querySelector("#scream");
            scream.play();
        } else if (toothTop > 300 && stage == 2) {
            console.log("Changing to jumpp.gif");
            sadTooth.src = "assets/jumpp.gif";
            stage = 3;
            sadTooth.onclick = stopFalling;
        } else if (toothTop > 500 && stage == 3) {
            sadTooth.src = "assets/landing.gif";
            scream.pause();
            sadTooth.style.animation = "none";
            stage = 4;
            sadTooth.onclick = stopFalling;
            document.body.style.overflow = "hidden";
        }
    }
}

