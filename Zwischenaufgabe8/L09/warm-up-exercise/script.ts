let names: string[] = ["Ben", "Ella", "Emil", "Emilia", "Emma", "Finn", "Hannah", "Lea", "Leon", "Lina", "Louis", "Luca", "Marie", "Matteo", "Mia", "Mila", "Noah", "Paul", "Sophia", "Theo"];
console.log(names.length)


document.querySelector("span").innerHTML = names.length + "";

document.querySelector("#buttonAufsteigend").addEventListener("click",
function(){
    for (let index = names.length-1; index >= 0; index--) {
        if(names[index] == "Lea" || index == 17)() 
        document.querySelector("#liste").innerHTML += names [index] + "<br>";
        
    }
});