let sadTooth;
let isFalling = false;
let toothTop = 0;

function sadTooth{
    sadTooth = document.querySelector(".special");
    // sadTooth.style.cursor = "pointer";
    // sadTooth.addEventlistener("click", startFalling);
    sadTooth.onclick = startFalling;
}

function startFalling() {
    if (isFalling == false) {
        isFalling == true;
        sadTooth.style.position = "fixed";
        toothTop = 100;
        sadTooth.style.top = toothTop + "px";

    }
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