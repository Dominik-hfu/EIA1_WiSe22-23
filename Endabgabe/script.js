function kategorie(questiontype) {
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
// Function kategorie greift zurück auf function Aufgabenstellung. Legt durch case und zusammen mit querySelector (darunter) fest, welches Quiz gestartet werden soll
document.querySelector("#html").addEventListener("click", function () {
    kategorie('HTML');
});
document.querySelector("#css").addEventListener("click", function () {
    kategorie('CSS');
});
document.querySelector("#typescript").addEventListener("click", function () {
    kategorie('TS');
});
document.querySelector("#gemischt").addEventListener("click", function () {
    kategorie('gemischt');
});
//Interface dient als Grundstruktur und Datentypträger für Objekte
//Interface, sowie Objekt besteht aus Frage, 3 Antwortmöglichkeiten und der richigen Antwort
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
        answer: [" Interaktive Anwendungen ", " Statische Anwendungen ", " Dynamische Anwendungen "],
        correct: " Interaktive Anwendungen "
    },
    {
        question: " Welcher Klammertyp umschließt eine Funktion? ",
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
        answer: [" Schleife ", " Konstante ", " Objekt "],
        correct: " Schleife "
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
// 3 Objekte für HTML, CSS, Typescript mit Fragen, Antwortmöglichkeiten und richtiger Antwort
// Objekte sind vom typ:question (Interface), damit auf einzelne Fragen, deren Antworten und richtige Antworten zugegriffen werden kann
// Die Antworten bestehen aus einem Array und sind ein verschachteltes Array im Gesamtarray quiz (htmlquiz,...)
let gemischtquiz = [];
for (let j = 0; j < 7; j++) {
    gemischtquiz[j] = htmlquiz[j];
    gemischtquiz[j + 7] = cssquiz[j];
    gemischtquiz[j + 14] = typescriptquiz[j];
}
//Das gemischtquiz greift über die Variable j, auf alle drei Quizze zu, deshalb müssen keine eigenen Fragen erstellt werden
// Ist j<=6 wird das htmlquiz aufgerufen, ist 7=<j<=13 wird cssquiz aufgerufen, ist 13<=j<=20 wird typescriptquiz aufgerufen
let i = 0;
// wird später für Punktestand und Ende des Quizzes benötigt, muss aber global bzw. außerhalb der Funktion deklariert werden
let right_questions = [];
// wird ebenfalls später benötigt, um die bisher richtig beantworteten Fragen in diesem Array zu speichern und somit vom Quiz ausschließen zu können
let restart = false;
// wird später für restart des Quizzes benötigt
function Aufgabenstellung(type) {
    // Function Aufgabenstellung erstellt die gesamte Aufgabe, mit Frage, Antwortmöglichkeiten, Circles, Punktestand und Weiter Button
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
    // Switch case wird hier benötigt um der Variable quiz vom Typ Array die verschiedenen Quizarten zuzuordnen.
    // Der Parameter type gleicht ab ob quiz=htmlquiz oder cssquiz,...
    // Über case bspw. HTML wird dem querySelector, der Function Kategorie und Aufgabenstellung zugeordnet
    // Break gehört zur Schreibweise von switch case und verlässt die Anweisung wenn der Fall eintritt, erspart unnötiges Abgleichen der Fälle
    let frage = Math.floor(Math.random() * quiz.length);
    let newinhalt = document.querySelector("#inhalt");
    newinhalt.innerHTML = "";
    let fragetext = document.createElement("h2");
    fragetext.classList.add("frage");
    newinhalt.appendChild(fragetext);
    fragetext.innerHTML = quiz[frage].question; //welches Objekt/ Quiz, Reihenfolge Durcheinander, von Objekt Stelle Question nehmen bzw. erstellen
    // Variable frage erstellt zufällige Frage aus Quiz
    // Newinhalt löscht über id Inhalt div
    // Fragetext wird erstellt und hinzugefügt
    let answerarr = [];
    let arr = [];
    // Arrays werden benötigt um zugreifen zu können
    for (let index = 0; index < quiz[frage].answer.length; index++) { //Welches Objekt/ Quiz, welche Frage, alle Antworten aus dem Objekt
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
                // Solange wdh richtig ist, zufällige Antwort generieren
                // Wenn die Antwort (Zufallsantwort) nicht im answerarr ist, soll er durch arr über index vom Quiz... die Frage... und die dazugehörigen Antworten
                // nehmen und durch Zufallsantwort in random Reihenfolge ausgeben
                // Wenn Antwort ausgegeben wurde soll er diese in answerarr pushen, damit diese kein zweites Mal vorkommen kann
                // Wenn Antwort in answerarr, dann ist wdh falsch, wenn nicht, dann ist wdh= true und er sucht wieder nach einer Antwortmöglichkeit
                // Sind alle Antwortmöglichkeiten ausgegeben geht er weiter im Code
                // Zusätzlich soll circle erstellt werden und eine ID vom Index bekommen, genauso wie Antworten, damit wir außerhalb der Anweisung darauf zugreifen können
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
    // Zugriff auf circles über ID
    let gewaehlte_lösung = ''; // Gewählte Lösung des Benutzers
    circle1.onclick = function click() {
        circle1.classList.add("tick", "fa-solid", "fa-check", "fa-2x");
        circle2.classList.remove("tick", "fa-solid", "fa-check", "fa-2x");
        circle2.classList.add("circle", "fa-regular", "fa-circle", "fa-2x");
        circle3.classList.remove("tick", "fa-solid", "fa-check", "fa-2x");
        circle3.classList.add("circle", "fa-regular", "fa-circle", "fa-2x");
        let antwort = document.getElementById("antwort0");
        gewaehlte_lösung = antwort.innerHTML;
    };
    circle2.onclick = function click() {
        circle2.classList.add("tick", "fa-solid", "fa-check", "fa-2x");
        circle1.classList.remove("tick", "fa-solid", "fa-check", "fa-2x");
        circle1.classList.add("circle", "fa-regular", "fa-circle", "fa-2x");
        circle3.classList.remove("tick", "fa-solid", "fa-check", "fa-2x");
        circle3.classList.add("circle", "fa-regular", "fa-circle", "fa-2x");
        let antwort = document.getElementById("antwort1");
        gewaehlte_lösung = antwort.innerHTML;
    };
    circle3.onclick = function click() {
        circle3.classList.add("tick", "fa-solid", "fa-check", "fa-2x");
        circle2.classList.remove("tick", "fa-solid", "fa-check", "fa-2x");
        circle2.classList.add("circle", "fa-regular", "fa-circle", "fa-2x");
        circle1.classList.remove("tick", "fa-solid", "fa-check", "fa-2x");
        circle1.classList.add("circle", "fa-regular", "fa-circle", "fa-2x");
        let antwort = document.getElementById("antwort2");
        gewaehlte_lösung = antwort.innerHTML;
    }; // Wird ein Circle ausgewählt, werden von den anderen beiden die ticks entfernt und circle hinzugefügt
    // Gewählte lösung wird hier bspw. antwort2
    // Gewählte Lösung prüft nachher mit richtiger Lösung ab
    let punktestand = document.createElement("p");
    punktestand.classList.add("punktestand");
    punktestand.innerHTML = " Punktestand: " + i;
    newinhalt.appendChild(punktestand);
    // Punktstand wird erstellt
    let check = document.createElement("button");
    check.classList.add("check");
    check.innerHTML = " Weiter ";
    newinhalt.appendChild(check);
    // Weiter Button wird erstellt
    document.querySelector(".check").addEventListener("click", function () {
        let eingabe = gewaehlte_lösung;
        let ergebnis = Lösung(quiz[frage], eingabe);
        if (ergebnis == true) {
            i += 1;
            right_questions.push(frage);
            quiz.splice(frage, 1);
        }
        // Check Button wird hier klickbar. Eingabe ist die gemachte Lösung des Benutzers
        // Ergebnis verweist auf Function Lösung (unten), schaut welches Quiz, welche Frage und welche Antwort gewählt wurde
        // Wenn die gewählte Antwort die richtige Antwort war, Punktestand +1 und Frage wird in right_question Array welches oben deklariert wurde, gepusht
        // Die Größe des Quiz Arrays wird bei pro richtig beantwortete Frage um 1 verkleinert
        let weiter = document.createElement("button");
        weiter.classList.add("weiter");
        weiter.innerText = "Nächste Frage";
        newinhalt.appendChild(weiter);
        let button = document.querySelector(".next");
        weiter.addEventListener("click", function () {
            Aufgabenstellung(type); // Function Aufgabenstellung wird ausgeführt
            button.style.display = ""; // Button ist sichtbar
        });
        button.style.display = "none"; // Button ist nicht mehr sichtbar
    });
    // Der Weiter Button dient als Button für den Übergang zur nächsten Frage.
    //Dieser wird benötigt, um den Hinweis auf die richtige bzw. falsche Frage ausgeben zu können.
    if (i == 5) {
        newinhalt.innerHTML = "";
        let zertifikat = document.createElement("h1");
        zertifikat.classList.add("zertifikat");
        zertifikat.innerHTML = " Glückwunsch! ";
        newinhalt.appendChild(zertifikat);
        let neustart = document.createElement("p");
        neustart.classList.add("neustart", "fa-solid", "fa-rotate-right", "fa-6x");
        newinhalt.appendChild(neustart);
        let final = document.createElement("p");
        final.classList.add("final");
        final.innerHTML = " Sie haben die Punktzahl von " + i + " Punkten erreicht! ";
        newinhalt.appendChild(final);
        neustart.addEventListener("click", function () {
            newinhalt.innerHTML = "";
            restart = true;
            if (restart == true) {
                window.location.reload(); // Startet die Seite neu
            }
        });
        // Wurden 5 Punkte errreicht, wird der Inhalt gelöscht, das Zertifikat, der Button Neustart und die Endpunktzahl (final) erstellt
    }
    function Lösung(frage, gewaehlte_lösung) {
        let real_lösung = frage.correct;
        let ergebnis = false;
        let ausgabe = document.createElement("p");
        if (gewaehlte_lösung.includes(real_lösung)) {
            ausgabe.classList.add("right");
            ausgabe.innerHTML = "Ihre Antwort war richtig!";
            ergebnis = true;
            document.body.appendChild(ausgabe);
            setTimeout(function () { ausgabe.remove(); }, 4000);
        }
        else {
            ausgabe.classList.add("wrong");
            ausgabe.innerHTML = "Ihre Antwort war falsch! Die Richtige Lösung lautet: " + frage.correct;
            ergebnis = false;
            document.body.appendChild(ausgabe);
            setTimeout(function () { ausgabe.remove(); }, 4000);
        }
        return ergebnis;
    }
} // Variable realLösung überprüft ob frage= correct
// Wenn gewaehlte Lösung die richige Lösung ist, wird ausgabe Richtig ausgegeben und ergebnis in true umgewandelt
// Wenn gewählte Lösung falsch ist, wird ausgabe Falsch ausgegeben und ergebnis bleibt false
// Boolean Status des Ergebnisses wird danach zurückgesetzt (indemfall wieder auf false)
// SetTimeout function lässt die Ausgabe nach 4s wieder verschwinden
//# sourceMappingURL=script.js.map