let text = document.querySelector(".text");
let todos = document.querySelector(".todos");
// let termine = document.querySelector("do") as HTMLDivElement;
let i = 0;
text.addEventListener("keypress", function (ev) {
    if (ev.key == "Enter" && text.value != "") {
        i += 1;
        let anzahl = document.querySelector(".total");
        anzahl.innerHTML = i + " in total";
        const zeile = document.createElement("p");
        zeile.innerText = text.value;
        zeile.classList.add("paragraph", "do");
        todos.prepend(zeile);
        const bin = document.createElement("p");
        bin.classList.add("bin", "fa-solid", "fa-trash", "fa-2x");
        bin.addEventListener("click", function () {
            i -= 1;
            let anzahl = document.querySelector(".total");
            anzahl.innerHTML = i + " in total";
            circle.classList.remove("fa-regular", "fa-circle", "fa-2x", "circle");
            bin.classList.remove("bin", "fa-solid", "fa-trash", "fa-2x");
            todos.classList.remove("todos");
            // termine.classList.remove("do", "paragraph", "todos");
            // todos.classList.remove("todos");
        });
        zeile.append(bin);
        const circle = document.createElement("p");
        circle.classList.add("circle", "fa-regular", "fa-circle", "fa-2x");
        circle.addEventListener("click", function () {
            circle.classList.remove("fa-regular", "fa-circle", "fa-2x");
            circle.classList.add("fa-solid", "fa-check", "fa-2x");
        });
        zeile.prepend(circle);
        text.value = "";
    }
});
// text löschen
// alle löschen
// format behalten
// stylen
// evtl effekte beim löschen
//# sourceMappingURL=script.js.map