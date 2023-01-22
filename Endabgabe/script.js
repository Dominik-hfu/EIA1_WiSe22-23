let randomnumbrs = [];
let right_questions = [];
let firstnumber = 0;
let clicked = 0;
function init(questiontype) {
    switch (questiontype) {
        case 'HTML': {
            Aufgabenstellung('HTML');
            break;
        }
        case 'CSS': {
            Aufgabenstellung('CSS');
            break;
        }
        case 'TS':
            {
                Aufgabenstellung('TS');
                break;
            }
            ;
        case 'gemischt': {
            Aufgabenstellung('gemischt');
            break;
        }
    }
}
document.querySelector("#html").addEventListener("click", function () {
    init('HTML');
});
document.querySelector("#css").addEventListener("click", function () {
    init('CSS');
});
document.querySelector("#typescript").addEventListener("click", function () {
    init('TS');
});
document.querySelector("#gemischt").addEventListener("click", function () {
    init('gemischt');
});
let answer = [];
let correct = [];
let htmlquiz = [{
        question: " Was heißt HTML? ",
        answer: [" Hypertext markup language ", " Hypertext makeup language ", " Hypertext markup linguini "],
        correct: " Hypertext markup language "
    },
    {
        question: " Was ist HTML? ",
        answer: [" Auszeichnungssprache ", " Fremdsprache ", " Zeichensprache "],
        correct: " Auszeichnungssprache "
    },
    {
        question: " HTML beeinhaltet: ",
        answer: [" Tags ", " Nachts ", " Mittags "],
        correct: " Tags "
    },
    {
        question: " Wo wird HTML interpretiert und gerendert? ",
        answer: [" Browser ", " Peach ", " Yoshi "],
        correct: " Browser "
    },
    {
        question: " Wie wird die Strukturierung der DOM Inhalte genannt? ",
        answer: [" DOM-Tree ", " DOM-INIK ", " DOM-Flower "],
        correct: " DOM-Tree "
    },
    {
        question: " Für was steht UTF-8? ",
        answer: [" Zeichensatz ", " Sprache ", " Lesereihenfolge "],
        correct: " Zeichensatz "
    },
    {
        question: " Ein HTML Dokument enthält: ",
        answer: [" Head ", " Shoulder ", " Knees "],
        correct: " Head "
    }];
let cssquiz = [{
        question: " Was heißt CSS? ",
        answer: [" Cascading style sheets ", " Cascading styling software ", " Cascading super style "],
        correct: " Cascading style sheets "
    },
    {
        question: " Bei welchem der Begriffe, handelt es sich um eine Selektor Art? ",
        answer: [" Class ", " Group ", " Set "],
        correct: " Class "
    },
    {
        question: " Welches Verhalten gibt es in CSS? ",
        answer: [" Flussverhalten ", " Meerverhalten ", " Seeverhalten "],
        correct: " Flussverhalten "
    },
    {
        question: " Welche Einheit dient der Layout Anpassung? ",
        answer: [" px ", " kcal ", " nm "],
        correct: " px "
    },
    {
        question: " Was heißt Responsive? ",
        answer: [" stufenlos ", " stufenweise ", " aussichtslos "],
        correct: " stufenlos "
    },
    {
        question: " Wie wird eine CSS Eigenschaft eingebunden? ",
        answer: [" extern ", " inline ", " intern "],
        correct: " extern "
    },
    {
        question: " In CSS werden Eigenschaften : ",
        answer: [" vererbt ", " verheiratet ", " verschlafen "],
        correct: " vererbt "
    }];
let typescriptquiz = [{
        question: "Für was wird Typescript benötigt?",
        answer: [" Interaktive Anwendungen ", " Statische Anwendungen ", " Braucht man eigentlich gar nicht "],
        correct: " Interaktive Anwendungen "
    },
    {
        question: " Welche Klammer umschließt eine Funktion? ",
        answer: [" {} ", " () ", " [] "],
        correct: " {} "
    },
    {
        question: " Was ist ein Array? ",
        answer: [" Eine Liste ", " Eine Tabelle ", " Eine Rechnung "],
        correct: " Eine Liste "
    },
    {
        question: " Wobei handelt es sich um eine Anweisung? ",
        answer: [" if ", " div ", " width "],
        correct: " if "
    },
    {
        question: " Was kann verwendet werden um mehrere Elemente nacheinander zu manipulieren? ",
        answer: [" Schleifen ", " Konstanten ", " Objekte "],
        correct: " Schleifen "
    },
    {
        question: " Welche Operatoren Art gibt es? ",
        answer: [" Logische ", " Unlogische ", " Unnötige "],
        correct: " Logische "
    },
    {
        question: " Was wird mit einer DOM- Manipulation manipuliert? ",
        answer: [" Inhalte ", " Events ", " Dominik "],
        correct: " Inhalte "
    }];
let gemischtquiz = [];
for (let j = 0; j < 7; j++) {
    gemischtquiz[j] = htmlquiz[j];
    gemischtquiz[j + 7] = cssquiz[j];
    gemischtquiz[j + 14] = typescriptquiz[j];
}
let i = 0;
htmlquiz[0].answer;
function Aufgabenstellung(type) {
    let quiz = [];
    switch (type) {
        case 'HTML': {
            quiz = htmlquiz;
            break;
        }
        case 'CSS': {
            quiz = cssquiz;
            break;
        }
        case 'TS': {
            quiz = typescriptquiz;
            break;
        }
        case 'gemischt': {
            quiz = gemischtquiz;
            break;
        }
    }
    let frage = Math.floor(Math.random() * quiz.length);
    let newinhalt = document.querySelector("#inhalt");
    newinhalt.innerHTML = "";
    let fragetext = document.createElement("h2");
    fragetext.classList.add("frage");
    newinhalt.appendChild(fragetext);
    fragetext.innerHTML = quiz[frage].question;
    let answerarr = [];
    let arr = [];
    for (let index = 0; index < quiz[frage].answer.length; index++) {
        let wdh = true;
        while (wdh == true) {
            let Zufallsantwort = Math.floor(Math.random() * 3);
            if (answerarr.includes(Zufallsantwort) == false) {
                arr[index] = quiz[frage].answer[Zufallsantwort];
                let Antworten = document.createElement("p");
                Antworten.setAttribute('id', 'antwort' + index.toString());
                Antworten.classList.add("antwort");
                answerarr.push(Zufallsantwort);
                Antworten.innerHTML = quiz[frage].answer[Zufallsantwort];
                newinhalt.appendChild(Antworten);
                let circle = document.createElement("p");
                circle.setAttribute('id', index.toString());
                circle.classList.add("circle", "fa-regular", "fa-circle", "fa-2x");
                newinhalt.appendChild(circle);
                Antworten.prepend(circle);
                wdh = false;
            }
            else {
                wdh = true;
            }
        }
    }
    ;
    let circle1 = document.getElementById("0");
    let circle2 = document.getElementById("1");
    let circle3 = document.getElementById("2");
    // jede antwort nur einmal!!!
    // jede frage nur einmal außer wenn falsch beantwortet wurde, dann kann sie wieder vorkommen
    let our_lösung = '';
    circle1.onclick = function click() {
        circle1.classList.add("tick", "fa-solid", "fa-check", "fa-2x");
        circle2.classList.remove("tick", "fa-solid", "fa-check", "fa-2x");
        circle2.classList.add("circle", "fa-regular", "fa-circle", "fa-2x");
        circle3.classList.remove("tick", "fa-solid", "fa-check", "fa-2x");
        circle3.classList.add("circle", "fa-regular", "fa-circle", "fa-2x");
        console.log(circle1);
        let antwort = document.getElementById("antwort0");
        our_lösung = antwort.innerHTML;
        console.log(our_lösung);
    };
    circle2.onclick = function click() {
        circle2.classList.add("tick", "fa-solid", "fa-check", "fa-2x");
        circle1.classList.remove("tick", "fa-solid", "fa-check", "fa-2x");
        circle1.classList.add("circle", "fa-regular", "fa-circle", "fa-2x");
        circle3.classList.remove("tick", "fa-solid", "fa-check", "fa-2x");
        circle3.classList.add("circle", "fa-regular", "fa-circle", "fa-2x");
        let antwort = document.getElementById("antwort1");
        our_lösung = antwort.innerHTML;
        console.log(our_lösung);
    };
    circle3.onclick = function click() {
        circle3.classList.add("tick", "fa-solid", "fa-check", "fa-2x");
        circle2.classList.remove("tick", "fa-solid", "fa-check", "fa-2x");
        circle2.classList.add("circle", "fa-regular", "fa-circle", "fa-2x");
        circle1.classList.remove("tick", "fa-solid", "fa-check", "fa-2x");
        circle1.classList.add("circle", "fa-regular", "fa-circle", "fa-2x");
        let antwort = document.getElementById("antwort2");
        our_lösung = antwort.innerHTML;
        console.log(our_lösung);
    };
    let punktestand = document.createElement("p");
    punktestand.classList.add("punktestand");
    punktestand.innerHTML = " Punktestand: " + i;
    newinhalt.appendChild(punktestand);
    let next = document.createElement("button");
    next.classList.add("next");
    next.innerHTML = " Weiter ";
    newinhalt.appendChild(next);
    document.querySelector(".next").addEventListener("click", function () {
        let eingabe = our_lösung;
        let ergebnis = Lösung(quiz[frage], eingabe);
        let Zufallsfrage = 0;
        if (ergebnis == true) {
            i = i + 1;
            right_questions.push(frage);
            quiz.splice(frage, 1);
            if (type == 'gemischt') {
                Zufallsfrage = Math.floor(Math.random() * gemischtquiz.length);
            }
            else {
                Zufallsfrage = Math.floor(Math.random() * htmlquiz.length);
            }
        }
        else {
            if (type == 'gemischt') {
                Zufallsfrage = Math.floor(Math.random() * gemischtquiz.length);
            }
            else {
                Zufallsfrage = Math.floor(Math.random() * htmlquiz.length);
            }
        }
        Aufgabenstellung(type);
    });
    if (i == 5) {
        newinhalt.innerHTML = "";
        let zertifikat = document.createElement("h1");
        zertifikat.classList.add("zertifikat");
        zertifikat.innerHTML = "Glückwunsch Sie haben den Kurs erfolgreich bestanden!";
        newinhalt.appendChild(zertifikat);
        let neustart = document.createElement("p");
        neustart.classList.add("neustart", "fa-solid", "fa-rotate-right", "fa-2x");
        newinhalt.appendChild(neustart);
        let home = document.createElement("p");
        home.classList.add("home", "fa-solid", "fa-house", "fa-2x");
        newinhalt.appendChild(home);
        neustart.addEventListener("click", function () {
            newinhalt.innerHTML = "";
            // newinhalt.innerHTML="inhalt";
            // wie auf inhalt zurückgreifen?
        });
        home.addEventListener("click", function () {
            newinhalt.innerHTML = "";
        });
    }
    // htmlquiz,css,typescript,gemischt Fragen alle shufflen mit einer funktion (schleife)
}
function Lösung(frage, our_lösung) {
    let real_lösung = frage.correct;
    console.log(our_lösung);
    console.log(real_lösung);
    let ergebnis = false;
    if (our_lösung.includes(real_lösung) == true) {
        alert('Richtig');
        ergebnis = true;
    }
    else {
        alert('Falsch');
        ergebnis = false;
    }
    return ergebnis;
}
//# sourceMappingURL=script.js.map