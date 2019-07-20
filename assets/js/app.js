var main = function() {
	$('.nav-icon').click(function() {
			console.log('icon clikced');
			$('.nav-icon').toggleClass('turn');
			$('header nav ul').toggleClass('close');
			$('header nav ul').toggleClass('open');
	});
	// We listen to the resize event
	// window.addEventListener('resize', () => {
	// 	// We execute the same script as before
	// 	let vh = window.innerHeight * 0.01;
	// 	document.documentElement.style.setProperty('--vh', `${vh}px`);
	// });
};

$(document).ready(function(){
	$('.fade').slick({
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear'
	  }); 
  });
		  

$(document).ready(main);