$(document).ready(function(){
	$(window).scroll(function(){
		if($(window).scrollTop() > 100){
			$('header').addClass('bg-secondary');
			$('#scroll_top').fadeIn();
		}else{
			$('header').removeClass('bg-secondary');
			$('#scroll_top').fadeOut();
		}
	})
	$('.counter').counterUp({
	    delay: 10,
	    time: 1000
	});

	// init Isotope
	var $grid = $('.hello').isotope({
	  // options
	});
	// filter items on button click
	$('.button_item').on( 'click', 'li', function() {
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});
	$('.slider').slick({
	  centerMode: true,
	  centerPadding: '50px',
	  slidesToShow: 3,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 1
	      }
	    }
	  ]
	});
	$('.demo1').percentcircle({
		animate :true,
		diameter : 100,
		guage: 2,
		coverBg:'#fff',
		bgColor:'#efefef',
		fillColor:'#5c93c8',
		percentSize:'15px',
		percentWeight:'normal'
	});
	$('.demo2').percentcircle({
		animate :true,
		diameter : 100,
		guage: 2,
		coverBg:'#fff',
		bgColor:'#efefef',
		fillColor:'#ff00d4',
		percentSize:'15px',
		percentWeight:'normal'
	});
	$('.demo3').percentcircle({
		animate :true,
		diameter : 100,
		guage: 2,
		coverBg:'#fff',
		bgColor:'#efefef',
		fillColor:'#00ffc4',
		percentSize:'15px',
		percentWeight:'normal'
	});
});
