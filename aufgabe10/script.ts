console.time();
let text = document.querySelector(".inputbox") as HTMLInputElement;
let todos = document.querySelector(".bigbox") as HTMLDivElement;
let i = 0;
let x = 0;
let y = 0;

text.addEventListener("keypress", function (ev: KeyboardEvent) {
    if (ev.key == "Enter" && text.value != "") {


        i += 1;
        let anzahl = document.querySelector(".total") as HTMLHeadingElement
        anzahl.innerHTML = i + " in total";

        y += 1;
        let offen = document.querySelector(".open") as HTMLHeadingElement
        offen.innerHTML = y + " open ";

        const zeile = document.createElement("p");
        zeile.innerText = text.value;
        zeile.classList.add("paragraph", "box");
        todos.prepend(zeile);

        const bin = document.createElement("p");
        bin.classList.add("bin", "fa-solid", "fa-trash", "fa-2x");
        bin.addEventListener("click", function () {
            {
                i -= 1; x -= 1;
                let anzahl = document.querySelector(".total") as HTMLHeadingElement
                anzahl.innerHTML = i + " in total";
                let erledigt = document.querySelector(".done") as HTMLHeadingElement
                erledigt.innerHTML = x + " done ";
                if (x < 0) {

                    let alert = document.querySelector(".alert") as HTMLImageElement
                    alert.classList.add("alert", "fa-solid", "fa-skull-crossbones", "fa-2x");
                    alert.innerHTML = "Warning you forgot " + x * (-1) + " task(s) "

                }
                circle.remove();
                bin.remove();
                zeile.remove();
            }

        })
        zeile.append(bin);

        let circle = document.createElement("p");
        let tick = document.createElement("p");
        let clicked = 0

        circle.classList.add("circle", "fa-regular", "fa-circle", "fa-2x");

        circle.onclick = function click() {
            clicked++;
            if (clicked % 2 !== 0) {
                x += 1; y = i - x;
                circle.classList.remove("circle", "fa-regular", "fa-circle", "fa-2x")
                circle.classList.add("tick", "fa-solid", "fa-check", "fa-2x")

                let erledigt = document.querySelector(".done") as HTMLHeadingElement
                erledigt.innerHTML = x + " done ";
                let offen = document.querySelector(".open") as HTMLHeadingElement
                offen.innerHTML = y + " open ";
            }
            else {
                x -= 1; y = i + x;
                circle.classList.remove("tick", "fa-solid", "fa-check", "fa-2x")
                circle.classList.add("circle", "fa-regular", "fa-circle", "fa-2x")
                let erledigt = document.querySelector(".done") as HTMLHeadingElement
                erledigt.innerHTML = x + " done ";
                let offen = document.querySelector(".open") as HTMLHeadingElement
                offen.innerHTML = y + " open ";
            }

        }

        zeile.prepend(circle);
        text.value = "";
    }
})


console.timeEnd();

