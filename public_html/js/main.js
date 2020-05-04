document.addEventListener('change', function(event) {
	let size = event.target;
	let item = event.target.value

	if(size.checked) {
		// Checkbox is checked..
		let text = document.createTextNode("I want to buy: " + item + " size: "+ size.name + " ");
		document.getElementById("message").appendChild(text).innerHTML;
	}
});