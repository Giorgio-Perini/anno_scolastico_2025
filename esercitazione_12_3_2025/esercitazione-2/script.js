var myGamePiece;

function startGame() {
    myGameArea.start();
    myGamePiece = new component(30, 30, "red", 10, 120);
    animatedObject.loadImages();
}

var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    drawGameObject: function (gameObject) {
        if (gameObject.image) {
            this.context.drawImage(
                gameObject.image,
                gameObject.x,
                gameObject.y,
                gameObject.width,
                gameObject.height
            );
        }
    }
};

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.color = color;

    this.update = function () {
        var ctx = myGameArea.context;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };

    this.move = function (dx, dy) {
        this.x += dx;
        this.y += dy;
    };
}

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.update();
    myGameArea.drawGameObject(myGamePiece);  // Disegna il cubo
    animatedObject.update();
    myGameArea.drawGameObject(animatedObject);
}

function pressione_pulsante_su() { myGamePiece.move(0, -10); }
function pressione_pulsante_giu() { myGamePiece.move(0, 10); }
function pressione_pulsante_destro() { myGamePiece.move(10, 0); }
function pressione_pulsante_sinistra() { myGamePiece.move(-10, 0); }
