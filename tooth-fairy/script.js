let sadTooth;
let isFalling = false;
let toothTop = window.innerHeight / 2 - 50;
let hand;
let stage = 1;

// function sadToothh() {
sadTooth = document.querySelector(".special.healthy");
console.log(sadTooth)
sadTooth.addEventListener("click", startFalling);
// }

function startFalling() {
    console.log("start falling");
    console.log("isFalling BEFORE:", isFalling);
    if (isFalling == false) {
        isFalling = true;
        // hide sepcial healthy tooth
        sadTooth.style.visibility = "hidden";

        // revela special falling tooth
        sadTooth = document.querySelector(".special.falling");
        sadTooth.style.display = "block"
        sadTooth.style.top = toothTop + "px"
        sadTooth.style.animation = "shake 3s infinite";

        // console.log("isFalling AFTER:", isFalling);
        // sadTooth.style.position = "fixed";
        // toothTop = 100;
        // sadTooth.style.top = toothTop + "px";
        // sadTooth.style.left = "50%";
        // sadTooth.style.margin = "0";
        // sadTooth.style.transform = "translateX(-50%)";
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
    hand.style.cursor = "pointer";
    hand.onclick = bed;
    document.body.append(hand);
}

function bed() {
    document.location = "bed.html"
}

function tooth() {
    let a1 = document.createElement("a");
    // a1.innerHTML = ;
    a1.className = "tooth";
    a1.onclick = toothClicked;
    let rTop = Math.random() * 800;
    let rLeft = Math.random() * 1400;
    a1.style.top = rTop + "px";
    a1.style.left = rLeft + "px";
    document.body.append(a1);
}

function updateFalling() {
    console.log("UPDATE FALLING CALLED! isFalling:", isFalling, "toothTop:", toothTop);

    if (isFalling) {
        console.log(toothTop)
        toothTop = toothTop + 0.3;
        sadTooth.style.top = toothTop + "px";
        if (toothTop > 300 && stage == 1) {
            console.log("Changing to jump.gif");
            sadTooth.src = "assets/jump.gif";
            stage = 2;
        } else if (toothTop > 400 && stage == 2) {
            console.log("Changing to jumpp.gif");
            sadTooth.src = "assets/jumpp.gif";
            stage = 3;
            sadTooth.onclick = stopFalling;
        }
    }
}