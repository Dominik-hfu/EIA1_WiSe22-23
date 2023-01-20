interface question {
    question: string;
    answer: string[];
    correct: boolean;
}

let answer=[];

let htmlquiz: question[] = [{
    question: " Was heißt HTML? ",
    answer: [" Hypertext markup language ", " Hypertext makeup language ", " Hypertext markup linguini "],
    correct: true
},
{
    question: " Was ist HTML? ",
    answer: [" Auszeichnungssprache ", " Fremdsprache ", " Zeichensprache "],
    correct: true

},
{
    question: " HTML beeinhaltet: ",
    answer: [" Tags ", " Nachts ", " Mittags "],
    correct: true

},
{
    question: " Wo wird HTML interpretiert und gerendert? ",
    answer: [" Browser ", " Peach ", " Yoshi "],
    correct: true
},
{
    question: " Wie wird die Strukturierung der DOM Inhalte genannt? ",
    answer: [" DOM-Tree ", " DOM-INIK ", " DOM-Flower "],
    correct: true
},
{
    question: " Für was steht UTF-8? ",
    answer: [" Zeichensatz ", " Sprache ", " Lesereihenfolge "],
    correct: true
},
{
    question: " Ein HTML Dokument enthält: ",
    answer: [" Head ", " Shoulder ", " Knees "],
    correct: true
}];


let cssquiz: question[] = [{
    question: " Was heißt CSS? ",
    answer: [" Cascading style sheets ", " Cascading styling software ", " Cascading super style "],
    correct: true
},
{
    question: " Bei welchem der Begriffe, handelt es sich um eine Selektor Art? ",
    answer: [" Class ", " Group ", " Set "],
    correct: true
},
{
    question: " Welches Verhalten gibt es in CSS? ",
    answer: [" Flussverhalten ", " Meerverhalten ", " Seeverhalten "],
    correct: true
},
{
    question: " Welcher Einheit dient der Layout Anpassung? ",
    answer: [" px ", " kcal ", " nm "],
    correct: true
},
{
    question: " Was heißt Responsive? ",
    answer: [" stufenlos ", " stufenweise ", " aussichtslos "],
    correct: true
},
{
    question: " Wie wird eine CSS Eigenschaft eingebunden? ",
    answer: [" extern ", " inline ", " intern "],
    correct: true
},
{
    question: " In CSS werden Eigenschaften : ",
    answer: ["vererbt ", " verheiratet ", " verschlafen "],
    correct: true
}];


let typescriptquiz: question[] = [{
    question: "Für was wird Typescript benötigt?",
    answer: [" Interaktive Anwendungen ", " Statische Anwendungen ", " Braucht man eigentlich gar nicht "],
    correct: true
},
{
    question: " Welche Klammer umschließt eine Funktion? ",
    answer: [" {} ", " () ", " [] "],
    correct: true
},
{
    question: " Was ist ein Array? ",
    answer: [" Eine Liste ", " Eine Tabelle ", " Eine Rechnung "],
    correct: true
},
{
    question: " Wobei handelt es sich um eine Anweisung? ",
    answer: [" if ", " div ", " width "],
    correct: true
},
{
    question: " Was kann verwendet werden um mehrere Elemente nacheinander zu manipulieren? ",
    answer: [" Schleifen ", " Konstanten ", " Objekte "],
    correct: true
},
{
    question: " Welche Operatoren Art gibt es? ",
    answer: [" Logische ", " Unlogische ", " Unnötige "],
    correct: true
},
{
    question: " Was wird mit einer DOM- Manipulation manipuliert? ",
    answer: [" Inhalte ", " Events ", " Dominik "],
    correct: true
}];

let gemischtquiz: question[] = [{
    question: " gemischte Fragen ",
    answer: [" gemischte Antworten "],
    correct: true
}]


let i = 0;


function Aufgabenstellung(frage, antwort) {
    let newinhalt = document.querySelector("#inhalt") as HTMLDivElement
    newinhalt.innerHTML = "";
    let fragetext = document.createElement("h2");
    fragetext.classList.add("frage");
    newinhalt.appendChild(fragetext);
    fragetext.innerHTML = frage.question;
    
    let antwortmöglichkeiten: number= 2;
    answer=[];
    for(let index=0; index<=antwortmöglichkeiten; index++){
        let Zufallsantwort= Math.floor(Math.random()*3);
        answer[index]=answer[Zufallsantwort];
        let Antworten= document.createElement("p");
        Antworten.classList.add("antwort");
        Antworten.innerHTML= antwort.answer[Zufallsantwort];
        newinhalt.appendChild(Antworten);
        console.log(answer)
    }
    // jede antwort nur einmal!!!

    let punktestand = document.createElement("p");
    punktestand.classList.add("punktestand");
    punktestand.innerHTML = " Punktestand: " + i;
    newinhalt.appendChild(punktestand);
    let next = document.createElement("button");
    next.classList.add("next");
    next.innerHTML = " Weiter ";
    newinhalt.appendChild(next);

}

document.querySelector("#html").addEventListener("click", function () {
    let frage = htmlquiz[0];
    let antwort = htmlquiz[0];
    Aufgabenstellung(frage, antwort);
})
document.querySelector("#css").addEventListener("click", function () {
    let frage = cssquiz[0];
    let antwort = cssquiz[0];
    Aufgabenstellung(frage, antwort);
})
document.querySelector("#typescript").addEventListener("click", function () {
    let frage = typescriptquiz[0];
    let antwort = typescriptquiz[0];
    Aufgabenstellung(frage, antwort);
})
document.querySelector("#gemischt").addEventListener("click", function () {
    let frage = gemischtquiz[0];
    let antwort = gemischtquiz[0];
    Aufgabenstellung(frage, antwort);
})
