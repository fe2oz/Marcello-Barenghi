

function simpleParallax() {

    var scrolled = $(window).scrollTop() + 1;
    
    $('.scroll').css('background-position', '0' + -(scrolled * 0.3) + 'px');
}

$(window).scroll(function (e) {
    simpleParallax();
});

$(document).ready(function(){       

    var scroll_pos = 0;

    $(document).scroll(function() { 

        scroll_pos = $(this).horizontalSlide();

        if(scroll_pos > 350) {

            $("body").css('background-color', 'blue');

        } else {

            $("body").css('background-color', 'red');

        }

    });

});

$(function(){
    $("#slider").on('mousewheel',function(e){
        var wheelDelta = e.originalEvent.wheelDelta;
    
        if(wheelDelta > 0){
            console.log("up");
            $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
        }
        else{
            console.log("down");
            $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
            }
        });
});