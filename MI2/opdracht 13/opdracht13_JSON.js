"use strict";
/* jshint esnext: true */

function verwerkJSON(response) {
    var antwoord = "", i, adres;
    
    for (i = 0; i < response.results.length; i += 1)    
    {      
        adres = response.results[i];
        
        antwoord + `<tr><td> ${adres.address_components[0].long_name}<\/td>`;
        antwoord += `<td> ${adres.address_components[1].long_name} <\/td>`;
        antwoord += `<td> ${adres.address_components[2].long_name} <\/td>`;
        antwoord += `<td> ${adres.adderess_components[3].long_name} <\/td>`;
        antwoord += `<td> ${adres.geometry.location.lat} <\/td>`;
        antwoord += `<td> ${adres.geometry.location.lng} <\/td><\/tr>`;
    }
    
    $("#adres tbody").html(antwoord);
}
            
$(function () {			
    $.ajax
    ({
        type : "GET",
        url : "http://maps.googleapis.com/maps/api/geocode/json?address=Bosstraat%20182,Lede,Belgie",
        dataType : 'json',
        success : verwerkJSON
    });
});




			
	