document.readyState !== 'loading' ? galleryStart() : document.addEventListener('DOMContentLoaded', () => galleryStart());

function galleryStart() {
	let gallery = document.getElementsByClassName('gallery');
	if (gallery.length > 0) {
		showSlide();
	}
}
let slideIndex = 0;

function showSlide() {
	const slides = document.querySelectorAll('.gallery-slide');
	console.log(slides.length);

	//poner active al primer slide
	slides[0].classList.remove('inactive');

	let moveInTimeout = setTimeout(() => {
		if (slides.length > 1) {
			slides[1].classList.remove('inactive');
			slides[1].classList.add('active');
			slides[0].classList.add('move-out');
		}
	}, 2000);

	setTimeout(() => {
		clearTimeout(moveInTimeout);
	}, 3000);
}

function changeSlide(n) {
	console.log(n);
	// clearTimeout(autoSlideTimeout);
	// showSlide((slideIndex += n));
}