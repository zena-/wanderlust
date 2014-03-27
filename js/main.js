$(function(){

	$('img').hover(function(){
	 $(this).stop().fadeTo(400,1);
	}, function() {
		$(this).stop().fadeTo(400,0.88);
	});

	$('.header').mouseenter(function(){
		 $('nav').animate({fontSize:"2em"}, 800);
			 });
	$('.header').mouseleave(function(){
		 $('nav').animate({fontSize:"1em"}, 800);
			 });
});
