"use strict";

function Ground(cellData) {

    window.Cells.BaseCell.call(this, cellData);

    console.info('Ground cell created', cellData);

    this.redraw = ()=> {
        const image = this.cellType.image;
        this.cell.style.backgroundImage = `url('${image}')`;
        this.cell.innerText = '';
    };

    return {
        cell: this.cell,
        redraw: this.redraw.bind(this)
    };

}

window.Cells = window.Cells || {};
window.Cells.Ground = Ground;

console.info('Ground loaded');
