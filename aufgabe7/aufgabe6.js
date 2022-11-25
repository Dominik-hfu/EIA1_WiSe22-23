const countries = ["Deutschland", "Frankreich", "Italien", "Kroatien"];
const population_eu = [501.10, 751.22, 49.91, 100, 250.12];
const eu = ["Die Bevölkerung der gesamten EU betrug 2010: " + population_eu[0] + "Millionen. Seit 2022 leben in Europa " + population_eu[1] + "Millionen Menschen"];
console.log(eu);
const population_ger = [81.78, 84.10, 2.84, 11.2, 2.32];
const germany = ["Die Bevölkerung in Deutschland betrug 2010: " + population_ger[0] + " Millionen. Bis 2022 ist die Bevölkerung auf: " + population_ger[1] + " Millionen gestiegen"];
console.log(germany);
const population_fra = [65.03, 66.05, 1.57, 8.79, 1.02];
const france = ["Die Bevölkerung in Frankreich betrug 2010: " + population_fra[0] + " Millionen. Bis 2022 ist die Bevölkerung auf: " + population_fra[1] + " Millionen gestiegen"];
console.log(france);
const population_ita = [59.28, 60.63, 2.28, 8.07, 1.35];
const italy = ["Die Bevölkerung in Italien betrug 2010: " + population_ita[0] + " Millionen. Bis 2022 ist die Bevölkerung auf: " + population_ita[1] + " Millionen gestiegen"];
console.log(italy);
const population_cro = [4.30, 4.08, -5.12, 0.54, -0.22];
const croatia = ["Die Bevölkerung in Kroatien betrug 2010: " + population_cro[0] + " Millionen. Bis 2022 ist die Bevölkerung auf: " + population_cro[1] + " Millionen gesunken"];
console.log(croatia);
const population_cou = [population_ger, population_fra, population_ita, population_cro];
for (let i = 0; i < 4; i++) {
    const j = 0;
    const percentage = ((100 / population_cou[i][j]) * population_cou[i][j + 1]) - 100;
    console.log("Die prozentuale Veränderung von " + countries[i] + " ist: " + parseFloat(percentage.toString()).toFixed(2) + "%");
}
const percentage_cou = [population_ger, population_fra, population_ita, population_cro];
for (let i = 0; i < 4; i++) {
    const j = 0;
    const percentageCouEu = population_cou[i][j + 1] / population_eu[1] * 100;
    console.log("Der prozentuale Anteil von " + countries[i] + " an der EU ist " + parseFloat(percentageCouEu.toFixed(2)) + "%");
}
const difference = [population_ger, population_fra, population_ita, population_cro];
for (let i = 0; i < 4; i++) {
    const j = 0;
    const difference = population_cou[i][j + 1] - population_cou[i][j];
    console.log(difference.toFixed(2) + " Mio");
}
function click(land, Einwohnerzahl, Steigerung, EU, Rate, landname) {
    const name = document.querySelector(".name");
    name.innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in " + landname + "in 2022";
    const überschrift = document.querySelector(".überschrift");
    überschrift.innerHTML = land;
    const Einwohner = document.querySelector(".Einwohnerzahl");
    Einwohner.innerHTML = Einwohnerzahl[1] + " Mio";
    const Einwohnersteigerung = document.querySelector(".Einwohnersteigerung");
    Einwohnersteigerung.innerHTML = Steigerung[2] + "%";
    const AnteilEu = document.querySelector(".AnteilEU");
    AnteilEu.innerHTML = EU[3] + "%";
    const Wachstumsrate = document.querySelector(".Wachstumsrate");
    Wachstumsrate.innerHTML = Rate[4] + " Mio";
}
const euro = document.querySelector(".stars");
euro.addEventListener('click', function () { click("Europa", population_eu, population_eu, population_eu, population_eu, " Europa "); });
const germ = document.querySelector(".germany");
germ.addEventListener('click', function () { click("Deutschland", population_ger, population_ger, population_ger, population_ger, " Deutschland "); });
const franc = document.querySelector(".france");
franc.addEventListener('click', function () { click("Frankreich", population_fra, population_fra, population_fra, population_fra, " Frankreich "); });
const ital = document.querySelector(".italy");
ital.addEventListener('click', function () { click("Italien", population_ita, population_ita, population_ita, population_ita, " Italien "); });
const croati = document.querySelector(".croatia");
croati.addEventListener('click', function () { click("Kroatien", population_cro, population_cro, population_cro, population_cro, " Kroatien "); });
//# sourceMappingURL=aufgabe6.js.map