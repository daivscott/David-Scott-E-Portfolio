var zhgame = {}, centreX = 1500/2, centreY = 1000/2, player1, speed = 5, btnOffsetX, btnOffsetY;

zhgame.Level0 = function(){};
zhgame.Level0.prototype = {
    preload: function(){
        game.load.atlas('generic', 'assets/skins/generic-joystick.png', 'assets/skins/generic-joystick.json');
        game.load.image('Player1', 'assets/sprites/PistolShoot1.png');
        game.load.spritesheet('platformBtn', 'assets/spritesheet/ControllerButton_spritesheet.png', 193, 71);
        game.load.image('Ground', 'assets/sprites/Ground.png', 0, 0);
    },
    create: function(){

        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '#a32f11';
        console.log('Level0');
        AddChangeStateEventListeners();
        game.world.setBounds(0, 0, 4000, 4000);
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        var ground = game.add.sprite(0, 0, 'Ground');

        button = game.add.button(100, 100, 'platformBtn', actionOnClick, this, 2, 1, 0);
        player1 = game.add.sprite(centreX, centreY, 'Player1');

        player1.anchor.setTo(0.5, 0.5);

        game.physics.arcade.enable(player1);

        // Add the Virtual Gamepad plugin to the game
        gamepad = game.plugins.add(Phaser.VirtualJoystick);
        stick = gamepad.addStick(0, 0, 200, 'generic');

        stick.alignBottomLeft(100);

        padVisible = true;

        game.camera.follow(player1);

        },

    update: function(){

        button.x = game.camera.x + 100;
        button.y = game.camera.y + 100;

        //virtual pad movement
        if(padVisible)
        {
            stick.enabled = true;
            stick.visible = true;

            // Read joystick data to set players angle and movement speed
            if (stick.isDown)
            {
                player1.rotation = stick.rotation;
                player1.x += speed * stick.x;
                player1.y += speed * stick.y;
            }
        }
        else
        {
            stick.enabled = false;
            stick.visible = false;
            // set the players rotation to point to mouse pointer
            player1.rotation = game.physics.arcade.angleToPointer(player1);

            // WASD movement controls
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
    }
};

function actionOnClick () {

    padVisible = !padVisible;

}

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