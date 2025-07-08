const svg = document.getElementById("blob");

console.log(document.body.style.getProperty("--size"));

const colors = ["#0077ff", "#00aaff", "#3399ff", "#66ccff"];
const numBlobs = 8;

function createBlob(i) {
	const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
	const blob = document.createElementNS(
		"http://www.w3.org/2000/svg",
		"circle"
	);

	const radius = 100 + Math.random() * 40;
	const x = Math.random() * 800;
	const y = Math.random() * 600;

	blob.setAttribute("r", radius);
	blob.setAttribute("fill", colors[i % colors.length]);
	blob.setAttribute("opacity", 0.4);

	// group.setAttribute("transform", `translate(${x}, ${y})`);
	group.appendChild(blob);
	svg.appendChild(group);

	animateBlob(group, x, y);
}

function animateBlob(group, startX, startY) {
	const randomOffset = () => (Math.random() - 0.5) * 100;

	const animate = () => {
		const x = startX + randomOffset();
		const y = startY + randomOffset();

		group.animate(
			[
				{ transform: `translate(${startX}px, ${startY}px)` },
				{ transform: `translate(${x}px, ${y}px)` },
			],
			{
				duration: 10000 + Math.random() * 5000,
				fill: "forwards",
				easing: "ease-in-out",
			}
		);

		// Schedule next movement from new position
		setTimeout(() => animateBlob(group, x, y), 12000);
	};

	animate();
}

// Create blobs
for (let i = 0; i < numBlobs; i++) {
	createBlob(i);
}
