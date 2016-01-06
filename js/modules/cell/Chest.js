"use strict";

function Chest(cellData) {
    window.Cells.BaseCell.call(this, cellData);

    console.info('Chest cell created', cellData);

    return {
        cell: this.cell,
        redraw: this.redraw.bind(this)
    };

}

window.Cells = window.Cells || {};
window.Cells.Chest = Chest;

console.info('Chest loaded');
