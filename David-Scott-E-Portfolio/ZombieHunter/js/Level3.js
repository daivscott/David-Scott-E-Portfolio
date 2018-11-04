var zhgame = {}, centreX = 800/2, centreY = 600/2, player1, enemy1, speed = 200, rocks, grass,
    bullets, bulletSpeed = 1000, nextFire = 0, fireRate = 200, enemySpeed = 120, enemies, bmd, bglife;


zhgame.Level3 = function(){};
zhgame.Level3.prototype = {
    preload: function(){
        // reference virtual joystick
        game.load.atlas('generic', 'assets/skins/generic-joystick.png', 'assets/skins/generic-joystick.json');

        // reference the Player
        game.load.image('Player1', 'assets/sprites/PistolShoot2.png');
        game.load.spritesheet('PlayerPistol', 'assets/sprites/PistolShoot.png', 70, 34, 5);

        // reference to zombie
        game.load.image('Enemy1', 'assets/sprites/zombie1.png');

        // reference the bullet
        game.load.image('bullet', 'assets/sprites/Bullet-1.png');

        // reference the phaser buttons
        game.load.spritesheet('controllerBtn', 'assets/spritesheet/ControllerButton_spritesheet.png', 193, 71);
        game.load.spritesheet('fullscreenBtn', 'assets/spritesheet/FullscreenButton_spritesheet.png', 193, 71);

        // reference the tilemap
        game.load.tilemap('mountains', 'assets/tilemaps/mountains.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('mountain_landscape', 'assets/spritesheet/mountain_landscape.png');

    },
    init: function(){

        this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignVertically = true;
        this.scale.pageAlignHorizontally = true;
        this.game.scale.refresh();

    },

    //----CREATE FUNCTION----------------------------------------------------------------------------
    create: function(){

        // set game physics to arcade
        game.physics.startSystem(Phaser.Physics.ARCADE);

        // set background colour
        game.stage.backgroundColor = '#000000';

        // execute event listeners
        AddChangeStateEventListeners();

        // set world bounds and scale
        game.world.setBounds(0, 0, 1600, 1600);


        //----TileMaps---------------------------------------------------

        // load the level tilemap
        var map = game.add.tilemap('mountains');

        // load the tilemap image
        map.addTilesetImage('mountain_landscape');

        // set the tilemap layers
        grass = map.createLayer('grass');
        rocks = map.createLayer('rocks');

        // set the tilemap collisions
        map.setCollision(15, true, 'grass');
        map.setCollisionBetween(2, 5, true, 'rocks');
        map.setCollisionBetween(17, 22, true, 'rocks');
        map.setCollisionBetween(33, 38, true, 'rocks');
        map.setCollisionBetween(49, 54, true, 'rocks');
        map.setCollisionBetween(65, 70, true, 'rocks');
        map.setCollisionBetween(81, 86, true, 'rocks');
        map.setCollisionBetween(97, 102, true, 'rocks');

        //----Buttons-------------------------------------------

        // create the button to change controls
        //controllerButton = game.add.button(100, 100, 'controllerBtn', changeControls, this, 2, 1, 0);
        fullscreenButton = game.add.button(100, 100, 'fullscreenBtn', changeFullscreen, this, 2, 1, 0);
        // controllerButton.scale.setTo(0.8, 0.8);
        // fullscreenButton.scale.setTo(0.8, 0.8);

        //----Bullets-------------------------------------------

        bullets = game.add.group();
        bullets.enableBody = true;
        bullets.physicsBodyType = Phaser.Physics.ARCADE;
        bullets.createMultiple(50, 'bullet');
        bullets.setAll('checkWorldBounds', true);
        bullets.setAll('outOfBoundsKill', true);
        bullets.setAll('anchor.x', 0.5);
        bullets.setAll('anchor.y', 0.5);
        bullets.setAll('body.width', 5);
        bullets.setAll('body.height', 5);
        bullets.setAll('scale.x', 2);
        bullets.setAll('scale.y', 2);

        //----Player--------------------------------------------

        // add the player to the centre of the screen with a centre anchor set
        player1 = game.add.sprite(200, 200, 'PlayerPistol');
        player1.anchor.setTo(0.5, 0.5);

        // enable physics for the player and set world bounds
        game.physics.enable(player1);
        player1.body.collideWorldBounds = true;

        //----PlayerAnimation-----------------------------------

        player1.animations.add('shoot', [0,1,2,3,4,0], 40, false);

        //----PlayerHealthBar-----------------------------------

        bmd = this.game.add.bitmapData(300, 40);
        bmd.ctx.beginPath();
        bmd.ctx.rect(0, 0, 300, 80);
        bmd.ctx.fillStyle = '#00685e';
        bmd.ctx.fill();

        bglife = this.game.add.sprite(200, 100, bmd);
        bglife.anchor.set(0.5);

        bmd = this.game.add.bitmapData(280, 30);
        bmd.ctx.beginPath();
        bmd.ctx.rect(0, 0, 300, 80);
        bmd.ctx.fillStyle = '#00f910';
        bmd.ctx.fill();

        widthLife = new Phaser.Rectangle(0, 0, bmd.width, bmd.height);
        totalLife = bmd.width;

        this.life = this.game.add.sprite(200 - bglife.width/2 + 10, 100, bmd);
        this.life.anchor.y = 0.5;
        this.life.cropEnabled = true;
        this.life.crop(widthLife);

        //this.game.time.events.loop(0.0001, cropLife, this);

        //----Enemy---------------------------------------------
        // Create an enemy group and add a physics body
        enemies = game.add.group();
        enemies.enableBody = true;
        enemies.physicsBodyType = Phaser.Physics.ARCADE;

        // Create some enemies
        for (var i = 0; i < 20; i++)
        {
            // Create an enemy in random location
            enemy1 = enemies.create(360 + Math.random() * 200, 120 + Math.random() * 200, 'Enemy1');
            enemy1.anchor.setTo(0.5, 0.5);
            enemy1.health = 3;
            enemy1.body.collideWorldBounds = true;
        }

        //----Gamepad-------------------------------------------

        // Add the Virtual Gamepad plugin to the game and create a stick
        // aligned to bottom left of the screen
        gamepad = game.plugins.add(Phaser.VirtualJoystick);
        stick = gamepad.addStick(0, 0, 200, 'generic');
        stick.scale = 0.5;
        stick.alignBottomLeft(50);

        fireButton = gamepad.addButton(200, 200, 'generic', 'button1-up', 'button1-down');

        fireButton.onDown.add(GamepadFire);
        fireButton.repeatRate = 100;

        fireButton.alignBottomRight(50);

        // create a boolean variable to toggle pad visibility
        padVisible = true;

        //----Camera-------------------------------------------

        // set the camera to follow the player with a deadzone
        game.camera.follow(player1);
        game.camera.deadzone = new Phaser.Rectangle(centreX - 100, centreY - 100, 200, 200);

        // game.input.onDown.add(gofull, this);

        game.time.advancedTiming = true;

        //----Pause--------------------------------------------
        // Create a label to use as a button
        pause_label = game.add.text(100, 20, 'Pause', { font: '24px Arial', fill: '#fff' });
        pause_label.inputEnabled = true;
        pause_label.events.onInputUp.add(function () {
            // When the paus button is pressed, we pause the game
            game.paused = true;
        });
    },

    // cropLife: function(){
    //
    //
    //     if(this.widthLife.width <= 0){
    //         this.widthLife.width = this.totalLife;
    //
    //     }
    //     else{
    //         console.log('dying');
    //         this.game.add.tween(this.widthLife).to( { width: (this.widthLife.width - (this.totalLife / 100)) }, 200, Phaser.Easing.Linear.None, true);
    //     }
    // },

    //----UPDATE FUNCTION----------------------------------------------------------------------------
    update: function(){
        // Player collision
        game.physics.arcade.collide(player1, rocks, function(){console.log('Hitting Rocks'); });
        game.physics.arcade.collide(player1, grass, function(){console.log('Hitting Wall'); });
        // Enemy collision
        game.physics.arcade.collide(enemies, rocks, function(){console.log('Hitting Rocks'); });
        game.physics.arcade.collide(enemies, grass, function(){console.log('Hitting Wall'); });
        game.physics.arcade.collide(enemies, enemies);
        fullscreenButton.x = game.camera.x + 0;
        fullscreenButton.y = game.camera.y + 0;
        bglife.x = game.camera.x + game.camera.width/2;
        bglife.y = game.camera.y + 20;
        this.life.x = game.camera.x + game.camera.width/2 - 140;
        this.life.y = game.camera.y + 20;

        //virtual pad movement
        if(!Phaser.Device.desktop)
        {
            // enable and show mobile controls
            stick.enabled = true;
            stick.visible = true;
            fireButton.visible = true;

            // Read joystick data to set players angle and movement speed
            if (stick.isDown)
            {
                player1.rotation = stick.rotation;
                player1.body.velocity.x += speed/50 * stick.x;
                player1.body.velocity.y += speed/50 * stick.y;
                if(player1.body.velocity.x > 200)
                {
                    player1.body.velocity.x = 200;
                }
                if(player1.body.velocity.y > 200)
                {
                    player1.body.velocity.y = 200;
                }
                // // remove movement physics
                // player1.body.velocity.x = speed * stick.x;
                // player1.body.velocity.y = speed * stick.y;
            }
            else{
                player1.body.velocity.x = 0;
                player1.body.velocity.y = 0;
            }
        }
        else
        {
            // disable and hide mobile controls
            stick.enabled = false;
            stick.visible = false;
            fireButton.visible = false;

            // set the players rotation to point to mouse pointer
            player1.rotation = game.physics.arcade.angleToPointer(player1);

            // WASD movement controls
            if(game.input.keyboard.isDown(Phaser.Keyboard.D)){
                player1.body.velocity.x = speed;
            }
            else if(game.input.keyboard.isDown(Phaser.Keyboard.A)){
                player1.body.velocity.x = -speed;
            }
            else{
                player1.body.velocity.x = 0;
            }
            if(game.input.keyboard.isDown(Phaser.Keyboard.W)){
                player1.body.velocity.y = -speed;
            }
            else if(game.input.keyboard.isDown(Phaser.Keyboard.S)){
                player1.body.velocity.y = speed;
            }
            else{
                player1.body.velocity.y = 0;
            }

            // check for left mouse down and fire
            if(game.input.activePointer.leftButton.isDown)
            {
                MouseFire();
            }
        }


        enemies.forEach(function (enemy1) {
            if(game.physics.arcade.distanceBetween(enemy1, player1) < 300)
            {
                game.physics.arcade.moveToObject(enemy1,player1,enemySpeed, null),
                    enemy1.rotation = game.physics.arcade.angleToXY(enemy1, player1.x, player1.y)
            }
            else
            {
                game.physics.arcade.moveToObject(enemy1,player1,0, null)
            }
            // game.physics.arcade.overlap(enemy1, player1, RestartGame, null, this)
            game.physics.arcade.overlap(enemy1, player1, cropLife, null, this)
        });

        game.physics.arcade.overlap(bullets, enemies, killZombie, null, this)

        this.life.updateCrop();

    },

    render: function() {
        game.debug.text(game.time.fps, 780, 14, "#00ff00");
        //game.debug.body(player1);
        //game.debug.physicsGroup(bullets);
        //game.debug.physicsGroup(enemies);
    }

};

function cropLife(){


    if(widthLife.width <= 0){
        widthLife.width = totalLife;
        RestartGame();
    }
    else{
        console.log('dying');
        game.add.tween(widthLife).to( { width: (widthLife.width - (totalLife / 20)) }, 200, Phaser.Easing.Linear.None, true);
    }
}

function killZombie(bullet, enemy1) {

    bullet.kill();
    enemy1.health--;
    if(enemy1.health < 1)
    {
        enemy1.kill();
    }

}

function createZombie() {

    // Recycle using getFirstExists(false)
    // Notice that this method will not create new objects if there's no one
    // available, and it won't change size of this group.
    var enemy = enemies.getFirstExists(false);

    if (enemy)
    {
        enemy.revive();
    }

}

function RestartGame() {
    game.state.start('Level2');
}

// function EnemyMove() {
//     game.physics.arcade.moveToObject(enemy1,player1,enemySpeed, 2000);
//     enemy1.rotation = game.physics.arcade.angleToXY(enemy1, player1.x, player1.y);
// }

function MouseFire() {
    if(game.time.now > nextFire)
    {
        player1.animations.play('shoot');
        nextFire = game.time.now + fireRate;
        var bullet = bullets.getFirstDead();
        bullet.reset(player1.x, player1.y);
        //

        game.physics.arcade.moveToPointer(bullet, bulletSpeed);
        bullet.rotation = game.physics.arcade.angleToPointer(bullet);
    }
}

function GamepadFire(){
    if(game.time.now > nextFire)
    {
        player1.animations.play('shoot');
        nextFire = game.time.now + fireRate;
        var bullet = bullets.getFirstDead();
        bullet.reset(player1.x, player1.y);

        game.physics.arcade.velocityFromRotation(player1.rotation, bulletSpeed, bullet.body.velocity);
        bullet.rotation = player1.rotation;
    }
}



// function changeControls () {
//
//     padVisible = !padVisible;
//
// }

function changeFullscreen(){
    gofull();
}

function ChangeState(i, stateNum){
    console.log('Level' + stateNum);
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

function gofull() {
    //Utils.FullscreenUtils.changeFullscreen();

    //game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

    //this.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
    // game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    if (game.scale.isFullScreen)
    {
        game.scale.stopFullScreen();
    }
    else
    {
        game.scale.startFullScreen(false);
    }

}