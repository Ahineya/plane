"use strict";
const fs = require('fs');

function PLState() {
    let state = States.MAP;

    PubSub.subscribe('playerTurnDone', () => {
        let state = States.WORLD;
        PubSub.publish('State changed', state);
        PubSub.publish('Timer tick');
    });

    PubSub.subscribe('Screen loaded', () => {
        const worldState = getWorldState();
        worldState.player = {
            position: [2,3]
        };
        PubSub.publish('Show screen', worldState);
    });

    const stateFromFile = fs.readFileSync('worlds/testworld.json', 'utf8');

    function getWorldState() {
        return Object.create(JSON.parse(stateFromFile));
    }

    function getState() {
        return state;
    }

    function setState(newState) {
        if (States[newState]) {
            state = newState;
        } else {
            console.error(`[PLState], Trying to set incorrect state: '${newState}'`);
        }
    }

    console.info('PLScreen loaded');

    return {
        setState,
        getState,
        getWorldState
    }
}

window.modules = window.modules || {};
window.modules.PLState = new PLState();