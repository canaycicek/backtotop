$(function () {
    $(".backtotop").hide()
    $(window).scroll(function () { 
        if($(window).scrollTop() > 100){
            $(".backtotop").fadeIn()
        }else{
            $(".backtotop").fadeOut()
        }
    });
    $(".backtotop").click(function () { 
        $("html").animate({scrollTop:0}, 1000);
        return false
    });
});