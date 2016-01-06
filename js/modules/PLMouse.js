"use strict";

function PLMouse() {

    const state = window.modules.PLState;

    const listeners = [];

    document.addEventListener('click', (e) => {
        processClick(e);
    });

    function addEventListener(element, state, callback) {
        listeners.push({
            element,
            state,
            callback
        });
    }

    function processClick(e) {
        if (e.target.classList.contains('clickable') || e.target.parentNode.classList.contains('clickable')) {
            const currentState = state.getState();
            const listener = listeners.find((listener) => listener.state === currentState && listener.element.idx === e.target.idx);
            listener && listener.callback(e.target);
        }
    }

    console.info('PLMouse loaded');

    return {
        addEventListener
    }
}

window.modules = window.modules || {};
window.modules.PLMouse = new PLMouse();