let startButton = document.querySelector("start");

function makeOneRaindrop() {
    let a1 = document.createElement("a");
    a1.innerHTML = "𓄼";
    a1.className = "normalRainDrop"
    a1.onclick = rainDropClicked;
    let rTop = Math.random() * 800;
    let rLeft = Math.random() * 1400;
    a1.style.top = rTop + "px";
    a1.style.left = rLeft + "px";
    document.body.append(a1);
    document.body.style.backgroundColor = "grey";
}

function rainDropClicked() {
    // normal rainddrop:
    lightening();
}

function lightening() {
    document.body.classList.remove("flash");
    let a1 = document.createElement("a");
    a1.innerHTML = "⚡︎";
    a1.className = "lightening"
    document.body.append(a1);
    document.body.classList.add("flash");
}

function newPage() {
    window.location = "other.html"
}

function makeManyRainDrops() {
    makeOneRaindrop();
    makeOneRaindrop();
    makeOneRaindrop();
    makeOneRaindrop();
    makeOneRaindrop();
    makeOneRaindrop();
    makeOneRaindrop();

    let a1 = document.createElement("a");
    a1.innerHTML = "𓄼";
    a1.className = "notNormalRainDrop"
    a1.style.color = (245, 245, 245);
    a1.style.position = "absolute";
    a1.onclick = newPage;
    let rTop = Math.random() * 800;
    let rLeft = Math.random() * 1400;
    a1.style.top = rTop + "px";
    a1.style.left = rLeft + "px";
    document.body.append(a1);

}