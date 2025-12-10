let reachedRightSide = false;
let reachedLeftSide = true;
let ringPlayed = false;
let phone3Clicked = false;
let fairyMoving = false;
let fairyStartScroll = 0;
let fairyDroppedLeft = false; // Track if fairy was dropped on left door

function getScrollPercentageHorizontal() {
    let scrollLeft = document.documentElement.scrollLeft;
    let maxScroll = document.body.scrollWidth - window.innerWidth;
    let perc = (scrollLeft / maxScroll) * 100;
    return perc;
}

window.addEventListener("scroll", function () {
    let scrollSoFar = window.scrollX;
    let possibleScrollDistance = document.body.scrollWidth - window.innerHeight;
    let perc = scrollSoFar / possibleScrollDistance;

    // prevent scrolling to the first 2 windows after it rings unless fairy was dropped
    if (ringPlayed && !fairyDroppedLeft) {
        let minScroll = possibleScrollDistance * 0.2;
        if (scrollSoFar < minScroll) {
            document.documentElement.scrollLeft = minScroll;
            return;
        }
    }

    // fairy move as user scrolls left
    if (fairyMoving && phone3Clicked) {
        let fairy = document.querySelector(".fairy");
        if (fairy) {
            let scrollDiff = fairyStartScroll - scrollSoFar;
            let fairyLeft = 960 - (scrollDiff * 0.07);
            fairy.style.left = fairyLeft + "%";

            if (fairyLeft <= 270) {
                fairyMoving = false;
                fairy.style.left = "270%";
                fairy.style.animation = "none";
                fairy.draggable = true;
                fairy.style.cursor = "grab";
                fairy.addEventListener("dragstart", draggingStarted);
                fairy.addEventListener("dragend", draggingEnded);

                // when fairy reaches cappu, hide door and phone, show open
                let doors = document.querySelectorAll(".door");
                doors.forEach(function (door) {
                    door.style.display = "none";
                });

                let opens = document.querySelectorAll(".open");
                opens.forEach(function (open) {
                    open.style.display = "block";
                });

                let phones = document.querySelectorAll(".phone");
                phones.forEach(function (phone) {
                    phone.style.display = "none";
                });
            }
        }
    }

    if (perc > .95 && reachedRightSide == false) {
        console.log("reached the right side")
        reachedRightSide = true;
        reachedLeftSide = false;

        document.querySelector(".scroll-arrowsl").style.display = "block";
        document.querySelector(".scroll-arrowsr").style.display = "none";

        // after ring played, fairy, phone3 on right side
        // show fairy if it hasn't been dropped on left yet
        if (ringPlayed && !fairyDroppedLeft) {
            let phones2 = document.querySelectorAll(".phone2");
            phones2.forEach(function (phone2) {
                phone2.style.display = "none";
            });

            let fairies = document.querySelectorAll(".fairy");
            fairies.forEach(function (fairy) {
                fairy.style.display = "block";
            });

            let phones3 = document.querySelectorAll(".phone3");
            phones3.forEach(function (phone3) {
                phone3.style.display = "block";
            });
        }

        // hide fairy on right if already dropped
        if (fairyDroppedLeft) {
            let fairies = document.querySelectorAll(".fairy");
            fairies.forEach(function (fairy) {
                fairy.style.display = "none";
            });
        }

        // after phone3 clicked (no open2)
        if (phone3Clicked) {
            let phones = document.querySelectorAll(".phone");
            phones.forEach(function (phone) {
                phone.style.display = "none";
            });

            let phones3 = document.querySelectorAll(".phone3");
            phones3.forEach(function (phone3) {
                phone3.style.display = "none";
            });
        }
    }

    // the threshold
    let lefttt;
    if (ringPlayed && !fairyDroppedLeft) {
        lefttt = 0.22;
    } else {
        lefttt = 0.05;
    }

    if (perc < lefttt && reachedLeftSide == false) {
        console.log("reached the left side")
        reachedLeftSide = true;
        reachedRightSide = false;
        document.querySelector(".scroll-arrowsr").style.display = "block";
        document.querySelector(".scroll-arrowsl").style.display = "none";

        // after ring played, door appear (but not if fairy already dropped)
        if (ringPlayed && !fairyDroppedLeft) {
            let doors = document.querySelectorAll(".door");
            doors.forEach(function (door) {
                door.style.display = "block";
            });
        }

        // after phone3 clicked, open appear
        if (phone3Clicked && !fairyDroppedLeft) {
            let doors = document.querySelectorAll(".door");
            doors.forEach(function (door) {
                door.style.display = "none";
            });
            let chat = document.querySelector(".chat");
            chat.style.display = "block";
            let opens = document.querySelectorAll(".open");
            opens.forEach(function (open) {
                open.style.display = "block";
            });
        }

        // Show open2 and fairy at pillow position if fairy was dropped
        if (fairyDroppedLeft) {
            // Hide the original door/open
            let doors = document.querySelectorAll(".door");
            doors.forEach(function (door) {
                door.style.display = "none";
            });

            let opens = document.querySelectorAll(".open");
            opens.forEach(function (open) {
                open.style.display = "none";
            });

            // Show open2 at pillow
            let opens2 = document.querySelectorAll(".open2");
            opens2.forEach(function (open2) {
                open2.style.display = "block";
            });

            let chat = document.querySelector(".chat");
            chat.style.display = "block";

            // Show fairy at pillow
            let fairyAtPillow = document.querySelector(".fairy-at-pillow");
            if (fairyAtPillow) {
                fairyAtPillow.style.display = "block";
            }
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
    draggedPillow.style.cursor = "grab";
    draggedPillow.style.zIndex = 10;
    draggedPillow.draggable = false;

    let pillowCase = document.querySelector(".pillowCase");
    pillowCase.style.display = "none";

    pillowPlaced();
}

function pillowPlaced() {
    document.querySelector(".scroll-arrowsr").style.display = "block";
    document.body.style.overflowX = "scroll";
    document.body.style.overflowY = "hidden";

    let trees = document.querySelectorAll(".tree");
    trees.forEach(function (tree) {
        tree.style.display = "block";
        tree.style.cursor = "pointer";
        tree.addEventListener("click", function () {
            tree.classList.add("shrinking");
            setTimeout(function () {
                tree.classList.remove("shrinking");
            }, 500);
        });
    });

    let clouds = document.querySelectorAll(".cloud");
    clouds.forEach(function (cloud) {
        cloud.style.display = "block";
    })

    let candies = document.querySelectorAll(".candy");
    candies.forEach(function (candy) {
        candy.style.display = "block";
    })

    let cappus = document.querySelectorAll(".cappu");
    cappus.forEach(function (cappu) {
        cappu.style.display = "block";
        cappu.style.cursor = "pointer";
    });

    let phones = document.querySelectorAll(".phone");
    phones.forEach(function (phone) {
        phone.style.display = "block";
        phone.style.cursor = "pointer";
        phone.addEventListener("click", playMurmur);
    })

    let phones2 = document.querySelectorAll(".phone2");
    phones2.forEach(function (phone2) {
        phone2.style.display = "block";
        phone2.style.cursor = "pointer";
        phone2.addEventListener("click", ringg);
    });

    let bgm = document.querySelector("#bgm");
    bgm.loop = true;
    bgm.play();

    let info = document.querySelector(".info");
    info.style.display = "block"
}

function playMurmur() {
    let murmur = document.querySelector("#murmur");
    murmur.play();
}

function phone3Click() {
    let murmur = document.querySelector("#murmur");
    murmur.play();
    let bird = document.querySelector(".bird");
    bird.style.display = "none";
    phone3Clicked = true;
    fairyMoving = true;
    fairyStartScroll = window.scrollX;
    let fairy = document.querySelector(".fairy");
    if (fairy) {
        fairy.style.animation = "flying 1s infinite ease-in-out";
    }
}

function ringg() {
    let ring = document.querySelector("#ring");
    ring.play();
    ringPlayed = true;

    let birds = document.querySelectorAll(".bird");
    birds.forEach(function (bird) {
        bird.style.display = "block";
    });

    let phones3 = document.querySelectorAll(".phone3");
    phones3.forEach(function (phone3) {
        phone3.style.cursor = "pointer";
        phone3.addEventListener("click", phone3Click);
    });
}

function dropFairy(ev) {
    ev.preventDefault();
    console.log("Fairy dropped on left door!");

    fairyDroppedLeft = true; // Mark that fairy was dropped

    let fairy = document.querySelector(".fairy");
    if (fairy) {
        fairy.style.display = "none";

        let birds = document.querySelectorAll(".bird2");
        birds.forEach(function (bird2) {
            bird2.style.display = "block";
        });

        let chat = document.querySelector(".chat");
        chat.style.display = "none";

        let birds2 = document.querySelectorAll(".bird");
        birds2.forEach(function (bird1) {
            bird1.style.display = "none";
        });
    }

    // Create fairy at pillow position (left side)
    let fairyAtPillow = document.createElement("img");
    fairyAtPillow.src = "assets/toothfairy.gif";
    fairyAtPillow.className = "fairy-at-pillow";
    fairyAtPillow.style.position = "absolute";
    fairyAtPillow.style.left = "350px";
    fairyAtPillow.style.top = "200px";
    fairyAtPillow.style.height = "200px";
    fairyAtPillow.style.width = "auto";
    fairyAtPillow.draggable = true;
    fairyAtPillow.style.cursor = "grab";
    fairyAtPillow.style.zIndex = "100";
    fairyAtPillow.style.display = "none"; // Hidden until scroll back
    fairyAtPillow.addEventListener("dragstart", draggingStarted);
    fairyAtPillow.addEventListener("dragend", draggingEnded);

    let firstWindow = document.querySelector(".windowSize");
    firstWindow.append(fairyAtPillow);
}

function dropFairyToOpen2(ev) {
    ev.preventDefault();
    console.log("Fairy dropped on open2 - going to magic!");
    document.location = "magic.html";
}

function openCharacter() {
    document.querySelector(".character").style.display = "flex";
}

function closeCharacter() {
    document.querySelector(".character").style.display = "none";
}

console.log("hi")