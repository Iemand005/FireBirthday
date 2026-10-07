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

window.addEventListener('load', () => {
	setTimeout(startConfetti, 1000);
});

function toggleConfetti() {
	if (confettiInterval) {
		clearInterval(confettiInterval);
		confettiInterval = null;
	} else {
		startConfetti();
	}
}