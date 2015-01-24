//refresh on dom load
$(document).ready(function(){
    $(window).scrollTop(0);
});


//jQuery to collapse the navbar on scroll
$( document ).ready(function() {
 
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }

        var picture = $('.picture');

        var windowScroll = $(window).scrollTop();
        var sub = 2100;
        var backgroundScroll = windowScroll - sub;
        if( picture.hasClass("in")) {
       
            picture.css("background-position","0px " + backgroundScroll + "px , center");
        }
        //var about = $('#about');
        //var portfolio = $('#services');
        //var resume = $('#contact');
        //var scrollPosition = $(document).scrollTop();


        /*if( scrollPosition > about.offset().top / 1.3){
            about.addClass('fadeIn');
        } 
        if ($(this).scrollTop() > portfolio.offset().top / 1.2){
            portfolio.addClass('fadeIn');
        }
        if($(this).scrollTop() > resume.offset().top / 1.1) {
            resume.addClass('fadeIn');
        }*/
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
            if ( elemh > h*0.3){
                return h*0.7;
            }else{
                return h - elemh;
            }
        }
    });
     $('#contact .container .row h2.skills').waypoint(function(){
       $('.skillbar').each(function(){
            $(this).find('.skillbar-bar').animate({
                width:$(this).attr('data-percent')
            },6000);
        });
    },{offset:function(){
            var h = $(window).height();
            var elemh = $(this).outerHeight();
            if ( elemh > h*0.3){
                return h*0.7;
            }else{
                return h - elemh;
            }
        }
    });

});

/*$(window).scroll(function() {

    collapse();
    create();
});

function collapse() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}
//jQuery for page scrolling feature - requires jQuery Easing plugin

function clicked() {
    var clicked = false;
    $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            waitAjax($anchor);
            event.preventDefault();
        });
    console.log(clicked);
}

function create() {
    
           $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $.ajax('app/webroot/ajax/'+ $anchor.text() +'.html', {
                    success: function(response) {
                        $($anchor.attr('href')).html(response).append();
                    }
            }).done(function(){
                $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
                }, 1500, 'easeInOutExpo');
            });
            event.preventDefault();
    });
   
}

function resize(element) {
    updateHeights(element);
}

function updateHeights(element) {
    
}

function waitAjax(anchor) {
    console.log(anchor);
    $.ajax('app/webroot/ajax/'+ anchor.text() +'.html', {
            success: function(response) {
                $(anchor.attr('href')).html(response).append();
            }
    }).done(function(){
        


        $('html, body').stop().animate({
        scrollTop: $($(anchor).attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
    });
}



function scrollAjax(anchor) {
    var intro = $('#intro');
    var introPosition = $('.intro').position();

    $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            console.log($anchor);
            $.ajax('app/webroot/ajax/'+ $anchor.text() +'.html', {
                    success: function(response) {
                        $($anchor.attr('href')).html(response).append();
                    }
            }).done(function(){
                $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
                }, 1500, 'easeInOutExpo');
            });
            event.preventDefault();
    });
    
    if( introPosition != undefined && $(this).scrollTop() > intro.offset().top){
        $.ajax('app/webroot/ajax/About.html', {
            success: function(response) {
                $('#about').html(response).append();
            }
        }).done(function(){
            intro.removeClass('intro');
        });
    }


    var about = $('#about');
    var aboutPosition = $('.about').position();
    if(aboutPosition != undefined &&  $(this).scrollTop() > about.offset().top){
        $.ajax('app/webroot/ajax/portfolio.html', {
            success: function(response) {
                $('#services').html(response).append();
            }
        }).done(function(){
            about.removeClass('about');
        });
    }
}*/
