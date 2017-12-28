'use strict';
(function () {
	$(document).ready(function() {
		project.mobileNav();
		project.slidersInit();
		project.smoothScroll();
		project.filters();
	});

	$(window).resize(function() {
		project.smoothScroll();
	});

	var project = {
		mobileNav: function() {
			 $('.nav__menu').click(function() {
				 $('.nav__list').toggleClass('nav__list--visible');
			});
		},
		slidersInit: function() {
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
				responsive: [
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 576,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					}
				]
			});

			$('.notebook-slider').slick({
				infinite: true,
				asNavFor: '.notebook__content',
				prevArrow: $('.notebook-arrow__prev'),
				nextArrow: $('.notebook-arrow__next'),
			});

			$('.notebook__content').slick({
				infinite: true,
				asNavFor: '.notebook-slider',
				prevArrow: $('.notebook-arrow__prev'),
				nextArrow: $('.notebook-arrow__next'),
			});
		},

		smoothScroll: function() {
			var root = $('html, body');
			var offset = 100;
			var menu = $('.nav__list');
			if($( window ).width()< 768) {
				offset = -75;
			}
			$('.nav__element a').click(function() {
				root.animate({
					scrollTop: $( $.attr(this, 'href') ).offset().top + offset
				}, 700);
				menu.removeClass('nav__list--visible')
				return false;
			});
		},

		filters: function(){
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
		}
	};
})();
