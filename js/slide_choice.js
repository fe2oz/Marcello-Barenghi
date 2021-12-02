

function simpleParallax() {
    var scrolled = $(window).scrollTop() + 1;
    $('.scroll').css('background-position', '0' + -(scrolled * 0.3) + 'px');
}

$(window).scroll(function (e) {
    simpleParallax();
});


$(function(){
    $("#slider").on('mousewheel',function(e){
        var wheelDelta = e.originalEvent.wheelDelta;
        var sL = e.originalEvent.scrollLeft;
    
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

$(function(){
    $('.show_text h1').css('transform', 'translateX(0%)');
    $('.show_text h2').css('transform', 'translateX(0%)');
    $('.show_text h3').css('transform', 'translateX(0%)');
    $('.show_text > div').css('transform', 'translateX(0%)');
})








  