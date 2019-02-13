/* NAVBAR */

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




/* SLIDER */

var slideIndex = 0;

var slides = $(".slides");
console.log(slides);

// if(slideIndex > slides.length){
//     slideIndex = 0;
// }

showSlide(slideIndex);

function showSlide(numberSlide) {
    let idSlide = slides[numberSlide].id;
    $(".slides").removeClass("active");
    $(`#${idSlide}`).addClass("active");
}


$(".arrow").on("click", function () {
    console.log("On click");
    //Si prev
    if ($(this).hasClass("prev")) {
        slideIndex--;
        if(slideIndex < 0){
            slideIndex = slides.length - 1;
        }
        console.log(slideIndex);
        showSlide(slideIndex);
    }
    //Si next
    else if ($(this).hasClass("next")) {
        slideIndex++;
        if(slideIndex > slides.length - 1){
            slideIndex = 0;
        }
        showSlide(slideIndex);
    }
})



/* PORTFOLIO */

$(function() {
    var selectedClass = "";
    $(".fil-cat").click(function(){ 
    selectedClass = $(this).attr("data-rel"); 
 $("#portfolio").fadeTo(100, 0.1);
    $("#portfolio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
setTimeout(function() {
  $("."+selectedClass).fadeIn().addClass('scale-anm');
  $("#portfolio").fadeTo(300, 1);
}, 300); 
    
});
});