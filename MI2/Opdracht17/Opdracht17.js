"use strict";

var naam = document.getElementById("naam").value;
var getal = document.getElementById("nummer").value;

function bewaar() {
    var nieuwObject = {
        "naam" : document.getElementById("naam").value,
        "getal" : document.getElementById("nummer").value
    };
   
    
        localStorage.persoon = JSON.stringify(nieuwObject);
        $("#uitleg").html("Je informatie is opgeslagen in het locale geheugen.");
     }

    function haalOp() {
        var persoon = JSON.parse(localStorage.persoon);
        console.table(persoon);
        $("#uitleg").html("Kijk in het console venster om je informatie te bekijken.")
    }
