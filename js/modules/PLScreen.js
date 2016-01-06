"use strict";

function PLScreen() {
	let screen;
    let map = [];
    let wrapper;

    const player = window.modules.PLPlayer;
    const globalState = window.modules.PLState;
    const mouse = window.modules.PLMouse;
    const cellTypes = window.CellTypes;

	function init(selector) {
		screen = document.querySelector(selector);
		if (!screen) {
			console.error('screen is not loaded');
			return false;
		}
		screen.style.backgroundColor = 'grey';

		subscribeOnEvents();

		console.info('PLScreen loaded');
		PubSub.publish('Screen loaded');

        return true;
	}

	function subscribeOnEvents() {
		PubSub.subscribe('Show screen', (msg, state) => {
			console.log(state);
			screen.innerHTML = '';
			buildScreen(state);
		});

        PubSub.subscribe('State changed', (msg, newState) => {
            redrawScreen();
        });
	}

    function redrawScreen() {
        for (let i = 0, k = 0; i < map.length; i++) {
            for(let j = 0; j < map[0].length; j++, k++) {
                map[i][j].cellObject.redraw();
            }
        }

        showPlayerOnMap();
    }

    function buildScreen(state) {
		const width = state.width;
        const height = state.height;

        map = [];
        wrapper && wrapper.parentNode.removeChild(wrapper);
        wrapper = createScreenWrapper(state);

        if (state.player) {
            player.setCurrentPos(state.player.position);
        }

        for (let i = 0, k = 0; i < height; i++) {
            let arr = [];
            for(let j = 0; j < width; j++, k++) {
                const cellObject = createCell(state.screen[k]);
                cellObject.cell.idx = k;
                arr.push({
                    idx: k,
                    cell: state.screen[k],
                    cellObject
                });
                wrapper.appendChild(cellObject.cell);

            }
            map.push(arr);
        }

        showPlayerOnMap();

        console.log(map);
        screen.appendChild(wrapper);
        globalState.setState(window.States.MAP);
	}

    function showPlayerOnMap() {
        let playerPosition = player.getCurrentPos();
        const playerCell = map[playerPosition[1]][playerPosition[0]].cell;

        if (playerCell.type && cellTypes[playerCell.type] && cellTypes[playerCell.type].solid) {
            player.restorePosition();
        }

        playerPosition = player.getCurrentPos();
        map[playerPosition[1]][playerPosition[0]].cellObject.cell.innerHTML = `<img src="${player.getCurrentSprite()}"/>`;
    }

    function createScreenWrapper(state) {
        const wrapper = document.createElement('div');
        wrapper.style.width = 32 * state.width + 'px';
        wrapper.style.height = 32 * state.height + 'px';
        wrapper.style.backgroundColor = 'black';
        wrapper.classList.add('wrapper');
        return wrapper;
    }

    function createCell(cellData) {
        return window.modules.PLCellFactory.createCell(cellData);
    }

	return {
		init
	}
}

window.modules = window.modules || {};
window.modules.PLScreen = new PLScreen();