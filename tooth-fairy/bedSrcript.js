function dragoverHandler(ev) {
    ev.preventDefault();
}

function dropHandler(ev) {
    ev.preventDefault();
    console.log("dropped!");


    // make old pillow invisible
    let pillowCase = document.querySelector(".pillowCase");
    pillowCase.style.visibility = "hidden";

    // make a second pillow and append it 
    // to the tooth-box
    let pillow = document.createElement("img");
    pillow.src = "assets/pillow.gif";
    pillow.className = "pillow";

    pillow.style.cursor = "pointer";
    pillow.onclick = fairy;

    document.querySelector(".tooth-box").append(pillow);
}

console.log("hi")

function fairy() {
    document.location = "fairy.html";
}