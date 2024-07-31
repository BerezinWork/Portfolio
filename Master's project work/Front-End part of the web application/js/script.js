"use strict"

document.addEventListener('click', documentClick);

function documentClick(e) {
	const targetItem = e.target;
	if (targetItem.closest('.burger-menu')) {
		document.documentElement.classList.toggle('menu-open');
	}
}

//= Swiper ================================================//
new Swiper('.testimonials__items', {
	//! Optional parameters
		// Infinity Slides
	loop: true,
			//*loopedSlides: 2,
		// Direction
	//direction: 'horizontal',
		// Speed
	speed: 500,
		// Auto Height
	autoHeight: true,
		// Space between slides
	spaceBetween: 30,
		// Next slide on click
	//slideToClickedSlide: true,
		//Swipe Cursor
	grabCursor:true,
		// Number of slides on the screen
	slidesPerView: 3,
			// Disabling functionality
			//watchOverflow: true,
		// Number of swiped slides in one time
	slidesPerGroup: 1,
		// First slide on center
	//centeredSlides: false,
		// Started slide
	initialSlide: 0,
		// Free Mode
	//freeMode: true,

	// =========================================================

	//! Adaptive Break Points
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
	},

	//* Auto Play
	//autoplay: {
	//	delay: 2000,
	//	stopOnLastSlide: false,
	//	disableOnInteraction: false,
	//},

	// =========================================================

	//! If we need pagination
	pagination: {
		el: '.swiper-pagination',
		// Bullets
		type: 'bullets',
		clickable: true,
		// Dynamic Bullets
		dynamicBullets: true,
	},
});
// =========================================================