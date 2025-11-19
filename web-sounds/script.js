let catSound = document.querySelector("#catSound");
let playBtn = document.querySelector("#playButton");
let pauseBtn = document.querySelector("#pauseButton");
let speedBtn = document.querySelector("#speedButton");
let slowBtn = document.querySelector("#speedButton");
let soundSpeed = 1;

playBtn.addEventListener("click", function () {
    catSound.play()
}
);
pauseBtn.addEventListener("click", function () {
    catSound.pause()
});
speedBtn.addEventListener("click", function () {
    // catSound.playbackRate = 10;
    catSound.playbackRate = soundSpeed;
    soundSpeed = soundSpeed * 1.1;
});

slowBtn.addEventListener("click", function () {
    // catSound.playbackRate = 10;
    catSound.playbackRate = soundSpeed;
    soundSpeed = soundSpeed * 0.9;
});