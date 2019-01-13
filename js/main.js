//click-burger : pop-up menu + cross + no-scroll (body)
burger=$(".burger");
menu=$(".pop-menu");

burger.click(function() {
    $(burger).toggleClass("active");
    $(menu).toggleClass("active");
    $("body").toggleClass("active");
});

//click-menu-linken : close pop-up + close cross + close no-scroll (body)
menuItems=$(".pop-menu a");

menuItems.click(function(){
    $(burger).removeClass("active");
    $(menu).removeClass("active");
    $("body").removeClass("active");
});



//scroll sticky burger
let mainTop=$(".key-facts").offset().top;

$(window).scroll(function(){
    if ($(window).scrollTop() > mainTop-100){
        burger.addClass("sticky");
    } else{
        burger.removeClass("sticky");
    }
});

//smooth-scroll
$('.js-scrollTo').on('click', function() { // Au clic sur un élément
    var page = $(this).attr('href'); // Page cible
    var speed = 750; // Durée de l'animation (en ms)
    $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
    return false;
});

