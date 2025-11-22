let sadTooth;
let isFalling = false;
let toothTop = 0;
let stage = 1;

function sadToothh() {
    sadTooth = document.querySelector(".special");
    sadTooth.onclick = startFalling;
}

function startFalling() {
    console.log("start falling");
    console.log("isFalling BEFORE:", isFalling);
    if (isFalling == false) {
        isFalling = true;
        console.log("isFalling AFTER:", isFalling);
        sadTooth.style.position = "fixed";
        toothTop = 100;
        sadTooth.style.top = toothTop + "px";
        sadTooth.style.left = "50%";
        sadTooth.style.margin = "0";
        sadTooth.style.transform = "translateX(-50%)";
    }
}

function stopFalling() {
    console.log("stop falling");
    isFalling = false;
}

sadToothh();

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
        toothTop = toothTop + 0.3;
        sadTooth.style.top = toothTop + "px";
        if (toothTop > 300 && stage == 1) {
            console.log("Changing to jump.gif");
            sadTooth.src = "assets/jump.gif";
            stage = 2;
        } else if (toothTop > 600 && stage == 2) {
            console.log("Changing to jumpp.gif");
            sadTooth.src = "assets/jumpp.gif";
            stage = 3;
            sadTooth.onclick = stopFalling;
        }
    }
}