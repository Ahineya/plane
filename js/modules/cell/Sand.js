"use strict";

function Sand(cellData) {
    this.clickHandler = (e) => {
        console.log('Sand cell clicked', e.idx);
    };

    window.Cells.BaseCell.call(this, cellData);

    console.info('Sand cell created', cellData);

    return {
        cell: this.cell,
        redraw: this.redraw.bind(this)
    };

}

window.Cells = window.Cells || {};
window.Cells.Sand = Sand;

console.info('Sand loaded');
