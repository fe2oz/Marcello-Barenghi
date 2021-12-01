

function simpleParallax() {

    var scrolled = $(window).scrollTop() + 1;
    
    $('.scroll').css('background-position', '0' + -(scrolled * 0.3) + 'px');
}

$(window).scroll(function (e) {
    simpleParallax();
});