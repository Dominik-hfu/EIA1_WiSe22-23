let buttonA = document.querySelector("#buttonA") as HTMLButtonElement
buttonA.addEventListener("click", function () {
    playSample(new Audio("A.mp3"))
})

let buttonB = document.querySelector("#buttonB") as HTMLButtonElement
buttonB.addEventListener("click", function () {
    playSample(new Audio("C.mp3"))
})

let buttonC = document.querySelector("#buttonC") as HTMLButtonElement
buttonC.addEventListener("click", function () {
    playSample(new Audio("F.mp3"))
})

let buttonD = document.querySelector("#buttonD") as HTMLButtonElement
buttonD.addEventListener("click", function () {
    playSample(new Audio("G.mp3"))
})

let buttonE = document.querySelector("#buttonE") as HTMLButtonElement
buttonE.addEventListener("click", function () {
    playSample(new Audio("kick.mp3"))
})

let buttonF = document.querySelector("#buttonF") as HTMLButtonElement
buttonF.addEventListener("click", function () {
    playSample(new Audio("laugh-1.mp3"))
})

let buttonG = document.querySelector("#buttonG") as HTMLButtonElement
buttonG.addEventListener("click", function () {
    playSample(new Audio("laugh-2.mp3"))
})

let buttonH = document.querySelector("#buttonH") as HTMLButtonElement
buttonH.addEventListener("click", function () {
    playSample(new Audio("snare.mp3"))
})

let buttonI = document.querySelector("#buttonI") as HTMLButtonElement
buttonI.addEventListener("click", function () {
    playSample(new Audio("hihat.mp3"))
})

const playbutton= document.querySelector(".play") as HTMLImageElement
playbutton.addEventListener("click", function(){

setInterval(function() {playSample(new Audio(array[i]))
 i++ 
 if (i== 3) {i= 0}
 }, 500);
 var i= 0
})

var array= ["kick.mp3", "snare.mp3", "hihat.mp3"]

function playSample(ton: any) { ton.play(); }

