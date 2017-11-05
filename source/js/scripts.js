'use strict';
$(document).ready(function() {
	$('.hero-slider').slick({
		prevArrow: $('.hero-arrow__prev'),
		nextArrow: $('.hero-arrow__next'),
	});

	$('.clients-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: $('.arrow__prev'),
		nextArrow: $('.arrow__next'),
	});

	$('.notebook-slider').slick({
		infinite: true,
		asNavFor: '.notebook__insert',
		prevArrow: $('.notebook-arrow__prev'),
		nextArrow: $('.notebook-arrow__next'),
	});

	$('.notebook__insert').slick({
		infinite: true,
		asNavFor: '.notebook-slider',
		prevArrow: $('.notebook-arrow__prev'),
		nextArrow: $('.notebook-arrow__next'),
	});

	var root = $('html, body');
	$('.nav__element a').click(function() {
		root.animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top + 100
		}, 700);
		return false;
	});


	$(".works__element").click(function(e){
		e.preventDefault();
		// add active class on nav button
		$(".works__element").removeClass('works__active');
		$(this).addClass('works__active');
		//filter items
		var category = $(this).attr("data-category");
		if(category == 'all') {
			$(".img-works").show();
		} else{
			$(".img-works").hide();
			$("[data-category='" + category + "']").show();
		};
	});
});
