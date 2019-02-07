$(window).on("scroll",function(){
    let positionY = $(this).scrollTop();
    console.log(positionY);

    //Afficher arrtotop une fois en bas de la page.
    if(positionY > 1700){
        $("#scrolltotop").css("opacity", 1);
    }
    else if(positionY < 1700){
        $("#scrolltotop").css("opacity", 0);
    }

})