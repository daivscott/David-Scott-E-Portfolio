var zhgame = {}, centreX = 1500/2, centreY = 1000/2, player1, speed = 5;

zhgame.Level0 = function(){};
zhgame.Level0.prototype = {
    preload: function(){
        game.load.image('Player1', 'assets/sprites/PistolShoot1.png')
    },
    create: function(){

        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '#a32f11';
        console.log('Level0');
        AddChangeStateEventListeners();
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        player1 = game.add.sprite(centreX, centreY, 'Player1');
        player1.anchor.setTo(0.5, 0.5);
        },

    update: function(){

        player1.rotation = game.physics.arcade.angleToPointer(player1);

        if(game.input.keyboard.isDown(Phaser.Keyboard.D)){
            player1.x += speed;
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.A)){
            player1.x -= speed;
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.W)){
            player1.y -= speed;
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.S)){
            player1.y += speed;
        }
    }
};

function ChangeState(i, stateNum){
    game.state.start('Level' + stateNum);
}

function AddKeyCallback(key, fn, args){
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}

function AddChangeStateEventListeners(){
    AddKeyCallback(Phaser.Keyboard.ZERO, ChangeState, 0);
    AddKeyCallback(Phaser.Keyboard.ONE, ChangeState, 1);
    AddKeyCallback(Phaser.Keyboard.TWO, ChangeState, 2);
}