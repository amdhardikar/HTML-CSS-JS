const letterSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.getElementById("word").onmouseover = (e) => {
	let iterations = -2;

	const interval = setInterval(() => {
		e.target.innerText = e.target.innerText
			.split("")
			.map((letter, index) => {
				if (index < iterations) return e.target.dataset.value[index];

				return letterSet[Math.floor(Math.random() * letterSet.length)];
			})
			.join("");

		if (iterations >= e.target.dataset.value.length) clearInterval(interval);

		iterations += 1 / 3;
	}, 20);
};

e.target.dataset.value = e.target.innerText;
