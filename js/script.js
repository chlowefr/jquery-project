$(window).on("scroll",function(){
    let positionY = $(this).scrollTop();
    console.log(positionY);

    //Afficher arrtotop une fois en bas de la page.
    if(positionY > 1500){
        $("#scrolltotop").css("opacity", 1);
    }
    else if(positionY < 1500){
        $("#scrolltotop").css("opacity", 0);
    }

    //Lorsque positionY est supérieure à 100
    else if(positionY > 100){
        //réduire height de la nav bar
        $("nav").css("height", "40px")
        //
        
    }

})