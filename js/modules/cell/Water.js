"use strict";

function Water(cellData) {
    window.Cells.BaseCell.call(this, cellData);

    this.redraw = () => {
        const image = CellTypes.Water.images[_.random(2)];
        this.cell.style.backgroundImage = `url('${image}')`;
    };

    console.info('Water cell created', cellData);

    return {
        cell: this.cell,
        redraw: this.redraw.bind(this)
    };

}

window.Cells = window.Cells || {};
window.Cells.Water = Water;

console.info('Water loaded');
