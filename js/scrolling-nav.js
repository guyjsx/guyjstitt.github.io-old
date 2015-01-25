//refresh on dom load
$(document).ready(function(){
    $(window).scrollTop(0);
});


//jQuery to collapse the navbar on scroll
$( document ).ready(function() {

    var picture = $('.picture');

        var windowScroll = $(window).scrollTop();
        var sub = 2100;
        var backgroundScroll =(windowScroll - sub) / 2;
        if( picture.hasClass("in")) {
       
            picture.css("background-position","0px " + backgroundScroll + "px , center");
        }
 
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
            $(".navbar-fixed-top .logo-1").addClass("hide");
            $(".navbar-fixed-top .logo-2").addClass("show");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
            $(".navbar-fixed-top .logo-1").removeClass("hide");
            $(".navbar-fixed-top .logo-2").removeClass("show");
        }


        var picture = $('.picture');

        var windowScroll = $(window).scrollTop();
        var sub = 2100;
        var backgroundScroll =(windowScroll - sub) / 2.5;
        if( picture.hasClass("in")) {
       
            picture.css("background-position","0px " + backgroundScroll + "px , center");
        }
    });
});
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
$(document).ready(function() {
    $('.scrollimation').waypoint(function(){
        $(this).addClass('in');
    },{offset:function(){
            var h = $(window).height();
            var elemh = $(this).outerHeight();
            if ( elemh > h*0.5){
                return h*0.7;
            }else{
                return h - elemh;
            }
        }
    });
     $('.picture').waypoint(function(){
        $(this).addClass('in');
    },{offset:function(){
            var h = $(window).height();
            var elemh = $(this).outerHeight();
            if ( elemh > h * 0.3){
                return h;
            }else{
                return h - elemh;
            }
        }
    });
});
