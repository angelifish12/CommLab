function phonee() {
    let phone = document.querySelector(".phone")
    phone.style.cursor = "pointer"
    phone.onclick = fairyyy;
}

function fairyyy() {
    let phone = document.querySelector(".phone");
    phone.style.display = "none";
    let fairyy = document.querySelector(".fairyy");
    fairyy.style.display = "block";
    let phone2 = document.querySelector(".phone2");
    phone2.style.display = "block";
    let chat = document.querySelector(".chat");
    chat.style.display = "block";
    let door = document.querySelector(".door2");
    door.style.display = "block";
}

phonee();

function chatt() {
    let chat = document.querySelector(".chat");
    if (chat) {
        chat.style.cursor = "pointer";
        chat.onclick = splitPanel;
    }
}

let hasClicked = false;

function splitPanel() {
    let leftTop = document.querySelector(".left-top");
    let leftBottom = document.querySelector(".left-bottom");

    leftTop.style.flex = "1";
    leftTop.style.borderBottom = "dashed rgb(255, 255, 255) 2px";

    leftBottom.style.display = "block";
    leftBottom.style.flex = "1";

    if (!hasClicked) {
        document.querySelector(".cappu").style.display = "block";
        document.querySelector(".chat2").style.display = "block";
        document.querySelector(".phone3").style.display = "block";
        document.querySelector(".door3").style.display = "block";
    }

    // smallerrr
    document.querySelector(".fairyy").className += " small";
    document.querySelector(".phone2").className += " small";
    document.querySelector(".chat").className += " small";
    document.querySelector(".door2").className += " small";
}

chatt();

function audio() {
    let chat2 = document.querySelector(".chat2");
    if (chat2) {
        chat2.style.cursor = "pointer";
        chat2.onclick = bigChat;
    }
}

function bigChat() {
    hasClicked = true;
    let chat3 = document.querySelector(".chat3")
    chat3.style.display = "block";
    let phone4 = document.querySelector(".phone4")
    phone4.style.display = "block";
    let door3 = document.querySelector(".door3")
    door3.style.display = "block";
    let cappu = document.querySelector(".cappu")
    cappu.style.display = "none";
    let chat2 = document.querySelector(".chat2")
    chat2.style.display = "none";
    let phone3 = document.querySelector(".phone3")
    phone3.style.display = "none";
    if (chat3) {
        chat3.style.cursor = "pointer";
        chat3.onclick = murmurr;
    }

}

audio();

function murmurr() {
    let murmur = document.querySelector("#murmur");
    murmur.play();
    murmur.onended = function () {
        let leftBottom = document.querySelector(".left-bottom");
        leftBottom.style.display = "none";
        let leftTop = document.querySelector(".left-top");
        leftTop.style.borderBottom = "none";
        leftTop.style.flex = "0";
        leftTop.style.display = "none";
        let fairyyy = document.querySelector(".fairyyy");
        fairyyy.style.display = "block";
        let open = document.querySelector(".open");
        open.style.display = "block"
        let door = document.querySelector(".door")
        door.style.display = "none";
        let open2 = document.querySelector(".open2");
        open2.style.display = "block"
    };
}
function dragoverHandler(ev) {
    ev.preventDefault();
}
function dropHandler(ev) {
    ev.preventDefault();
    console.log("dropped!");
    let fairyyy = document.querySelector(".fairyyy")

    fairyyy.style.display = "none";

    let fairyRight = document.querySelector(".fairy-right");
    fairyRight.style.display = "block";
}