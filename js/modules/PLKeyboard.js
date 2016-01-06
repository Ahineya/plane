"use strict";

function PLKeyboard() {

    const state = window.modules.PLState;

    const keys = {
        left:   37,
        right:  39,
        up:     38,
        down:   40
    };

    const listeners = [];

    document.addEventListener('keydown', (e) => {
        processKeyPress(e);
    });

    function addEventListener(key, state, callback) {
        listeners.push({
            key,
            state,
            callback
        });
    }

    function processKeyPress(e) {
        const key = _.findKey(keys, (item) => {
            return item === e.keyCode;
        });

        if (key) {
            const currentState = state.getState();
            const listener = listeners.find((listener) => listener.key === key && listener.state === currentState);
            listener && listener.callback();
        }
    }

    console.info('PLKeyboard loaded');

    return {
        addEventListener
    }
}

window.modules = window.modules || {};
window.modules.PLKeyboard = new PLKeyboard();