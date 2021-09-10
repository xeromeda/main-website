const trySubmitForm = () => {
	const data = {};

	document.querySelectorAll("#contact_form input").forEach(element => data[element.name] = element.value);
	document.querySelectorAll("#contact_form textarea").forEach(element => data[element.name] = element.value);

	fetch("contact", {
		method: "POST",
		body: JSON.stringify(data)
	}).then(res => {
		alert("Your message has been received");
		console.log(res);
	}).catch(error => {
		alert("Your message couldn't be sent. Please try again, or use the e-mail option in the menu.");
		console.error(error);
	});
}