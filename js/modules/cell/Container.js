"use strict";

function Container(items) {
    this.clickHandler = (e) => {
        console.log('Container cell clicked', e.idx);
        window.modules.PLContainer.show(items);
    };

}

window.Cells = window.Cells || {};
window.Cells.Container = Container;

console.info('Container loaded');
