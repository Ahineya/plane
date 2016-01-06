"use strict";

function BaseCell(cellData) {

    this.mouse = window.modules.PLMouse;

    this.cell = document.createElement('div');
    this.cell.classList.add('cell');
    this.cell.style.backgroundColor = 'grey';

    this.cellType = CellTypes[cellData.type];

    let image = '?';
    if (this.cellType && this.cellType.images) {
        image = this.cellType.images[0];
    } else if (this.cellType && this.cellType.image) {
        image = this.cellType.image;
    } else {
        image = '?';
    }
    this.cell.style.backgroundImage = `url('${image}')`;

    if (CellTypes[cellData.type].container) {
        this.items = cellData.contains;
        window.Cells.Container.call(this, this.items);
    }

    if (CellTypes[cellData.type].clickable) {
        this.cell.classList.add('clickable');
        this.mouse.addEventListener(this.cell, States.MAP, this.clickHandler);
    }

    this.redraw = () => {
        this.cell.innerText = '';
    };

}

window.Cells = window.Cells || {};
window.Cells.BaseCell = BaseCell;

console.info('BaseCell loaded');
