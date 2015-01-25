$(document).ready(function() {
	$('#resume .container .row h2.skills').waypoint(function(){
	   $('.progress').each(function(){
	        $(this).find('.progress-bar').animate({
	            width:$(this).attr('data-percent')
	        },1000);
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
