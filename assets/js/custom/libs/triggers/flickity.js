$(window).on('load', function() {
	$('.flickity--slider').flickity({
		cellAlign: 'left',
		contain: true,
		freeScroll: false,
		wrapAround: true,
		pageDots: true,
		autoPlay: true,
		prevNextButtons: true,
        arrowShape: { 
			x0: 15,
			x1: 65, y1: 50,
			x2: 65, y2: 40,
			x3: 25
		}
	});
    
    $('.flickity--fullwidth').flickity({
		cellAlign: 'left',
		contain: true,
		freeScroll: false,
		wrapAround: true,
		pageDots: true,
		autoPlay: true,
		prevNextButtons: false,
        arrowShape: { 
			x0: 15,
			x1: 65, y1: 50,
			x2: 65, y2: 40,
			x3: 25
		}
	});
});