const { ipcRenderer } = require('electron');

ipcRenderer.on('tworect', (e, msg) => {
	console.log(e);
	console.log(msg);
})
const info = document.getElementById('id');
const func = async () => {
	const response = await window.api.ping();
	const response2 = await window.api.TwoReact();
	console.log(response2);
}

func();

const something = require('two.js');
console.log(something);
