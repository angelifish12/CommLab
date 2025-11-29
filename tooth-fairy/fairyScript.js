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
function splitPanel() {
    let leftTop = document.querySelector(".left-top");
    let leftBottom = document.querySelector(".left-bottom");

    leftTop.style.flex = "1";
    leftTop.style.borderBottom = "dashed rgb(255, 255, 255) 2px";

    leftBottom.style.display = "block";
    leftBottom.style.flex = "1";

    document.querySelector(".cappu").style.display = "block";
    document.querySelector(".chat2").style.display = "block";
    document.querySelector(".phone3").style.display = "block";
    document.querySelector(".door3").style.display = "block";


    // smallerrr
    document.querySelector(".fairyy").className += " small";
    document.querySelector(".phone2").className += " small";
    document.querySelector(".chat").className += " small";
    document.querySelector(".door2").className += " small";
}

chatt();