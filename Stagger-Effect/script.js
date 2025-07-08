const grid = document.querySelector(".grid");
const boxSize = 30;
const gap = 1;

let rows = Math.floor(window.innerHeight / (boxSize + gap));
let cols = Math.floor(window.innerWidth / (boxSize + gap));

grid.style.gridTemplateColumns = `repeat(${cols}, ${boxSize}px)`
grid.style.gridTemplateRows = `repeat(${rows}, ${boxSize}px)`

const centerRow = Math.floor(rows / 2);
const centerCol = Math.floor(cols / 2);

for (let row = 0; row < rows; row++) {
	for (let col = 0; col < cols; col++) {
		const box = document.createElement("div");
		box.classList.add("box");

		const distance = Math.hypot(row - centerRow, col - centerCol);
		const delay = distance * 100;

      box.style.animationDelay = `${delay}ms`;

      const isTop = row < centerRow;
		const isLeft = col < centerCol;

		let dx = isLeft ? -1 : 1;
		let dy = isTop ? -1 : 1;

		// Reduce magnitude of translation (tweakable)
		const strength = 0.2;
		box.style.setProperty("--dx", `${dx * strength}px`);
		box.style.setProperty("--dy", `${dy * strength}px`);

		grid.appendChild(box);
		// boxes.push({ element: box, row, col });
	}
}

// function AnimateWave() {
// 	boxes.forEach(({ element, row, col }) => {
// 		// setTimeout(() => {
// 		//    element.style.opacity = '1'
// 		//    element.style.transform = 'scale(1.2)'
// 		// }, delay)
// 		// setTimeout(() => {
// 		//    element.style.opacity = '0.2'
// 		//    element.style.transform = 'scale(0.1)'
// 		// }, delay + 900)
// 	});
// }

// setInterval(AnimateWave, 1800);

// AnimateWave();
