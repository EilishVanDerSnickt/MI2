"use strict"

var gebruikersnaam = document.getElementById("gebruikersnaam").value;
var wachtwoord = document.getElementById("wachtwoord").value;

function registreer() {
    var nieuwobject = [{
        "gebruikersnaam" : document.getElementById("gebruikersnaam").value,
        "wachtwoord" : document.getElementById("wachtwoord").value
    }];
    
    localStorage.persoon = JSON.stringify(nieuwobject);
    alert("gebruikersnaam: " + document.getElementById("gebruikersnaam").value + ", wachtwoord: " + document.getElementById("wachtwoord").value);
}

/**
function toon() {
    var persoon : JSON.parse(localStorage.persoon);
    alert(persoon);
}
*/