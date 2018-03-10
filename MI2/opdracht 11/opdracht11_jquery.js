$(document).ready(function(){
    $("div").hide();
    
    $("#knop").click(function(){
        $("div").show()
            .animate({left : '800px'})
            .animate({top : '800px'})
            .animate({left : '-=800px'})
            .animate({top : '-=800px'});
     });
    $("#hide").click(function(){
        $("div").hide();
     }); 
});

 