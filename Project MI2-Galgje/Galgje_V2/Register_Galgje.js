"use strict";

var gebruikersnaam = document.getElementById("gebruikersnaam").value;
var wachtwoord = document.getElementById("wachtwoord").value;
var objecten = [];

function registreer() {
    console.log("fff");
    let nieuwobject = {
        "gebruikersnaam" : document.getElementById("gebruikersnaam").value,
        "wachtwoord" : document.getElementById("wachtwoord").value
    };
    if(localStorage.getItem("persoon"))
        {
            objecten = localStorage.getItem("persoon");
            objecten.push(nieuwobject);
        }
    else {
        objecten = nieuwobject;
    }
    console.log("fff");
    localStorage.persoon = JSON.stringify(objecten);
    alert("gebruikersnaam: " + document.getElementById("gebruikersnaam").value + ", wachtwoord: " + document.getElementById("wachtwoord").value);
}

/**
function toon() {
    var persoon : JSON.parse(localStorage.persoon);
    alert(persoon);
}
*/