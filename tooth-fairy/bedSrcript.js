window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

let reachedRightSide = false;
let reachedLeftSide = true;
let ringPlayed = false;
let murmurPlayed = false;
let fairyMoving = false;
let fairyStartScroll = 0;

function getScrollPercentageHorizontal() {
    let scrollLeft = document.documentElement.scrollLeft;
    let maxScroll = document.body.scrollWidth - window.innerWidth;
    let perc = (scrollLeft / maxScroll) * 100;
    return perc;
}

window.addEventListener("scroll", function () {
    let scrollSoFar = window.scrollX;
    let possibleScrollDistance = document.body.scrollWidth - window.innerWidth;
    let perc = scrollSoFar / possibleScrollDistance;

    // fairy move as user scrolls left
    if (fairyMoving && murmurPlayed) {
        let fairy = document.querySelector(".fairy-hidden");
        if (fairy) {
            let scrollDiff = fairyStartScroll - scrollSoFar;
            let fairyNewLeft = 960 - (scrollDiff * 0.07);
            fairy.style.left = fairyNewLeft + "%";

            if (fairyNewLeft <= 270) {
                fairyMoving = false;
                fairy.style.left = "270%";
                fairy.style.animation = "none";
                fairy.draggable = true;
                fairy.style.cursor = "pointer";
                fairy.addEventListener("dragstart", draggingStarted);
                fairy.addEventListener("dragend", draggingEnded);
            }
        }
    }

    if (perc > .95 && reachedRightSide == false) {
        console.log("reached the right side")
        reachedRightSide = true;
        reachedLeftSide = false;

        document.querySelector(".scroll-arrowsl").style.display = "block";
        document.querySelector(".scroll-arrowsr").style.display = "none";

        // after ring played, fairy, phone3, door2 on right side
        if (ringPlayed) {
            let phones2 = document.querySelectorAll(".phone2-hidden");
            phones2.forEach(function (phone2) {
                phone2.style.display = "none";
            });

            let fairies = document.querySelectorAll(".fairy-hidden");
            fairies.forEach(function (fairy) {
                fairy.style.display = "block";
            });

            let phones3 = document.querySelectorAll(".phone3-hidden");
            phones3.forEach(function (phone3) {
                phone3.style.display = "block";
            });

            let doors2 = document.querySelectorAll(".door2-hidden");
            doors2.forEach(function (door2) {
                door2.style.display = "block";
            });
        }

        // after murmur played, open2 appear
        if (murmurPlayed) {
            let doors2 = document.querySelectorAll(".door2-hidden");
            doors2.forEach(function (door2) {
                door2.style.display = "none";
            });

            let phones = document.querySelectorAll(".phone-hidden");
            phones.forEach(function (phone) {
                phone.style.display = "none";
            });

            let opens2 = document.querySelectorAll(".open2-hidden");
            opens2.forEach(function (open2) {
                open2.style.display = "block";
            });

            let phones3 = document.querySelectorAll(".phone3-hidden");
            phones3.forEach(function (phone3) {
                phone3.style.display = "none";
            });
        }
    }

    if (perc < .05 && reachedLeftSide == false) {
        console.log("reached the left side")
        reachedLeftSide = true;
        reachedRightSide = false;
        document.querySelector(".scroll-arrowsr").style.display = "block";
        document.querySelector(".scroll-arrowsl").style.display = "none";

        // after ring played, door appear
        if (ringPlayed) {
            let doors = document.querySelectorAll(".door-hidden");
            doors.forEach(function (door) {
                door.style.display = "block";
            });
        }

        // after murmur played, open appear
        if (murmurPlayed) {
            let doors = document.querySelectorAll(".door-hidden");
            doors.forEach(function (door) {
                door.style.display = "none";
            });

            let opens = document.querySelectorAll(".open-hidden");
            opens.forEach(function (open) {
                open.style.display = "block";
            });
        }
    }
})

function dragoverHandler(ev) {
    ev.preventDefault();
}

function draggingStarted(ev) {
    console.log(ev.target)
    ev.target.classList.add("hide");
}

function draggingEnded(ev) {
    console.log(ev.target)
    ev.target.classList.remove("hide");
}

function dropHandler(ev) {
    ev.preventDefault();
    console.log("dropped!");

    let draggedPillow = document.querySelector(".pillowCase .pillow");

    let firstWindow = document.querySelector(".windowSize");
    firstWindow.append(draggedPillow);

    draggedPillow.style.position = "absolute";
    draggedPillow.style.left = "300px";
    draggedPillow.style.top = "100px";
    draggedPillow.style.cursor = "pointer";
    draggedPillow.style.zIndex = 10;
    draggedPillow.draggable = false;

    let pillowCase = document.querySelector(".pillowCase");
    pillowCase.style.display = "none";

    pillowPlaced();
}

function pillowPlaced() {
    document.querySelector(".scroll-arrowsr").style.display = "block";
    // unlock
    document.body.style.overflowX = "scroll";
    document.body.style.overflowY = "hidden";

    let trees = document.querySelectorAll(".tree");
    trees.forEach(function (tree) {
        tree.style.display = "block";
    });

    let candies = document.querySelectorAll(".candy");
    candies.forEach(function (candy) {
        candy.style.display = "block";
    })

    let cappus = document.querySelectorAll(".cappu-hidden");
    cappus.forEach(function (cappu) {
        cappu.style.display = "block";
        cappu.style.cursor = "pointer";
    });

    let phones = document.querySelectorAll(".phone-hidden");
    phones.forEach(function (phone) {
        phone.style.display = "block";
        phone.style.cursor = "pointer";
        phone.addEventListener("click", murmurr);
    })

    let phones2 = document.querySelectorAll(".phone2-hidden");
    phones2.forEach(function (phone2) {
        phone2.style.display = "block";
        phone2.style.cursor = "pointer";
        phone2.addEventListener("click", ringg);
    });
}

function murmurr(event) {
    let murmur = document.querySelector("#murmur");
    murmur.play();
    murmurPlayed = true;

    // if click on phone3, fairy starts movement
    if (event.target.classList.contains("phone3-hidden")) {
        fairyMoving = true;
        fairyStartScroll = window.scrollX;
        let fairy = document.querySelector(".fairy-hidden");
        if (fairy) {
            fairy.style.animation = "flying 1s infinite ease-in-out";
        }
    }
}

function ringg() {
    let ring = document.querySelector("#ring");
    ring.play();
    ringPlayed = true;

    // Add phone3 ring
    let phones3 = document.querySelectorAll(".phone3-hidden");
    phones3.forEach(function (phone3) {
        phone3.style.cursor = "pointer";
        phone3.addEventListener("click", murmurr);
    });
}

function dropFairy(ev) {
    ev.preventDefault();
    console.log("Fairy dropped!");

    let fairy = document.querySelector(".fairy-hidden");
    if (fairy) {
        fairy.style.display = "none";
    }

    // fairy at the right door
    let fairyRight = document.createElement("img");
    fairyRight.src = "assets/toothfairy.gif";
    fairyRight.className = "right-fairy";
    fairyRight.style.position = "absolute";
    fairyRight.style.left = "969%";
    fairyRight.style.bottom = "0px";
    fairyRight.style.height = "290px";
    fairyRight.draggable = true;
    fairyRight.style.cursor = "pointer";
    fairyRight.addEventListener("dragstart", draggingStarted);
    fairyRight.addEventListener("dragend", draggingEnded);
    document.body.append(fairyRight);
}

function dropFairyRight(ev) {
    ev.preventDefault();
    document.location = "magic.html";
}

console.log("hi")