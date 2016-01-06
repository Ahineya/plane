"use strict";

function Tree(cellData) {

    let timer = null;

    this.clickHandler = (e) => {
        if (timer.remaining() <= 0) {
            console.log('Here is apple!');
            //window.modules.PLState.setState(States.CONTAINER);
        }
        console.log('Tree cell clicked', e.idx);
    };

    window.Cells.BaseCell.call(this, cellData);

    let image = this.cellType.images[0];

    if (cellData.state === 2) {
        timer = Timer.create(1, () => {
            console.log('tree timer elapsed');
        });
        image = this.cellType.images[2];
        this.cell.style.backgroundImage = `url('${image}')`;
    } else {
        timer = Timer.create(10, () => {
            console.log('tree timer elapsed');
        });
    }


    this.redraw = () => {
        const timerRemaining = timer.remaining();
        if (timerRemaining === 5) {
            image = this.cellType.images[1];
        } else if (timerRemaining === 1) {
            image = this.cellType.images[2];
        }

        this.cell.style.backgroundImage = `url('${image}')`;

    };

    console.info('Tree cell created', cellData);

    return {
        cell: this.cell,
        redraw: this.redraw.bind(this)
    };

}

window.Cells = window.Cells || {};
window.Cells.Tree = Tree;

console.info('Tree loaded');
