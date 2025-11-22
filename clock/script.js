let hoursBox = document.querySelector(".hours")
let secondsBox = document.querySelector(".seconds")
let sound = document.querySelector("#ding");
let minutesBox = document.querySelector(".minutes")

function getTheTime() {
    let now = new Date(); //return the current moment
    let h = now.getHours();      // 0–23
    let m = now.getMinutes();    // 0–59
    let s = now.getSeconds();    // 0–59

    hoursBox.innerHTML = "";

    let originalBird = document.createElement("img");
    originalBird.className = "original-bird";
    originalBird.src = "assets/bird.gif";
    hoursBox.append(originalBird);

    let newBird = document.createElement("img");
    newBird.className = "new-bird";
    newBird.src = "assets/birdout.gif";
    hoursBox.append(newBird);
    // console.log(h, m, s);

    if (m == 0) {
        originalBird.style.display = "none";
        newBird.style.display = "block";
    } else {
        originalBird.style.display = "block";
        newBird.style.display = "none";
    }
    //H
    repeat(h, function (i) {
        let img = document.createElement("img");
        img.src = "assets/poop.gif";
        img.className = "poop";
        let randomX = Math.random() * 300;
        let randomY = Math.random() * 250;
        img.style.left = randomX + "px";
        img.style.top = randomY + "px";
        hoursBox.append(img);
    });
    // console.log("Current hour:", h, "so there are", h, "poops");

    //M
    minutesBox.innerHTML = "";
    repeat(m, function (i) {
        let img = document.createElement("img");
        img.src = "assets/door.gif";
        img.className = "door";
        img.style.transform = "rotate(" + (i * 6) + "deg)";
        minutesBox.append(img);
    });
    // S
    // clear out the second div completely
    secondsBox.innerHTML = "";
    repeat(s, function (i) {
        let div = document.createElement("div");
        let size = 100 - (i * (100 / 60));
        div.style.width = size + "%";
        div.style.height = size + "%";
        // thank u google
        secondsBox.append(div);
    });
}


setInterval(getTheTime, 1000);
getTheTime();

// Leon's Helper function:
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}