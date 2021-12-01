


$(function(){
    $('.two_section_box').click(function(){
        $('.two_section_box_modal').show();
        $('body').css("overflow", "hidden");
    })

    $('#cancle').click(function(){
        $('.two_section_box_modal').hide();
        $('body').css("overflow", "scroll");
    })
})