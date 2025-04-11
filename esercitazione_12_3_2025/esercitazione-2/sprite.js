var running = [
    "image/sprite_00.png", "image/sprite_01.png", "image/sprite_02.png", "image/sprite_03.png",
    "image/sprite_04.png", "image/sprite_05.png", "image/sprite_06.png", "image/sprite_07.png",
    "image/sprite_08.png", "image/sprite_09.png", "image/sprite_10.png", "image/sprite_11.png",
    "image/sprite_12.png", "image/sprite_13.png"
];

var animatedObject = {
    speedX: 0,
    speedY: 0,
    width: 60,
    height: 60,
    x: 10,
    y: 120,
    imageList: [],
    contaFrame: 0,
    actualFrame: 0,
    image: null,

    update: function () {
        if (myGamePiece) {
            this.x += (myGamePiece.x - this.x) * 0.1;
            this.y += (myGamePiece.y - this.y) * 0.1;
        }
        this.contaFrame++;
        if (this.contaFrame === 5) {
            this.contaFrame = 0;
            this.actualFrame = (this.actualFrame + 1) % this.imageList.length;
            this.image = this.imageList[this.actualFrame];
        }
    },

    loadImages: function () {
        for (let imgPath of running) {
            var img = new Image();
            img.src = imgPath;
            this.imageList.push(img);
        }
        if (this.imageList.length > 0) {
            this.image = this.imageList[this.actualFrame];
        }
    }
};
