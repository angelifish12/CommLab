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