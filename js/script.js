$(window).on("scroll", function () {
    let positionY = $(this).scrollTop();
    console.log(positionY);

    //Afficher arrtotop une fois en bas de la page.
    if (positionY > 1500) {
        $("#scrolltotop").css("opacity", 1);
    }
    else if (positionY < 1500) {
        $("#scrolltotop").css("opacity", 0);
    }

})
$(window).on("scroll", function () {
    let positionNav = $(this).scrollTop();
    console.log(positionNav);

    //Lorsque positionY est supérieure à 100
    if (positionNav > 100) {
        //réduire height de la nav bar
        $(".nav-bar").css("height", "50px")
        $(".nav-bar").css("opacity", 0.75);
    }
    else if (positionNav < 100) {
        //réduire height de la nav bar
        $(".nav-bar").css("height", "75px");
        $(".nav-bar").css("opacity", 1);
    }

})