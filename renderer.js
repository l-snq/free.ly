const info = document.getElementById('id');
const func = async () => {
	const response = await window.api.ping();
	console.log(response);
}

func();

const something = require('two.js');
console.log(something);
