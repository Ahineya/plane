"use strict";

function App() {
	let modules = null;
	function init() {
		modules = window.modules;

		if (modules.PLScreen.init('.main')) {
            modules.PLContainer.setScreen('.main');
		}
	}

	return {
		init
	}
}

document.addEventListener('DOMContentLoaded', () => {
	const app = new App();
	app.init();
});