head.ready(function() {

	console.log("These aren't the droids you're looking for!");

	smoothScroll.init();

	// Cache the Window object
	$window = $(window);

	$(' section[data-type="background"] ').each(function(){
		var $bgobj = $(this); // assigning the object

		$(window).scroll(function() {
			var yPos = -($window.scrollTop() / $bgobj.data('speed'));

			// Put together our final background position
			var coords = '50% '+ yPos + 'px';

			// Move the background
			$bgobj.css({ backgroundPosition: coords });
		});
	});

	$(window).scroll(function() {
		if( $(window).scrollTop() > 60 ) {
			$( '.header' ).addClass('is-fixed');
		}
		if( $(window).scrollTop() < 60 ) {
			$( '.header' ).removeClass('is-fixed');
		}
	});

});