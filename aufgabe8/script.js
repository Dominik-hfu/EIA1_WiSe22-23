let buttonA = document.querySelector("#buttonA");
buttonA.addEventListener("click", function () {
    playSample(new Audio("A.mp3"));
});
let buttonB = document.querySelector("#buttonB");
buttonB.addEventListener("click", function () {
    playSample(new Audio("C.mp3"));
});
let buttonC = document.querySelector("#buttonC");
buttonC.addEventListener("click", function () {
    playSample(new Audio("F.mp3"));
});
let buttonD = document.querySelector("#buttonD");
buttonD.addEventListener("click", function () {
    playSample(new Audio("G.mp3"));
});
let buttonE = document.querySelector("#buttonE");
buttonE.addEventListener("click", function () {
    playSample(new Audio("kick.mp3"));
});
let buttonF = document.querySelector("#buttonF");
buttonF.addEventListener("click", function () {
    playSample(new Audio("laugh-1.mp3"));
});
let buttonG = document.querySelector("#buttonG");
buttonG.addEventListener("click", function () {
    playSample(new Audio("laugh-2.mp3"));
});
let buttonH = document.querySelector("#buttonH");
buttonH.addEventListener("click", function () {
    playSample(new Audio("snare.mp3"));
});
let buttonI = document.querySelector("#buttonI");
buttonI.addEventListener("click", function () {
    playSample(new Audio("hihat.mp3"));
});
const playbutton = document.querySelector(".play");
playbutton.addEventListener("click", function () {
    setInterval(function () {
        playSample(new Audio(array[i]));
        i++;
        if (i == 8) {
            i = 0;
        }
    }, 500);
    var i = 0;
});
var array = ["A.mp3", "C.mp3", "F.mp3", "G.mp3", "hihat.mp3", "kick.mp3", "laugh-1.mp3", "laugh-2.mp3", "snare.mp3"];
function playSample(ton) { ton.play(); }
//# sourceMappingURL=script.js.map