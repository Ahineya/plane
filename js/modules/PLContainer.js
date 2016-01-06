"use strict";

function PLContainer() {

    let screen;

    function setScreen(newScreen) {
        screen = document.querySelector(newScreen);
    }

    function show(items) {
        window.modules.PLState.setState(States.CONTAINER);

        const wrapper = document.createElement('div');
        wrapper.classList.add('container-wrapper');
        wrapper.style.left = 1366/2 - 200/2 + 'px';
        wrapper.style.top = 768/2 -200/2 +'px';

        wrapper.innerHTML = items.join(', ');

        var closeBtn = document.createElement('div');
        closeBtn.innerText= 'X';
        closeBtn.style.position = 'absolute';
        closeBtn.style.top = '0';
        closeBtn.style.right = '0';
        wrapper.appendChild(closeBtn);

        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            wrapper.parentNode.removeChild(wrapper);
            window.modules.PLState.setState(States.MAP);
        });

        screen.appendChild(wrapper);

    }

    console.info('PLContainer loaded');

    return {
        setScreen,
        show
    }
}

window.modules = window.modules || {};
window.modules.PLContainer = new PLContainer();