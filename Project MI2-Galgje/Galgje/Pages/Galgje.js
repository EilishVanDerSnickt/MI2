"use strict";
/* jshint esnext: true*/

// Hieronder staan de globale variabelen.
var randomWoordArray = ["programmeur", "computer", "javascript", "programmeertaal"];
var randomWoord = randomWoordArray[Math.floor(Math.random() * randomWoordArray.length)];

var s;
var aantalFouten = 0;
var antwoordArray = [];
var alIngevoerdeLetters = [];
var antwoordIsJuist = false;

// Deze methode wordt uitgevoerd wanneer het spel (her)start.
var Start = () => {

    // Hier stellen we standaardwaarden van het spel in, het galgje word verborgen, velden leeggemaakt en waarden worden gereset.
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

    // Een for-lus om elke letter van het te raden woord te vervangen door "_".
    for (let i = 0; i < randomWoord.length; i++) {
        antwoordArray[i] = "_";
    }

    s = antwoordArray.join(" ");
    document.getElementById("antwoord").innerHTML = s;
}

// We laten de "Start"-methode lopen bij het starten van het programma.
Start();

// Deze methode controleert of de ingegeven letter correct is en geeft hierop een gepaste feedback.
var Letter = () => {
    
    // Stelt de variabele letter gelijk aan wat er ingevuld wordt in het tekstvak "antwoordLetter".
    let letter = document.getElementById("antwoordLetter").value;
    
    antwoordIsJuist = false;

    // Controleert of er enkel 1 letter is ingegeven en geeft gepaste feedback.
    // Een for-lus controleert op juiste letters en signaleert een goed antwoord via een boolean, deze bepaalt verder of er een fout is gemaakt.
    if (letter.length == 1) {
        for (let i = 0; i < randomWoord.length; i++) {
            if (randomWoord[i] === letter) {
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
        confirm("Foute invoer je mag maar 1 letter ingeven.");
    }

}

// Deze methode controleert of je het juiste woord hebt geraden, zo niet is het een fout.
// Er word een controle gemaakt op een ingevuld veld, wanneer het leeg is word dit niet als fout gezien.
var Woord = () => {

    if ((s = document.getElementById("antwoordWoord").value) === randomWoord) {
        Start();
        confirm("Proficiat je bent gewonnen.");
    } else {
        (document.getElementById("antwoordWoord").value == "") ? (null) : (foutGemaakt());
        document.getElementById("antwoordWoord").value = "";
        setTimeout(function () {
            confirm("Foute invoer");
        }, 500);
    }
}

// Deze functie tekent de galg per fout die je maakt, ze is dan ook gekoppelt aan de methode "foutGemaakt".
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
                confirm("Je bent verloren!");
                Start();
            }, 500);
            break;
        default:
            document.getElementById("galg").style.visibility = "hidden"
            break;
    }
}

// Deze methode vermeerdert het aantal fouten en refresht het bijhorende label.
var foutGemaakt = () => {
    aantalFouten++;
    document.getElementById("counter").innerHTML = "Aantal fouten: " + aantalFouten;
    TekenGalg();
}
