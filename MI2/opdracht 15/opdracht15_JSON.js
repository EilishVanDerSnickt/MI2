"use strict"

$(document).ready(function () {

let verwerkJSON = (response) => {
    var antwoord = "", output, i, j, adres;
    
    for (i = 0; i < response.length; i += 1)
    {
        j = response[i].id;
        output = response[i];
        adres = `http://www.songsterr.com/a/wa/song?id= ${j}`;
        antwoord += `<p><a href= ${adres} target="_blank"> ${response[i].id} . ${response[i].artist.nameWithoutThePrefix}  - ${response[i].title} </a><p>`;
        console.log(response[i].title);
            
    }
    $("#output").html(antwoord);
}

$("#zoek").on("click", function () {		
    if (document.getElementById("artiest").value != "") {
            $(function () {
    $.ajax
    ({
        type : "GET",
        url : "http://www.songsterr.com/a/ra/songs.json?pattern=" + $("#artiest").val(),
        dataType : 'json',
        success : verwerkJSON
        })
    })
        
}
});
});
