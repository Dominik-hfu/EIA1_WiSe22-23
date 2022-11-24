const countries = ["Deutschland", "Frankreich", "Italien", "Kroatien"];
const population_eu = [501.10, 751.22];
const eu = ["Die Bevölkerung der gesamten EU betrug 2010: " + population_eu[0] + "Millionen. Seit 2022 leben in Europa " + population_eu[1] + "Millionen Menschen"];
console.log(eu);
const population_ger = [81.78, 84.10];
const germany = ["Die Bevölkerung in Deutschland betrug 2010: " + population_ger[0] + " Millionen. Bis 2022 ist die Bevölkerung auf: " + population_ger[1] + " Millionen gestiegen"];
console.log(germany);
const population_fra = [65.03, 66.05];
const france = ["Die Bevölkerung in Frankreich betrug 2010: " + population_fra[0] + " Millionen. Bis 2022 ist die Bevölkerung auf: " + population_fra[1] + " Millionen gestiegen"];
console.log(france);
const population_ita = [59.28, 60.63];
const italy = ["Die Bevölkerung in Italien betrug 2010: " + population_ita[0] + " Millionen. Bis 2022 ist die Bevölkerung auf: " + population_ita[1] + " Millionen gestiegen"];
console.log(italy);
const population_cro = [4.30, 4.08];
const croatia = ["Die Bevölkerung in Kroatien betrug 2010: " + population_cro[0] + " Millionen. Bis 2022 ist die Bevölkerung auf: " + population_cro[1] + " Millionen gesunken"];
console.log(croatia);
const population_cou = [population_ger, population_fra, population_ita, population_cro];
for (let i = 0; i < 4; i++) {
    const j = 0;
    const percentage = ((100 / population_cou[i][j]) * population_cou[i][j + 1]) - 100;
    console.log("Die prozentuale Veränderung von " + countries[i] + " ist: " + parseFloat(percentage.toString()).toFixed(2) + "%");
}
const Deutschland = [2.84];
const Frankreich = [1.57];
const Italien = [2.28];
const Kroatien = [-5.12];
function heading(land, Einwohnerzahl, realtiv) {
    const überschrift = document.querySelector(".überschrift");
    überschrift.innerHTML = " Einwohnerzahl " + land;
    const Einwohner = document.querySelector(".Einwohnerzahl");
    Einwohner.innerHTML = Einwohnerzahl[1] + " Mio";
    const prozent = document.querySelector(".relativ");
    prozent.innerHTML = Deutschland + " %";
}
const germ = document.querySelector(".germany");
germ.addEventListener('click', function () { heading("Deutschland", population_ger, Deutschland); });
const franc = document.querySelector(".france");
franc.addEventListener('click', function () { heading("Frankreich", population_fra); });
const ital = document.querySelector(".italy");
ital.addEventListener('click', function () { heading("Italien", population_ita); });
const croati = document.querySelector(".croatia");
croati.addEventListener('click', function () { heading("Kroatien", population_cro); });
//# sourceMappingURL=aufgabe6.js.map