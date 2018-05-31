$(function() {

	$('.hamburger').click(function() {
		$(this).toggleClass('is-active');
		$('.nav').toggleClass('show');
		$('body').toggleClass('nav-show');
	});
	$('.nav-list__item a').click(function() {
		$('.hamburger').removeClass('is-active');
	});

	$('.fancybox').fancybox({
		margin: 0,
		padding: 0
	});

	$('.main-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		fade: true,
		autoplay: true
	});

	var widthDots = $('.slick-dots').width();
	$('.slick-dots').css('margin-left', 'calc('+widthDots +' / 2)');

	$('.portfolio-item').matchHeight();

});
