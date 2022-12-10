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
let intervalId;
let i = 0;
let clicked = 0;
let shuffel_is_clicked = false;
let zufallbeat = [];
function play_alg() {
    playbutton.classList.remove("active");
    if (!intervalId) {
        const btn = document.querySelector('#go');
        btn.classList.remove("fa", "fa-solid", "fa-play", "fa-10x");
        btn.classList.add("fa", "fa-solid", "fa-pause", "fa-10x");
        if (shuffel_is_clicked == true) {
            intervalId = setInterval(function () {
                playSample(new Audio(zufallbeat[i]));
                i++;
                if (i == 6) {
                    i = 0;
                }
            }, 650);
        }
        else {
            intervalId = setInterval(function () {
                playSample(new Audio(array[i]));
                i++;
                if (i == 3) {
                    i = 0;
                }
            }, 500);
        }
    }
}
function pause_alg() {
    playbutton.classList.add("active");
    const btn = document.querySelector('#go');
    btn.classList.remove("fa", "fa-solid", "fa-pause", "fa-10x");
    btn.classList.add("fa", "fa-solid", "fa-play", "fa-10x");
    clearInterval(intervalId);
    intervalId = null;
}
const playbutton = document.querySelector("#go");
const pausebutton = document.querySelector("#stop");
playbutton.onclick = function () {
    clicked++;
    if (clicked % 2 == 0) {
        pause_alg();
    }
    else {
        play_alg();
    }
    console.log(clicked);
};
let shuffle = document.querySelector('#shuffle');
shuffle.onclick = function () {
    shuffel_is_clicked = true;
    zufallbeat = [];
    for (let beat = 0; beat <= 6; beat++) {
        let Zufallszahl = Math.floor(Math.random() * 6);
        zufallbeat[beat] = zufall[Zufallszahl];
    }
    console.log(zufallbeat);
};
var array = ["kick.mp3", "snare.mp3", "hihat.mp3"];
let zufall = ["A.mp3", "C.mp3", "F.mp3", "G.mp3", "kick.mp3", "snare.mp3", "hihat.mp3"];
function playSample(ton) { ton.play(); }
//# sourceMappingURL=script.js.map