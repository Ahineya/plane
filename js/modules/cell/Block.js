"use strict";

function Block(cellData) {

    window.Cells.BaseCell.call(this, cellData);

    console.info('Block cell created', cellData);

    return {
        cell: this.cell,
        redraw: this.redraw.bind(this)
    };

}

window.Cells = window.Cells || {};
window.Cells.Block = Block;

console.info('Block loaded');
