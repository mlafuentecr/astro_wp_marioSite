document.readyState !== 'loading' ? animations() : document.addEventListener('DOMContentLoaded', () => animations());

function animations() {
	let animate = document.getElementsByClassName('animate');
	if (animate.length > 0) {
		animationStart();
	}
}
function animationStart() {
	const options = {
		root: null, // Use the viewport as the root
		rootMargin: '0px', // No margin
		threshold: 0.3, // 50% of the element is in the viewport
	};

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				// The div is in the viewport
				entry.target.classList.add(`showAnimate`);
				//console.log('Div is in the viewport', entry.target);
			} else {
				// The div is not in the viewport
				entry.target.classList.remove(`showAnimate`);
				//console.log('Div is not in the viewport', entry.target);
			}
		});
	}, options);

	const animationDivs = document.querySelectorAll('.animate');
	animationDivs.forEach(div => {
		observer.observe(div);
	});
}
