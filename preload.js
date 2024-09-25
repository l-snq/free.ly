const { contextBridge, ipcRenderer } = require('electron');
const Two = require('two.js');

const TwoRect = () => {
	let _two = new Two({
		type: Two.types.svg,
		fullscreen: true,

	})
	//let Rect = new _two.makeRectangle(_two.width / 2, _two.height /2, 40, 40);
}

contextBridge.exposeInMainWorld(
	"api", 
	{
		canvas: () => { 
			const thing = require('two.js')
			return thing
		},
		ping: () => ipcRenderer.postMessage('tworect', TwoRect())
	}
)
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }
	// use this file to load dependencies
	// look at webpack && electron-forge for quick start stuff
	// still need to use preload to safely store certain parts of the api i want to use
	// for example Two.Circ() instead of exporting all of Two.js

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency])
  }
}) // copied from electron docs
