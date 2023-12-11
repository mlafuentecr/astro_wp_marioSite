let currentSlide = 0;
let prevSlideNumber;
let slides;
let totalSlides;

if (document.querySelectorAll('.gallery-slide')) {
	slides = document.querySelectorAll('.gallery-slide');
	totalSlides = document.querySelectorAll('.gallery-slide').length;
	slides[currentSlide].classList.remove('inactive');
}

function resetSlides(cSlide) {
	cSlide = cSlide - 1;
	currentSlide = 0;
	prevSlideNumber = 0;
	slides[cSlide].style.transform = ``;
	slides[cSlide].classList.add(`inactive`);
	slides[0].classList.remove(`inactive`);
}

function nextSlide() {
	currentSlide = currentSlide != totalSlides && currentSlide + 1;
	currentSlide === totalSlides && resetSlides(currentSlide);

	prevSlideNumber = currentSlide - 1;
	slides[prevSlideNumber].classList.add(`inactive`);
	slides[currentSlide].classList.remove(`inactive`);
	slides[prevSlideNumber].style.transform = ``;
	slides[currentSlide].style.transform = `translateX(${0}%)`;
}

function prevSlide() {
	console.log(currentSlide);
	slides[currentSlide].classList.add(`inactive`);
	currentSlide = currentSlide <= 0 ? totalSlides - 1 : currentSlide - 1;
	prevSlideNumber = currentSlide >= totalSlides - 1 ? 0 : currentSlide + 1;

	slides[prevSlideNumber].classList.add(`inactive`);
	slides[currentSlide].classList.remove(`inactive`);

	slides[prevSlideNumber].style.transform = ``;
	slides[currentSlide].style.transform = `translateX(${0}%)`;
}

// Automatic slide change every 3 seconds
setInterval(prevSlide, 18000); // Changed interval to 3000 milliseconds (3 seconds)
