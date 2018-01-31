/*global $, alert, console */

$(function () {
	'use strict';
	// adjust header height
	var myHeader = $('.header'), mySlider = $('.bxslider');
	myHeader.height($(window).height());
	$(window).resize(function () {
		myHeader.height($(window).height());
		// adjust bxslider list item center
		mySlider.each(function () {
			$(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
		});
	});
	
	// links add active class
	$('.links li a').click(function () {
		$(this).parent().addClass('active').siblings().removeClass('active');
	});
	// adjust bxslider list item center
	mySlider.each(function () {
		$(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
	});
	// Trigger The Bx Slider
    mySlider.bxSlider({
		pager: false
	});
	// Smooth Scroll To div
	$('.links li a').click(function () {
		$('html, body').animate({
			scrollTop: $('#' + $(this).data('value')).offset().top
		}, 1000);
	});
	
	// Our auto slider Code
	
	(function autoSlider() {
		$('.slider .active').each(function () {
			if (!$(this).is(':last-child')) {
				$(this).delay(3000).fadeOut(1000, function () {
					$(this).removeClass('active').next().addClass('active').fadeIn();
					autoSlider();
				});
			} else {
				$(this).delay(3000).fadeOut(1000, function () {
					$(this).removeClass('active');
					$('.slider div').eq(0).addClass('active').fadeIn();
					autoSlider();
				});
			}
		});
	}());
	
	// trigger mixitUp 
	$('#container').mixItUp();
	
	// Adjust Shuffle links
	
	$('.shuffle li').click(function () {
		$(this).addClass('selected').siblings().removeClass('selected');
	});
	
	// trigger nicescroll 
	$('html').niceScroll({
		cursorcolor: '#1abc9c',
		cursorwidth: '10px',
		cursorborder: 'none'
	});
});
