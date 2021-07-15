$(document).ready(function(){
	$(window).scroll(function(){
		if($(window).scrollTop() > 100){
			$('header').addClass('bg-secondary');
			$('#scroll_top').fadeIn();
		}else{
			$('header').removeClass('bg-secondary');
			$('#scroll_top').fadeOut();
		}
	});
	$('.parallax-window').parallax({imageSrc: '/path/to/image.jpg'});
	$('.js-conveyor-example').jConveyorTicker();

});