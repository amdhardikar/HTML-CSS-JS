const svg = document.getElementById("blob");
const blobWidth = 100;
const numBlobs = 10;
const offsetRange = 150;
const blobColors = [];
const blobBasePositions = [];

const rootStyles = getComputedStyle(document.documentElement);

for (const prop of rootStyles) {
	if (prop.startsWith("--blob-")) {
		blobColors.push(rootStyles.getPropertyValue(prop).trim());
	}
}

function createBlob(i) {
	const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
	const blob = document.createElementNS(
		"http://www.w3.org/2000/svg",
		"circle"
	);

	const radius = blobWidth + Math.random() * 60;
	const x = Math.random() * 800;
	const y = Math.random() * 600;

	blob.setAttribute("r", radius);
	blob.setAttribute("fill", blobColors[i % blobColors.length]);
	blob.setAttribute("opacity", 0.4);

	group.setAttribute("transform", `translate(${x}, ${y})`);
	group.appendChild(blob);
	svg.appendChild(group);

	blobBasePositions.push({ group, x, y });
	animateBlob(group, x, y);
}

function animateBlob(group, startX, startY) {
	const randomOffset = () => (Math.random() - 0.5) * offsetRange;

	const animate = () => {
		const x = startX + randomOffset();
		const y = startY + randomOffset();

		group.animate(
			[
				{ transform: `translate(${startX}px, ${startY}px)` },
				{ transform: `translate(${x}px, ${y}px)` },
				{ transform: `translate(${startX}px, ${startY}px)` },
			],
			{
				duration: 10000 + Math.random() * 10,
				fill: "both",
				easing: "ease-in-out",
			}
		);

		setTimeout(() => animateBlob(group, startX, startY), 10000);
	};

	animate();
}

// Create blobs
for (let i = 0; i < numBlobs; i++) {
	createBlob(i);
}
