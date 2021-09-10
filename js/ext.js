window.addEventListener("load", () => {
	if (Math.random() > 0.5) {
		return;
	}
	const extensions = [
		// JAVA
		"jar", "java", "class",
		// C++
		"hpp", "cpp",
		// Web
		"html", "css", "php", "xml",
		// Node(JS)
		"js", "ts", "jsx", "tsx",
		// Data
		"dat", "xdb", "tar", "zip", "json", "cfg",
		// Shell
		"exe", "ps1", "bat", "sh", "py",
		// Easter
		"xcf", "md", "nbt",
	];
	document.querySelector("td.suffix").innerHTML = `.${extensions[Math.floor(Math.random() * Math.floor(extensions.length))]}`;
});