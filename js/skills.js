$(document).ready(function(){
	if($('h2.skills').hasClass('in')) {
		$('.skillbar').each(function(){
			$(this).find('.skillbar-bar').animate({
				width:$(this).attr('data-percent')
			},6000);
		});
	}
});