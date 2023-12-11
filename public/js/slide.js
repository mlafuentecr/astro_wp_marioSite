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

function showSlide() {
	slides[currentSlide].classList.remove('inactive');
}

function nextSlide() {
	console.log(currentSlide, ' <> ', totalSlides);
	currentSlide = currentSlide != totalSlides && currentSlide + 1;
	currentSlide === totalSlides && resetSlides(currentSlide);

	console.log(currentSlide, ' <> ', totalSlides);
	prevSlideNumber = currentSlide - 1;
	slides[prevSlideNumber].classList.add(`inactive`);
	slides[currentSlide].classList.remove(`inactive`);
	slides[prevSlideNumber].style.transform = ``;
	slides[currentSlide].style.transform = `translateX(${0}%)`;

	//
	// currentSlide - 1 >= totalSlides && resetSlides(); // Fix the comparison operator
	// console.log('reset1', currentSlide, ' prevSlideNumber', prevSlideNumber);

	// if (prevSlideNumber !== null) {
	// 	slides[prevSlideNumber].classList.add(`inactive`);
	// 	slides[prevSlideNumber].classList.remove(`slide-${prevSlideNumber}`);
	// }

	// showSlide();
	// prevSlideNumber = currentSlide === 0 ? null : currentSlide - 1;
}

function prevSlide() {
	currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
	prevSlideNumber = currentSlide + 1;
	slides[prevSlideNumber].classList.remove('inactive');
	showSlide();
}

// Automatic slide change every 3 seconds
setInterval(nextSlide, 5000); // Changed interval to 3000 milliseconds (3 seconds)
