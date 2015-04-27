$(document).ready(function() {


    $('.jumbotron h1, .jumbotron p, .jumbotron .slider').addClass('in');
  	

  	//promo component
  	$('#blogPromo .blogPromoWrapper').animate({
  		bottom: "+=200"
  	}, 1000, function() {

  	});
  	$('.closePromo').on('click' , function() {
  		$('.blogPromoWrapper').animate({
	  		bottom: "-=200"
	  	}, 1000, function() {

	  	});
  	})
});