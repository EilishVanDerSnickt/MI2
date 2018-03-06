"use strict";

var antwoord;

function RandomGenerator(antwoord){
    var reactie;
    var getal = Math.floor(Math.random() * 5);
    
    antwoord = reactie;
    
    switch (getal)
        {
            case 0: 
                reactie = "hallo";
                break;
            case 1: 
                reactie = "hey";
                break;
            case 2: 
                reactie = "hi";
                break;
            case 3: 
                reactie = "cava";
                break;
            case 4: 
                reactie = "goed";
                break;
    }
    
    document.getElementById("hetTeRadenWoord").innerHTML = reactie;
   
    return reactie;
}

RandomGenerator(antwoord);

//document.getElementById("hetTeRadenWoord").innerHTML = antwoord;





