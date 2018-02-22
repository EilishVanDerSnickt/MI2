"use strict";

var i;

for (i = 0; i < 100; i++)
    {
        if (i % 2 === 0)
            {
                document.getElementById("priemgetallen").innerHTML += i + " ";
                i++;
            }
        else
            {
                i++;
            }
        
    }
