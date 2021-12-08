
$(function(){
    $(window).scroll(function(){
        var ws = $(this).scrollTop();
        if(ws>300){
            $('#logo').css('opacity', '0')
        }
    })
})
