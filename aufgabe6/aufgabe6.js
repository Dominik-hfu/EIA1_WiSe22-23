const countries = ["Deutschland", "Frankreich", "Italien", "Kroatien"];

const population_eu = [501.11, 751.22];
const eu = ["Die Bevölkerung der gesamten EU betrug 2010: " + population_eu[0] + " Millionen. Seit 2022 leben in der Europäischen Union " + population_eu[1] + " Millionen Menschen"];
console .log(eu);

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

const growth_eu = [population_eu];
for (let m = 0; m < 1; m++) {
    const growth = (population_eu [m+1]/ population_eu [m] *100)-100;
    console .log("Die Europäische Union hatte von 2010 zu 2022 einen Bevölkerungszuwachs von " + parseFloat (growth.toString()).toFixed(2) + "%")}
    

const proportion_eu = [population_cou];
for (let i = 0; i < 4; i++) {
    const k = 0; 
    const l = 0;
    const proportion = population_cou[i][l]/ population_eu [k] *100;
    const proportional = population_cou[i][l+1]/ population_eu [k+1] *100;
    console .log(countries[i] + " hatte 2010 einen Einwohneranteil an der Europäischen Union, von " + parseFloat (proportion.toString()).toFixed(2) + "%");
    console .log(countries[i] + " hat 2022 einen Einwohneranteil an der Europäischen Union, von " + parseFloat (proportional.toString()).toFixed(2) + "%");
    }




//# sourceMappingURL=aufgabe6.js.map