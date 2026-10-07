let confettiInterval;

const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ff8000', '#ff0080'];

function startConfetti() {
	if (confettiInterval) clearInterval(confettiInterval);
	fireSingleBurst();
	confettiInterval = setInterval(fireSingleBurst, 2000);
}

function fireSingleBurst() {
	const edgeOrigins = [
		{ x: 0, y: 0.5 },
		{ x: 1, y: 0.5 },
		{ x: 0.5, y: 0 },
		{ x: 0.5, y: 1 }
	];
	const origin = edgeOrigins[Math.floor(Math.random() * edgeOrigins.length)];
	
	confetti({
		particleCount: 30,
		startVelocity: 40,
		spread: 120,
		origin: origin,
		colors: colors,
		shapes: ['circle'],
		scalar: 1.2
	});
}

function fireConfettiAtPosition(x, y) {
	const origin = { x: x, y: y };
	
	confetti({
		particleCount: 50,
		startVelocity: 40,
		spread: 100,
		origin: origin,
		colors: colors,
		shapes: ['circle'],
		scalar: 1.2
	});
}

function handleClickOrTap(event) {
	const x = event.clientX / window.innerWidth;
	const y = event.clientY / window.innerHeight;
	fireConfettiAtPosition(x, y);
}

function handleTouch(event) {
	event.preventDefault();
	const touch = event.touches[0] || event.changedTouches[0];
	const x = touch.clientX / window.innerWidth;
	const y = touch.clientY / window.innerHeight;
	fireConfettiAtPosition(x, y);
}

window.addEventListener('load', () => {
	setTimeout(startConfetti, 1000);
});

window.addEventListener('click', handleClickOrTap);
window.addEventListener('touchstart', handleTouch);

// Block right-click and context menu
document.addEventListener('contextmenu', (e) => {
	e.preventDefault();
});

// Block selection
document.addEventListener('selectstart', (e) => {
	e.preventDefault();
});

// Block pinch zoom on iOS
document.addEventListener('touchmove', (e) => {
	if (e.touches.length > 1) {
		e.preventDefault();
	}
}, { passive: false });

// Block drag/drop
document.addEventListener('dragstart', (e) => {
	e.preventDefault();
});

function toggleConfetti() {
	if (confettiInterval) {
		clearInterval(confettiInterval);
		confettiInterval = null;
	} else {
		startConfetti();
	}
}