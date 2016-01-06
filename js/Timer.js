"use strict";

function Timer() {

    function create(steps, callback) {
        let stepsRemaining = steps;

        let token = PubSub.subscribe('Timer tick', () => {
            stepsRemaining--;
            if(!stepsRemaining) {
                callback();
                cancelTimer();
            }
        });

        function cancelTimer() {
            PubSub.unsubscribe(token);
        }

        function remaining() {
            return stepsRemaining - 1;
        }

        return {
            remaining
        }
    }

    console.info('Timer loaded');

    return {
        create
    }
}

window.Timer = new Timer();