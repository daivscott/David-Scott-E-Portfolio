var config = {
    type:Phaser.AUTO,
    width:800,
    height:600,
    physics:{
        default:'arcade',
        arcade:{
            gravity:{y: 200}
        }
    },
    //scene:[MainMenu, Level1]
    scene:[Level1]
}

var game = new Phaser.Game(config);