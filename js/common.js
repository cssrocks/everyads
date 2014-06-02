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

	// var getvalue = $(this).attr('rel');
	// $('.slider__menu a').on('click', function() {
	// 	var getvalue = $(this).attr("href");
	// 	alert(getvalue);
	// 	return false;
	// });
	$('.slider__menu a').each(function() {
		var el_id = $(this).attr("href");
		$(this).on('click', function() {
			$('.slider__slides').find('.slider__pic').fadeOut();
			$(el_id).fadeIn();
			return false;
		});
	});
		// $('.slider__slides img').each(function() {
		// 	var index = $(this).parent().index();
		// 	// console.log( $(this).parent().index() );
		// 	$(this).attr({"data-slidenum": index});
		// 	// return(index);
		// });


});