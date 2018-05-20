"use strict";

var gebruikersnaam = document.getElementById("gebruikersnaam").value;
var wachtwoord = document.getElementById("wachtwoord").value;
var objecten = [];
var oudeObjecten = [];

function Registreer() {
    let nieuwobject = {
        "gebruikersnaam" : document.getElementById("gebruikersnaam").value,
        "wachtwoord" : document.getElementById("wachtwoord").value
    };
    
    objecten = [];
    
    if(localStorage.getItem("persoon"))
        {
            objecten = JSON.parse(localStorage.persoon);
            objecten.push(nieuwobject);
        }
    else {
        objecten = [nieuwobject];
    }
    
    localStorage.persoon = JSON.stringify(objecten);
    alert("gebruikersnaam: " + document.getElementById("gebruikersnaam").value + ", wachtwoord: " + document.getElementById("wachtwoord").value);
    
}
