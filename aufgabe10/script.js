let text = document.querySelector(".text");
let todos = document.querySelector(".todos");
text.addEventListener("keypress", function (ev) {
    if (ev.key == "Enter" && text.value != "") {
        const paragraph = document.createElement("p");
        paragraph.innerText = text.value;
        paragraph.classList.add("paragraph");
        todos.prepend(paragraph);
        const bin = document.createElement("p");
        bin.classList.add("bin", "fa-solid", "fa-trash", "fa-2x");
        bin.addEventListener("click", function () {
            bin.classList.remove("paragraph");
        });
        paragraph.append(bin);
        const circle = document.createElement("p");
        circle.classList.add("circle", "fa-regular", "fa-circle", "fa-2x");
        circle.addEventListener("click", function () {
            circle.classList.remove("fa-regular", "fa-circle", "fa-2x");
            circle.classList.add("fa-solid", "fa-check", "fa-2x");
        });
        paragraph.prepend(circle);
        text.value = "";
    }
});
//# sourceMappingURL=script.js.map