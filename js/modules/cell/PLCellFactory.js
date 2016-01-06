"use strict";

function PLCellFactory() {

    function createCell(cellData) {
        if (Cells[cellData.type]) {
            return new Cells[cellData.type](cellData);
        } else {
            console.error('[PLCellFactory]: can not create cell: ', cellData);
        }
    }

    console.info('PLCellFactory loaded');

    return {
        createCell
    }
}

window.modules = window.modules || {};
window.modules.PLCellFactory = new PLCellFactory();