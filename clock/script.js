let secondsBox = document.querySelector(".seconds")
let sound = document.querySelector("#ding");
// let x = centerX + radius * Math.cos(angle);
// let y = centerY + radius * Math.sin(angle);

function getTheTime() {
    let now = new Date(); //return the current moment
    let h = now.getHours();      // 0–23
    let m = now.getMinutes();    // 0–59
    let s = now.getSeconds();    // 0–59


    console.log(h, m, s);

    let originalBird = document.querySelector(".original-bird");
    let newBird = document.querySelector(".new-bird");

    if (m == 0) {
        originalBird.style.display = "none";
        newBird.style.display = "block";
    } else {
        originalBird.style.display = "block";
        newBird.style.display = "none";
    }

    // S
    // clear out the second div completely
    secondsBox.innerHTML = "";
    let centerX = 160;
    let centerY = 160;
    let radius = 140;
    //put divs into the seconds div to represent
    //how many seconds the current moment "now" has
    repeat(s, function (i) {
        let div = document.createElement("div");
        let angle = (i / 60) * 2 * Math.PI;
        let x = centerX + radius * Math.cos(angle);
        let y = centerY + radius * Math.sin(angle);
        div.style.left = x + 'px';
        div.style.top = y + 'px';
        secondsBox.append(div);
    })
}

// circle = document.getElementById('circleToMove');



// let angle = 0;
// speed = 0.05;

// function circle() {
//     angle += speed;
//     x = centerX + radius * Math.cos(angle);
//     y = centerY + radius * Math.sin(angle);
//     circle.style.left = x + 'px';
//     circle.style.top = y + 'px';
// }

setInterval(getTheTime, 1000);
getTheTime();




// Leon's Helper function:
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}