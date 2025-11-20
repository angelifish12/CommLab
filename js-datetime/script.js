let secondsBox = document.querySelector(".seconds")

function getTheTime() {
  let now = new Date(); //return the current moment

  let h = now.getHours();      // 0–23
  let m = now.getMinutes();    // 0–59
  let s = now.getSeconds();    // 0–59


  console.log(h, m, s);
  // S
  // clear out the second div completely
  secondsBox.innerHTML = "";
  //put divs into the seconds div to represent
  //how many seconds the current moment "now" has
  repeat(s, function () {

    let div = document.createElement("div");
    secondsBox.append(div);
  })
}

setInterval(getTheTime, 1000);
getTheTime();




// Leon's Helper function:
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}