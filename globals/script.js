$(document).ready(function(){
	$(window).scroll(function(){
		if (this.scrollY > 20 ){
			$('.navbar').addClass("sticky");
		}else{
			$('.navbar').removeClass("sticky");
		}
		if (this.scrollY > 500) {
			$('.scroll-up-btn').addClass("show");
		}else{
			$('.scroll-up-btn').removeClass("show");
		}
	});

	// Slide up script
	$('.scroll-up-btn').click(function(){
		$('html').animate({scrollTop:0});
	});

	//toggle menu/navbar script

	$('.menu-btn').click(function(){
		$('.navbar .menu').toggleClass("active");
		$('.menu-btn i').toggleClass("active");
	});

	// Typing annimation script

	var typed = new Typed(".typing", {
		strings : ["Web Developer", "Web Designer"],
		typeSpeed: 100,
		backSpeed: 50,
		loop: true
	});


	// owl-carousel script

	$('.carousel').owlCarousel({
		margin: 20,
		loop: true,
		autoplayTimeOut: 2000,
		autoplayHoverPause: true,
		responsive: {
			0:{
				item: 1,
				nav: false
			},
			600:{
				item: 2,
				nav: false
			},
			1000	:{
				item: 3,
				nav: false
			}
		}
	});
});