


$(function(){
    $('#test').mouseover(function(){
        $('#testimage').css("opacity", "1");
        $('#testimage').css("transform", "translateX(0%)");
    })

    $('#test').mouseleave(function(){
        $('#testimage').css("opacity", "0");
        $('#testimage').css("transform", "translateX(-25%)");
    })

    $('#latest_text').mouseover(function(){
        $('#latest').css("opacity", "1");
        $('#latest').css("transform", "translateX(0%)");
    })

    $('#latest_text').mouseleave(function(){
        $('#latest').css("opacity", "0");
        $('#latest').css("transform", "translateX(-25%)");
    })
});
