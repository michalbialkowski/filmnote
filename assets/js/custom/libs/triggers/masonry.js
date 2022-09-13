function runMasonry() {
    $('.masonry').masonry({
		itemSelector: '.brick',
        percentPosition: true
	})
}

$(window).on('load', function() {
	runMasonry()
});

let accordions = document.getElementsByClassName('accordion')

for (var i=0; i < accordions.length; i++) {
    accordions[i].addEventListener('shown.bs.collapse', function() {
        runMasonry()
    });
    
    accordions[i].addEventListener('hidden.bs.collapse', function() {
        runMasonry()
    })
}

$(function() {
    $(".masonry").each(function() {
        $(this).find('.brick').each(function(i) {
            $(this).css({
                zIndex: $(this).parent().find('.brick').length - i
            });
        });
    });
});