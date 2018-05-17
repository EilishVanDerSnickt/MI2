$(document).ready(function(){
    $(".loginvenster").click(function(){
        $(".overlap").fadeIn('slow');
        $(".login").fadeIn('slow');
    });
    
    $(".login").click(function(){
       if($(event.target).is("#registreer")){
        $(".overlap").fadeOut('slow');
        $(".login").fadeOut('slow');
    }
   });
    
    $('.overlap').click(function(){
        $(".overlap").fadeOut('slow');
        $(".login").fadeOut('slow');
    });
});