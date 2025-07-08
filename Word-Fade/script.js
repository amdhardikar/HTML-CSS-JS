const scatter = (id) => {
	const ele = document.getElementById(id);
	const text = ele.innerText.split("");

	ele.innerText = "";
	text.forEach((letter) => {
		const span = document.createElement("span");
		span.className = "letter";
		span.innerText = letter;
		ele.appendChild(span);
	});
};

scatter("link");
