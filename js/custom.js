$(document).ready(function(){

    //navbar

    var nav = $('nav');

    $(window).on('scroll', function(){
        var scrolling = $(this).scrollTop();

        if(scrolling>100){
            nav.addClass('navfix');
        }
        else{
            nav.removeClass('navfix');
        }
    });

    //wow js

    new WOW().init();

    //type js

    var typed = new Typed('.element', {
        strings: ["Breakfast", "Lunch", "Dinner"],
        typeSpeed: 70,
        loop : true,
      });

});