window.addEventListener("load", () => {

	document.querySelectorAll("div.menu-container > ul > li > div").forEach(element => {
		element.innerHTML += "&nbsp;<i class='fas fa-chevron-right'></i>";
		element.setAttribute("onclick", `openLink('${element.getAttribute("data-link")}')`);
	});

	switch (location.hash) {
		case "#about":
			openPage("left", false);
			break;
		case "#packages":
			openPage("right", false);
			break;
	}

	document.body.addEventListener("click", event => {
		const button = document.querySelector("div.menu-button");
		const container = document.querySelector("div.menu-container");

		if (button.contains(event.target)) {
			document.querySelector("div.menu-container").classList.toggle("show");
			event.preventDefault();
		} else if (!container.contains(event.target)) {
			document.querySelector("div.menu-container").classList.remove("show");
			event.preventDefault();
		}
	}, false);
});

const getOpenPage = () => {
	const find = name => document.querySelector(`div.wrapper.${name}-open`);
	const result = ["left", "right", "down"].filter(name => find(name))[0];
	return result || "center";
};

const openPage = (page, assign = true) => {
	document.querySelector("div.menu-container").classList.remove("show");
	const wrappers = document.querySelectorAll("div.wrapper");
	const openPage = getOpenPage();
	if (openPage !== "center") {
		wrappers.forEach(root => root.classList.toggle(`${openPage}-open`));
	}
	if (page !== "center") {
		wrappers.forEach(root => root.classList.toggle(`${page}-open`));
	}
	if (assign) {
		switch(page) {
			case "center":
				location.replace("#");
				break;
			case "left":
				location.replace("#about");
				break;
			case "right":
				location.replace("#packages");
				break;
		}
	}
};

const openMenu = () => true;

const openLink = link => location.assign(link);
