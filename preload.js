const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld(
	"api", 
	{
		canvas: () => { 
			const thing = require('two.js')
			return thing
		},
		ping: () => ipcRenderer.invoke('ping')
	}
)
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }
	// use this file to load dependencies
	// look at webpack && electron-forge for quick start stuff

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency])
  }
}) // copied from electron docs
