"use strict";



var getal = Math.floor(Math.random() * 5);
var antwoord;


switch (getal)
    {
        case 0: 
           antwoord = "hallo";
            break;
        case 1: 
            antwoord = "hey";
            break;
        case 2: 
            antwoord = "hi";
            break;
        case 3: 
            antwoord = "cava";
            break;
        case 4: 
            antwoord = "goed";
            break;
            document.getElementById("galgje").innerHTML = antwoord;
    }

