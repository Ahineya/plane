window.CellTypes = {
    Block: {
        image: 'assets/img/tiles/block/0.png',
        solid: true
    },
    Sand: {
        image: 'assets/img/tiles/sand/0.png',
        solid: true,
        clickable: true
    },
    Ground: {
        image: 'assets/img/tiles/ground/0.png'
    },
    Tree: {
        images: [
            'assets/img/tiles/tree/0.png',
            'assets/img/tiles/tree/1.png',
            'assets/img/tiles/tree/2.png'
        ],
        solid: true,
        clickable: true
    },
    Water: {
        images: [
            'assets/img/tiles/water/0.png',
            'assets/img/tiles/water/1.png',
            'assets/img/tiles/water/2.png'
        ],
        solid: true
    },
    Chest: {
        images: [
            'assets/img/tiles/chest/0.png'
        ],
        solid: true,
        clickable: true,
        container: true
    }
};