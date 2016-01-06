"use strict";

function Template(cellData) {
    this.clickHandler = (e) => {
        console.log('Template cell clicked', e.idx);
    };

    window.Cells.BaseCell.call(this, cellData);

    console.info('Template cell created', cellData);

    return {
        cell: this.cell,
        redraw: this.redraw.bind(this)
    };

}

window.Cells = window.Cells || {};
window.Cells.Template = Template;

console.info('Template loaded');
