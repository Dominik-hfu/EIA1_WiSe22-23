document.querySelector("#html").addEventListener("click", function () {

    let frage = htmlquiz[0];
    let antwort = htmlquiz[0];
    Aufgabenstellung(frage, antwort);
    
    // let Zufallsfrage=Math.floor(Math.random()*htmlquiz.length);
    // newinhalt.innerHTML=frage(htmlquiz[Zufallsfrage]);
    // htmlquiz.splice(Zufallsfrage, 1);

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

interface question {
    question: string;
    answer: string[];
    correct: boolean[];
}

let answer = [];
let correct = [];

let htmlquiz: question[] = [{
    question: " Was heißt HTML? ",
    answer: [" Hypertext markup language ", " Hypertext makeup language ", " Hypertext markup linguini "],
    correct: [answer[0] = true, answer[1] = false, answer[2] = false]
},

{
    question: " Was ist HTML? ",
    answer: [" Auszeichnungssprache ", " Fremdsprache ", " Zeichensprache "],
    correct: [answer[0] = true, answer[1] = false, answer[2] = false]

},
{
    question: " HTML beeinhaltet: ",
    answer: [" Tags ", " Nachts ", " Mittags "],
    correct: [answer[0] = true, answer[1] = false, answer[2] = false]

},
{
    question: " Wo wird HTML interpretiert und gerendert? ",
    answer: [" Browser ", " Peach ", " Yoshi "],
    correct: [answer[0] = true, answer[1] = false, answer[2] = false]
},
{
    question: " Wie wird die Strukturierung der DOM Inhalte genannt? ",
    answer: [" DOM-Tree ", " DOM-INIK ", " DOM-Flower "],
    correct: [answer[0] = true, answer[1] = false, answer[2] = false]
},
{
    question: " Für was steht UTF-8? ",
    answer: [" Zeichensatz ", " Sprache ", " Lesereihenfolge "],
    correct: [answer[0] = true, answer[1] = false, answer[2] = false]
},
{
    question: " Ein HTML Dokument enthält: ",
    answer: [" Head ", " Shoulder ", " Knees "],
    correct: [answer[0] = true, answer[1] = false, answer[2] = false]
}];


let cssquiz: question[] = [{
    question: " Was heißt CSS? ",
    answer: [" Cascading style sheets ", " Cascading styling software ", " Cascading super style "],
    correct: [answer[0] = true, answer[1] = false, answer[2] = false]
},
{
    question: " Bei welchem der Begriffe, handelt es sich um eine Selektor Art? ",
    answer: [" Class ", " Group ", " Set "],
    correct: [answer[0] = true, answer[1] = false, answer[2] = false]
},
{
    question: " Welches Verhalten gibt es in CSS? ",
    answer: [" Flussverhalten ", " Meerverhalten ", " Seeverhalten "],
    correct: [answer[0] = true, answer[1] = false, answer[2] = false]
},
{
    question: " Welcher Einheit dient der Layout Anpassung? ",
    answer: [" px ", " kcal ", " nm "],
    correct: [answer[0] = true, answer[1] = false, answer[2] = false]
},
{
    question: " Was heißt Responsive? ",
    answer: [" stufenlos ", " stufenweise ", " aussichtslos "],
    correct: [answer[0] = true, answer[1] = false, answer[2] = false]
},
{
    question: " Wie wird eine CSS Eigenschaft eingebunden? ",
    answer: [" extern ", " inline ", " intern "],
    correct: [answer[0] = true, answer[1] = false, answer[2] = false]
},
{
    question: " In CSS werden Eigenschaften : ",
    answer: ["vererbt ", " verheiratet ", " verschlafen "],
    correct: [answer[0] = true, answer[1] = false, answer[2] = false]
}];


let typescriptquiz: question[] = [{
    question: "Für was wird Typescript benötigt?",
    answer: [" Interaktive Anwendungen ", " Statische Anwendungen ", " Braucht man eigentlich gar nicht "],
    correct: [answer[0] = true, answer[1] = false, answer[2] = false]
},
{
    question: " Welche Klammer umschließt eine Funktion? ",
    answer: [" {} ", " () ", " [] "],
    correct: [answer[0] = true, answer[1] = false, answer[2] = false]
},
{
    question: " Was ist ein Array? ",
    answer: [" Eine Liste ", " Eine Tabelle ", " Eine Rechnung "],
    correct: [answer[0] = true, answer[1] = false, answer[2] = false]
},
{
    question: " Wobei handelt es sich um eine Anweisung? ",
    answer: [" if ", " div ", " width "],
    correct: [answer[0] = true, answer[1] = false, answer[2] = false]
},
{
    question: " Was kann verwendet werden um mehrere Elemente nacheinander zu manipulieren? ",
    answer: [" Schleifen ", " Konstanten ", " Objekte "],
    correct: [answer[0] = true, answer[1] = false, answer[2] = false]
},
{
    question: " Welche Operatoren Art gibt es? ",
    answer: [" Logische ", " Unlogische ", " Unnötige "],
    correct: [answer[0] = true, answer[1] = false, answer[2] = false]
},
{
    question: " Was wird mit einer DOM- Manipulation manipuliert? ",
    answer: [" Inhalte ", " Events ", " Dominik "],
    correct: [answer[0] = true, answer[1] = false, answer[2] = false]
}];

let gemischtquiz: question[] = [{
    question: " gemischte Fragen ",
    answer: [" gemischte Antworten "],
    // wie auf fragen und antworten von htmlquiz,... verweisen?
    correct: [answer[0] = true, answer[1] = false, answer[2] = false]
}];

let i=0;

function Aufgabenstellung(frage, antwort) {


    let newinhalt = document.querySelector("#inhalt") as HTMLDivElement
    newinhalt.innerHTML = "";

    let fragetext = document.createElement("h2");
    fragetext.classList.add("frage");
    newinhalt.appendChild(fragetext);
    fragetext.innerHTML = frage.question;
    // let Zufallsfrage=Math.floor(Math.random()*htmlquiz.length);
    // newinhalt.innerHTML=frage(htmlquiz[Zufallsfrage]);
    // htmlquiz.splice(Zufallsfrage, 1);


    let antwortmöglichkeiten: number = 2;

    // let answer[0]=true;
    // warum kann nicht answer.length verwendet werden?

    for (let index = 0; index <= antwortmöglichkeiten; index++) {
        let Zufallsantwort = Math.floor(Math.random() * 3);
        answer[index] = answer[Zufallsantwort];
        let Antworten = document.createElement("p");
        Antworten.classList.add("antwort");
        Antworten.innerHTML = antwort.answer[Zufallsantwort];
        newinhalt.appendChild(Antworten);

        let circle = document.createElement("p");
        circle.classList.add("circle", "fa-regular", "fa-circle", "fa-2x");
        newinhalt.appendChild(circle);
        // // wie kann zugewiesen werden das abhaken richtige lösung sein soll
        // // wie kooperieren circle und correct


        //     // nur eins darf ausgewählt werden,wenn ein anderes ausgewählt wird, verschwindet das andere
        //     // mehrfaches auswählen darf nicht möglich sein 
        // }

        let clicked = 0;

        circle.onclick = function click() {
            clicked++;
            if (clicked % 2 !== 0) {
                circle.classList.remove("circle", "fa-regular", "fa-circle", "fa-2x");
                circle.classList.add("tick", "fa-solid", "fa-check", "fa-2x");
            } else {
                circle.classList.remove("tick", "fa-solid", "fa-check", "fa-2x");
                circle.classList.add("circle", "fa-regular", "fa-circle", "fa-2x");
            }
        };
        

        Antworten.prepend(circle)
    };
    // jede antwort nur einmal!!!
    // jede frage nur einmal außer wenn falsch beantwortet wurde, dann kann sie wieder vorkommen



    let punktestand = document.createElement("p");
    punktestand.classList.add("punktestand");
    punktestand.innerHTML = " Punktestand: " + i;
    newinhalt.appendChild(punktestand);

    let next = document.createElement("button");
    next.classList.add("next");
    next.innerHTML = " Weiter ";
    newinhalt.appendChild(next);

    document.querySelector(".next").addEventListener("click", function () {
        i += 1;
        // punktstand wird nicht immer plus 1 bspw. wenn frage falsch war
        let frage = htmlquiz[1];
        let antwort = htmlquiz[1];
        // zufallsfrage und zufallsantwort generieren bzw. auf funktion zurückgreifen
        
        
        // frage= cssquiz[1];
        Aufgabenstellung(frage, antwort);})

        if(i==5){
        newinhalt.innerHTML="";
        let zertifikat= document.createElement("h1");
        zertifikat.classList.add("zertifikat");
        zertifikat.innerHTML="Glückwunsch Sie haben den Kurs erfolgreich bestanden!";
        newinhalt.appendChild(zertifikat);
        let neustart=document.createElement("p");
        neustart.classList.add("neustart", "fa-solid", "fa-rotate-right", "fa-2x");
        newinhalt.appendChild(neustart);
        let home=document.createElement("p");
        home.classList.add("home", "fa-solid", "fa-house", "fa-2x")
        newinhalt.appendChild(home);
        neustart.addEventListener("click", function(){
            newinhalt.innerHTML="";
            // newinhalt.innerHTML="inhalt";
            // wie auf inhalt zurückgreifen?
        })
    home.addEventListener("click", function(){
        newinhalt.innerHTML="";
    })}
        // htmlquiz,css,typescript,gemischt Fragen alle shufflen mit einer funktion (schleife)
    
}






