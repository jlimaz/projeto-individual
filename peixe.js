var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var tubarao; 

function preload() {
    this.load.image('mar', 'assets/bg_azul-escuro.png');
    this.load.image('logo', 'assets/inteli.png');
    this.load.image('tubarao', 'assets/tubarao.png');
    this.load.image('alga', 'assets/alga.png');
}

function create() {
    this.add.image(400, 300, 'mar');
    this.add.image(700, 520, 'alga').setScale(0.1);
    this.add.image(100, 520, 'alga').setScale(0.1);
    this.add.image(400, 525, 'logo').setScale(0.35);
    this.add.image(400, 525, 'peixe').setScale(0.35);
    
    
    tubarao = this.add.image(800, 600, 'tubarao').setScale(0.5)
    tubarao.setFlip(true, false);


}

function update() {

    tubarao.x = this.input.x;
    tubarao.y = this.input.y;

}