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
	 $('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        600:{
	            items:3,
	            nav:false
	        },
	        1000:{
	            items:5,
	            nav:true
	        }
	    }
	});
	 var arc =function (t)
    {
        return {
            x: 500.0 + 300.0 * Math.cos(2.0 * Math.PI * t - 0.5 * Math.PI),
            y: 400.0 + 300.0 * Math.sin(2.0 * Math.PI * t - 0.5 * Math.PI)
        };
    };
 
    $('#text1').curvedText({
        curve:    arc,
        domain:   [-0.2, 0.2],
        viewport: { x: 0.0, y: 0.0, width: 1000.0, height: 400.0 }
    });
});
new WOW().init();
