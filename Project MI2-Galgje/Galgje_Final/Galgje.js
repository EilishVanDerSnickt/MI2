"use strict";
/* jshint esnext: true*/

var randomWoordArray = ["programmeur", "computer", "javascript", "programmeertaal", "brackets", "software", "hardware", "programmeren", "informatica", "technologie"];
var randomWoord = randomWoordArray[Math.floor(Math.random() * randomWoordArray.length)];

var s;
var aantalFouten = 0;
var antwoordArray = [];
var alIngevoerdeLetters = [];
var antwoordIsJuist = false;

var Start = () => {

    document.getElementById("a1").style.visibility = "hidden";
    document.getElementById("a2").style.visibility = "hidden";
    document.getElementById("a3").style.visibility = "hidden";
    document.getElementById("a4").style.visibility = "hidden";
    document.getElementById("a5").style.visibility = "hidden";
    document.getElementById("a6").style.visibility = "hidden";
    document.getElementById("a7").style.visibility = "hidden";
    document.getElementById("a8").style.visibility = "hidden";
    document.getElementById("a9").style.visibility = "hidden";
    document.getElementById("a10").style.visibility = "hidden";
    aantalFouten = 0;
    document.getElementById("counter").innerHTML = "Aantal fouten: " + aantalFouten;
    document.getElementById("antwoordLetter").value = "";
    document.getElementById("antwoordWoord").value = "";

    for (let i = 0; i < randomWoord.length; i++) {
        antwoordArray[i] = "_";
    }

    s = antwoordArray.join(" ");
    document.getElementById("antwoord").innerHTML = s.toLowerCase();
}

Start();

var Letter = () => {
    
    let letter = document.getElementById("antwoordLetter").value;
    
    antwoordIsJuist = false;

    if (letter.length == 1) {
        for (let i = 0; i < randomWoord.length; i++) {
            if (randomWoord[i] === letter.toLowerCase()) {
                antwoordArray[i] = letter;
                antwoordIsJuist = true;
            }
        }
        
        for (let i = 0; i < alIngevoerdeLetters.length; i++) {
            if (alIngevoerdeLetters[i] === letter) {
                antwoordIsJuist = false;
            }
        }
        
        alIngevoerdeLetters.push(letter);

        (antwoordIsJuist == true) ? (null) : (foutGemaakt());

        document.getElementById("counter").innerHTML = "Aantal fouten: " + aantalFouten;
        document.getElementById("antwoordLetter").value = "";
        document.getElementById("antwoord").innerHTML = antwoordArray.join(" ");
    } else {
        document.getElementById("antwoordLetter").value = "";

    }

}

var Woord = () => {

    if ((s = document.getElementById("antwoordWoord").value.toLowerCase()) === randomWoord) {
        location.reload(true);
        Start();
        content("Proficiat je bent gewonnen. Speel opnieuw?");
    } else {
        (document.getElementById("antwoordWoord").value == "") ? (null) : (foutGemaakt());
        document.getElementById("antwoordWoord").value = "";
        setTimeout(function () {
            confirm("Foute invoer");
        }, 500);
    }
}

var TekenGalg = () => {

    switch (aantalFouten) {
        case 1:
            document.getElementById("a1").style.visibility = "visible"
            break;
        case 2:
            document.getElementById("a2").style.visibility = "visible"
            break;
        case 3:
            document.getElementById("a3").style.visibility = "visible"
            break;
        case 4:
            document.getElementById("a4").style.visibility = "visible"
            break;
        case 5:
            document.getElementById("a5").style.visibility = "visible"
            break;
        case 6:
            document.getElementById("a6").style.visibility = "visible"
            break;
        case 7:
            document.getElementById("a7").style.visibility = "visible"
            break;
        case 8:
            document.getElementById("a8").style.visibility = "visible"
            break;
        case 9:
            document.getElementById("a9").style.visibility = "visible"
            break;
        case 10:
            document.getElementById("a10").style.visibility = "visible"
            setTimeout(function () {
                confirm("Je bent verloren! Probeer het opnieuw!");
                Start();
            }, 500);
            break;
        default:
            document.getElementById("galg").style.visibility = "hidden"
            break;
    }
}

var foutGemaakt = () => {
    aantalFouten++;
    document.getElementById("counter").innerHTML = "Aantal fouten: " + aantalFouten;
    TekenGalg();
}