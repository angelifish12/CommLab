let sparkle = document.querySelector(".sparkle");
let magicAudio = document.querySelector("#magic-audio");
let magicPillow = document.querySelector(".magic-pillow");
let coin = document.querySelector(".coin");

// click sparkle, play magic sound
sparkle.addEventListener("click", function () {
    magicAudio.play();
    magicAudio.addEventListener("ended", function () {
        sparkle.style.display = "none";
        // show pillow & coin
        coin.style.display = "block";
        magicPillow.style.display = "block";
    });
});

function draggingStarted(ev) {
    ev.target.classList.add("hide");
}

function draggingEnded(ev) {
    ev.target.classList.remove("hide");
}
magicPillow.addEventListener("dragstart", draggingStarted);
magicPillow.addEventListener("dragend", function (ev) {
    draggingEnded(ev);
    magicPillow.style.transform = "translateX(-9999px)";
});