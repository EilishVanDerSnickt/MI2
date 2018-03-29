var randomWoordArray = ["programmeur", "computer", "javascript", "programmeertaal"];
var randomWoord = randomWoordArray[Math.floor(Math.random() * randomWoordArray.length)];

var s;
var count = 0;
var antwoordArray = [];
var galgArray = [];
var antwoord = document.getElementById("antwoordWoord").value;

 

function start()
{
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
    
    if (letter.length > 0 && letter.length < 2)
        {
            for (var i = 0; i < randomWoord.length; i++)
                {
                    if (randomWoord[i] === letter)
                        {
                            antwoordArray[i] = letter;
                        }
                    else 
                        {
                           Galg();
                        }
                }
            
            count++;           
            document.getElementById("counter").innerHTML = "Aantal fouten: " + count;
            document.getElementById("antwoord").innerHTML = antwoordArray.join(" ");
        }
    
    else
        {
            alert("Foute invoer je mag maar 1 letter ingeven.");
        }
    
    
    
    if (count > 10)
        {
            document.getElementById("stat").innerHTML = "Come on, you should have guessed it by now";
        }
    
}

function Woord()
{
    if (antwoord = randomWoord)
        {
            alert("Proficiat je bent gewonnen.");
        }
    else
        {
            alert("Foute invoer");
        }
}

function Galg()
{   
    if (count == 20)
        {
            alert("Je bent verloren!");
        }
}
  



