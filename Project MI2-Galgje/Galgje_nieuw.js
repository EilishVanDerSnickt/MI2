"use strict";
/* jshint esnext: true*/

var randomWoordArray = ["programmeur", "computer", "javascript", "programmeertaal"];
var randomWoord = randomWoordArray[Math.floor(Math.random() * randomWoordArray.length)];

var s;
var count = 0;
var antwoordArray = [];
var galgArray = ["#a1, #a2, #a3, #a4, #a5, #a6, #a7, #a8, #a9, #a10"];
var antwoord;
var letter;
var aantal = 0;

count = aantal;

document.getElementById("a1").innerHTML = "#a1";

Start(); 

function Start()
{
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

    
    for (var i = 0; i < randomWoord.length; i++)
        {
            antwoordArray[i] = "_";
        }
    
    s = antwoordArray.join(" ");
    document.getElementById("antwoord").innerHTML = s;
}

function Letter()
{
    var letter = document.getElementById("antwoordLetter").value;
    
    letter = letter;
    
    if (letter.length > 0 && letter.length < 2)
        {
            for (var i = 0; i < randomWoord.length; i++)
                {
                    if (randomWoord[i] === letter /**&& aantal === 0*/)
                        {
                            antwoordArray[i] = letter;
                            /**aantal = 1;*/
                            
                        }
                    else if (aantal === 1)
                        {
                            Galg();
                          
                        }
                }
            
                    
            /**document.getElementById("counter").innerHTML = "Aantal fouten: " + count;*/
            document.getElementById("counter").innerHTML = "Aantal fouten: " + aantal;
            document.getElementById("antwoord").innerHTML = antwoordArray.join(" ");
        }
    
    else
        {
            confirm("Foute invoer je mag maar 1 letter ingeven.");
        }
    
    
    
    if (count > 40)
        {
            document.getElementById("stat").innerHTML = "Come on, you should have guessed it by now";
        }
    
}

function Woord()
{
    if ((s = document.getElementById("antwoordWoord").value) === randomWoord)
        {
            confirm("Proficiat je bent gewonnen.");
            Start();
        }
    else
        {
            confirm("Foute invoer");
        }
}

function Galg()
{ 
    if (aantal === 1)
        {
            count++;
            TekenGalg();
            
        }
    if (aantal === 20)
        {
            confirm("Je bent verloren!");
            count = 0;
        }
}

function TekenGalg()
{
    switch (aantal)
        {
            case 1:
                document.getElementById("a1").style.visibility = "visible"
                break;
            case 2:
                document.getElementById("a1").style.visibility = "visible"
                break;
            case 3:
                document.getElementById("a1").style.visibility = "visible"
                break;
            case 4:
                document.getElementById("a1").style.visibility = "visible"
                break;
            case 5:
                document.getElementById("a1").style.visibility = "visible"
                break;
            case 6:
                document.getElementById("a1").style.visibility = "visible"
                break;
            case 7:
                document.getElementById("a1").style.visibility = "visible"
                break;
            case 8:
                document.getElementById("a1").style.visibility = "visible"
                break;
            case 9:
                document.getElementById("a1").style.visibility = "visible"
                break;
            case 10:
                document.getElementById("a1").style.visibility = "visible"
                break;
            default:
                document.getElementById("galg").style.visibility = "hidden"
                break;
        }
}


  



