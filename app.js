// Kolla så att javascript fungerar.
console.log("app.js har laddats och fungerar!");

// Hitta knappen.
let knapp = document.querySelector("#knapp");

// När man trycker på knappen.
knapp.addEventListener("click",
function (event){
    let text = document.querySelector("#text");
    text.innerHTML = "Goodbye World";
}
,false);