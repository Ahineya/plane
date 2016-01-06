"use strict";

function PLPlayer() {

    const keyboard = window.modules.PLKeyboard;

    const position = [0,0];
    const oldPosition = [0,0];

    let currentSprite = 'assets/img/sprites/player/down.png';

    function setCurrentPos(pos) {
        position[0] = pos[0];
        position[1] = pos[1];
    }

    function getCurrentPos() {
        return position;
    }

    function checkCurrentPos(pos) {
        return pos[0] == position[0] && pos[1] === position[1];
    }

    function savePosition() {
        oldPosition[0] = position[0];
        oldPosition[1] = position[1];
    }

    function restorePosition() {
        position[0] = oldPosition[0];
        position[1] = oldPosition[1];
    }

    function goLeft() {
        savePosition();
        position[0]--;
    }
    function goRight() {
        savePosition();
        position[0]++;
    }
    function goUp() {
        savePosition();
        position[1]--;
    }
    function goDown() {
        savePosition();
        position[1]++;
    }

    keyboard.addEventListener('left', States.MAP, () => {
        goLeft();
        currentSprite = 'assets/img/sprites/player/left.png';
        PubSub.publish('playerTurnDone');
    });
    keyboard.addEventListener('right', States.MAP, () => {
        currentSprite = 'assets/img/sprites/player/right.png';
        goRight();
        PubSub.publish('playerTurnDone');
    });
    keyboard.addEventListener('up', States.MAP, () => {
        currentSprite = 'assets/img/sprites/player/up.png';
        goUp();
        PubSub.publish('playerTurnDone');
    });
    keyboard.addEventListener('down', States.MAP, () => {
        currentSprite = 'assets/img/sprites/player/down.png';
        goDown();
        PubSub.publish('playerTurnDone');
    });

    function getCurrentSprite() {
        return currentSprite;
    }

    console.info('PLPlayer loaded');

    return {
        setCurrentPos,
        getCurrentPos,
        checkCurrentPos,
        goLeft,
        goRight,
        goUp,
        goDown,
        restorePosition,
        getCurrentSprite
    };

}

window.modules = window.modules || {};
window.modules.PLPlayer = new PLPlayer();