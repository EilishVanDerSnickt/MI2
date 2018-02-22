"use strict";

var i;
var j;

for (i = 0; i < 10; i++)
    {
        if (i % 2 === 0)
            {
                document.getElementById("spelbord").innerHTML += "<div class = 'zwart'></div>";
            }
        else
            {
                document.getElementById("spelbord").innerHTML += "<div class = 'wit'></div>";
            }
       
        for (j  = 0; j < 10; j++)
            {
                if (j % 2 === 0)
                {
                    document.getElementById("spelbord").innerHTML += "<div class = 'zwart'></div>";
                }
                else
                {
                    document.getElementById("spelbord").innerHTML += "<div class = 'wit'></div>";
                }
                
            }
        document.getElementById("spelbord").innerHTML += "<br>";
    }