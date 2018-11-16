var zhgame = {}, centreX = 1100/2, centreY = 600/2, player1, enemy1, speed = 200, map, RocksLayer, TreesLayer,
    MountainLayer, GrassLayer, bullets, bulletSpeed = 1000, nextFire = 0, fireRate = 200, enemySpeed = 120, enemies,
    bmd, bglife, animDeath, animHit, animGrab, enemyDeathLoc, souls, soul, soulAnim, MachineGun, ShotGun, RedKey, GoldKey,
    BlueKey, GreenKey, PinkKey, Health, weapon, bullet,shotgunRounds = 4, health, Spawn1, Spawn2, Spawn3, justSpawned = 120,
    healthLocationX, healthLocationY, healthCount, GreenDoor;


zhgame.Level1 = function(){};
zhgame.Level1.prototype = {
    preload: function(){
        // reference virtual joystick
        game.load.atlas('generic', 'assets/skins/generic-joystick.png', 'assets/skins/generic-joystick.json');

        // reference the Player
        game.load.image('Player1', 'assets/sprites/PistolShoot2.png');
        game.load.spritesheet('PlayerPistol', 'assets/sprites/PistolShoot.png', 69.5, 34, 5);

        // reference to zombie
        //game.load.image('Enemy1', 'assets/sprites/zombie1.png');
        // game.load.spritesheet('Enemy1', 'assets/sprites/ZOMBIE_ALL.png', 60, 60, 30, 5, 6);
        game.load.spritesheet('Enemy1', 'assets/sprites/ZOMBIE_ALL2.png', 60, 60);

        // reference the bullet
        game.load.image('bullet', 'assets/sprites/Bullet-1.png');

        // reference the phaser buttons
        game.load.spritesheet('controllerBtn', 'assets/spritesheet/ControllerButton_spritesheet.png', 193, 71);
        game.load.spritesheet('fullscreenBtn', 'assets/spritesheet/FullscreenButton_spritesheet.png', 193, 71);

        // reference the tilemap
        // game.load.tilemap('mountains', 'assets/tilemaps/mountains.json', null, Phaser.Tilemap.TILED_JSON);
        // game.load.image('mountain_landscape', 'assets/spritesheet/mountain_landscape.png');
        game.load.tilemap('Level1', 'assets/tilemaps/Level1.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('mountain_landscape', 'assets/spritesheet/mountain_landscape.png');

        // refernce to the soul pickup
        game.load.spritesheet('Soul', 'assets/sprites/SoulPickup.png', 32, 32);

        // reference to the machine gun
        game.load.spritesheet('MachineGun', 'assets/sprites/MachineGun.png', 32, 32);

        // reference to the shotgun
        game.load.spritesheet('ShotGun', 'assets/sprites/ShotGun.png', 32, 32);

        // reference to the keys
        game.load.spritesheet('RedKey', 'assets/sprites/RedKey.png', 32, 32);
        game.load.spritesheet('GoldKey', 'assets/sprites/GoldKey.png', 32, 32);
        game.load.spritesheet('BlueKey', 'assets/sprites/BlueKey.png', 32, 32);
        game.load.spritesheet('GreenKey', 'assets/sprites/GreenKey.png', 32, 32);
        game.load.spritesheet('PinkKey', 'assets/sprites/PinkKey.png', 32, 32);

        // reference to the doors
        game.load.spritesheet('RedDoor', 'assets/sprites/RedDoor.png', 100, 32);
        game.load.spritesheet('GoldDoor', 'assets/sprites/GoldDoor.png', 100, 32);
        game.load.spritesheet('BlueDoor', 'assets/sprites/BlueDoor.png', 100, 32);
        game.load.spritesheet('GreenDoor', 'assets/sprites/GreenDoor.png', 100, 32);
        game.load.spritesheet('PinkDoor', 'assets/sprites/PinkDoor.png', 100, 32);

        // reference to the health
        game.load.spritesheet('Health', 'assets/sprites/Health.png', 32, 32);

        // reference to the zombie spawn
        game.load.spritesheet('Spawner', 'assets/sprites/ZombieSpawn.png', 60, 40);

    },
    init: function(){

        this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignVertically = true;
        this.scale.pageAlignHorizontally = true;
        this.game.scale.refresh();
        //game.scale.startFullScreen(true);

    },

    //----CREATE FUNCTION----------------------------------------------------------------------------
    create: function(){

        // set game physics to arcade
        game.physics.startSystem(Phaser.Physics.ARCADE);

        // set background colour
        game.stage.backgroundColor = '#000000';

        // execute event listeners
        AddChangeStateEventListeners();

        //----TileMaps---------------------------------------------------

        // load the level tilemap
        map = game.add.tilemap('Level1');

        // load the tilemap image
        map.addTilesetImage('mountain_landscape', 'mountain_landscape');

        var gameWidth = map.widthInPixels;
        var gameHeight = map.heightInPixels;

        // set world bounds and scale
        game.world.setBounds(0, 0, gameWidth, gameHeight);


        // set the tilemap layers
        GrassLayer = map.createLayer('GrassLayer');
        MountainLayer = map.createLayer('MountainLayer');
        TreesLayer = map.createLayer('TreesLayer');
        RocksLayer = map.createLayer('RocksLayer');


        // set the tilemap collisions for Rocks
        map.setCollisionBetween(203, 205, true, 'RocksLayer');
        map.setCollisionBetween(219, 221, true, 'RocksLayer');
        map.setCollisionBetween(235, 236, true, 'RocksLayer');
        map.setCollisionBetween(251, 252, true, 'RocksLayer');

        // set the tilemap collisions for Trees
        map.setCollisionBetween(196, 198, true, 'TreesLayer');
        map.setCollisionBetween(212, 214, true, 'TreesLayer');
        map.setCollisionBetween(217, 219, true, 'TreesLayer');
        map.setCollisionBetween(228, 235, true, 'TreesLayer');
        map.setCollisionBetween(244, 251, true, 'TreesLayer');

        // set the tilemap collisions for Mountains
        map.setCollisionBetween(1, 4, true, 'MountainLayer');
        map.setCollisionBetween(7, 9, true, 'MountainLayer');
        map.setCollisionBetween(16, 25, true, 'MountainLayer');
        map.setCollisionBetween(32, 41, true, 'MountainLayer');
        map.setCollisionBetween(48, 57, true, 'MountainLayer');
        map.setCollisionBetween(64, 73, true, 'MountainLayer');
        map.setCollisionBetween(80, 89, true, 'MountainLayer');
        map.setCollisionBetween(96, 105, true, 'MountainLayer');

        map.setCollisionBetween(112, 115, true, 'MountainLayer');
        map.setCollisionBetween(128, 131, true, 'MountainLayer');
        map.setCollisionBetween(144, 147, true, 'MountainLayer');
        map.setCollisionBetween(160, 163, true, 'MountainLayer');
        map.setCollisionBetween(176, 179, true, 'MountainLayer');
        map.setCollisionBetween(192, 195, true, 'MountainLayer');
        map.setCollisionBetween(208, 211, true, 'MountainLayer');
        map.setCollisionBetween(224, 227, true, 'MountainLayer');
        map.setCollisionBetween(240, 243, true, 'MountainLayer');

        //----Doors---------------------------------------------

        GreenDoor = game.add.sprite(557, 530, 'GreenDoor');
        game.physics.arcade.enable(GreenDoor);
        GreenDoor.enableBody = true;
        // GreenDoor.physicsBodyType = Phaser.Physics.ARCADE;
        GreenDoor.anchor.setTo(0.5, 0.5);
        GreenDoor.animations.add('flash', [0,1,2,3,4,3,2,1], 7, true);
        GreenDoor.animations.play('flash');
        GreenDoor.name = 'GreenDoor';
        GreenDoor.body.immovable = true;

        //----Keys----------------------------------------------

        GreenKey = game.add.sprite(3034, 600, 'GreenKey');
        game.physics.arcade.enable(GreenKey);
        GreenKey.enableBody = true;
        // GreenDoor.physicsBodyType = Phaser.Physics.ARCADE;
        GreenKey.anchor.setTo(0.5, 0.5);
        GreenKey.animations.add('flash', [0,1,2,3,4,3,2,1], 14, true);
        GreenKey.animations.play('flash');
        GreenKey.name = 'GreenKey';
        GreenKey.body.immovable = true;

        //----Buttons-------------------------------------------

        // create the button to enter fullscreen
        fullscreenButton = game.add.button(100, 100, 'fullscreenBtn', changeFullscreen, this, 2, 1, 0);


        //----Bullets-------------------------------------------

        // add the bullet group, add physics, bounds, pivot, collision box and size
        // bullets = game.add.group();
        // bullets.enableBody = true;
        // bullets.physicsBodyType = Phaser.Physics.ARCADE;
        // bullets.createMultiple(50, 'bullet');
        // bullets.setAll('checkWorldBounds', true);
        // bullets.setAll('outOfBoundsKill', true);
        // bullets.setAll('anchor.x', 0.5);
        // bullets.setAll('anchor.y', 0.5);
        // bullets.setAll('body.width', 5);
        // bullets.setAll('body.height', 5);
        // bullets.setAll('scale.x', 2);
        // bullets.setAll('scale.y', 2);


        //----Player--------------------------------------------

        // Create an instance of the player
        player1 = game.add.sprite(200, 600, 'PlayerPistol');

        // enable physics for the player, set pivot, world bounds and collision box
        game.physics.enable(player1);
        player1.anchor.setTo(0.2, 0.5);
        player1.body.collideWorldBounds = true;
        player1.body.setSize(30, 30, 0, 3);
        player1.souls = 0;
        player1.gun = 'pistol';
        player1.greenKey = false;
        player1.greenKey = false;
        player1.greenKey = false;
        player1.greenKey = false;
        player1.greenKey = false;

        //----PlayerAnimation-----------------------------------

        player1.animations.add('shoot', [0,1,2,3,4,0], 40, false);

        //----PlayerHealthBar-----------------------------------

        // Create healthbar border to show total health
        bmd = this.game.add.bitmapData(290, 36);
        bmd.ctx.beginPath();
        bmd.ctx.rect(0, 0, 300, 80);
        bmd.ctx.fillStyle = '#00473d';
        bmd.ctx.fill();

        // Create an instance of the healthbar border
        bglife = this.game.add.sprite(200, 100, bmd);
        bglife.anchor.set(0.5);

        // Create the healthbar life display
        bmd = this.game.add.bitmapData(280, 30);
        bmd.ctx.beginPath();
        bmd.ctx.rect(0, 0, 300, 80);
        bmd.ctx.fillStyle = '#00f910';
        bmd.ctx.fill();

        // Create an instance of the healthbar life to show the health
        widthLife = new Phaser.Rectangle(0, 0, bmd.width, bmd.height);
        totalLife = bmd.width;

        this.life = this.game.add.sprite(200 - bglife.width/2 + 10, 100, bmd);
        this.life.anchor.y = 0.5;
        this.life.cropEnabled = true;
        this.life.crop(widthLife);

        // position the healthbar
        bglife.x = game.camera.x + game.camera.width/2;
        bglife.y = game.camera.y + 20;
        this.life.x = game.camera.x + game.camera.width/2 - 140;
        this.life.y = game.camera.y + 20;

        // fix the position of healthbar relative to camera
        bglife.fixedToCamera = true;
        this.life.fixedToCamera = true;

        //----Health--------------------------------------------

        // variable for healt count
        healthCount = 0;

        // Create an enemy group and add a physics body
        lifePickups = game.add.group();
        lifePickups.enableBody = true;
        lifePickups.physicsBodyType = Phaser.Physics.ARCADE;

        lifePickups.createMultiple(4, 'Health', 0, false);
        lifePickups.forEach( function (health) {

            //health.healthCount = 0;
            health.animations.add('bounce', [0,1,2,3,4,5], 14, true);
            health.play('bounce');

        }, this);

        //----Weapon--------------------------------------------

        //  Creates 30 bullets, using the 'bullet' graphic
        weapon = game.add.weapon(20, 'bullet');

        weapon.bullets.setAll('scale.x', 2);
        weapon.bullets.setAll('scale.y', 2);

        //  The bullet will be automatically killed when it leaves the world bounds
        weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;

        //  The speed at which the bullet is fired
        weapon.bulletSpeed = 600;

        //  Speed-up the rate of fire, allowing them to shoot 1 bullet every 60ms
        weapon.fireRate = 200;

        // flag to determine if gun is fired
        weapon.fireLimit = 0;

        weapon.multiFire = false;

        //  Tell the Weapon to track the 'player' Sprite
        //  With no offsets from the position
        //  But the 'true' argument tells the weapon to track sprite rotation
        weapon.trackSprite(player1, 0, 0, true);

        //--ZombieSpawner---------------------------------------

        Spawn1 = game.add.sprite(750, 750, 'Spawner');
        Spawn1.enableBody = true;
        Spawn1.physicsBodyType = Phaser.Physics.ARCADE;
        Spawn1.anchor.setTo(0.5, 0.5);

        //----Enemy---------------------------------------------
        // Create an enemy group and add a physics body
        enemies = game.add.group();
        enemies.enableBody = true;
        enemies.physicsBodyType = Phaser.Physics.ARCADE;

        // create a set number of enemies in the group and set attributes
        enemies.createMultiple(50, 'Enemy1', 0, false);
        enemies.forEach( function (enemy1){
            enemy1.anchor.setTo(0.59, 0.49);
            enemy1.scale.x = 1.5;
            enemy1.scale.y = 1.5;
            enemy1.body.collideWorldBounds = true;
            enemy1.body.setSize(20, 20, 24, 20);
            enemy1.animations.add('walk', [0,1,2,3], 10, true);
            enemy1.animations.add('grab', [4,5,6,7], 30, true);
            enemy1.animations.add('shot', [8,9,10,11,12,13,14,15,16,17], 10, false);
            enemy1.animations.add('die1', [18,19,20,21,22], 10, false);
            enemy1.animations.add('die2', [23,24,25,26,27,28,29], 10, false);
        }, this);

        // // Create some enemies
        // for (var i = 0; i < 20; i++)
        // {
        //     enemy1 = enemies.getFirstDead();
        //     if (enemy1)
        //     {
        //         enemy1.reset(360 + Math.random() * 200, 120 + Math.random() * 200);
        //         enemy1.health = 3;
        //     }
        //
        //
        //     // Create an enemy in random location
        //     // enemy1 = enemies.create(360 + Math.random() * 200, 120 + Math.random() * 200, 'Enemy1');
        //     // // // enemy1.anchor.setTo(0.65, 0.4);
        //     // enemy1.anchor.setTo(0.59, 0.49);w
        //     // enemy1.scale.x = 1.5;
        //     // enemy1.scale.y = 1.5;
        //     // // enemy1.health = 3;
        //     // // enemy1.body.collideWorldBounds = true;
        //     // // // enemy1.body.setSize(20, 20, 32, 11);
        //     // enemy1.body.setSize(20, 20, 24, 20);
        //     // // enemy1.animations.add('walk', [0,1,2,3], 10, true);
        //     // // //enemy1.animations.add('walk', [0,1,2,3,4,5,6,7], 10, true);
        //     // // enemy1.animations.add('grab', [4,5,6,7], 30, true);
        //     // // enemy1.animations.add('shot', [8,9,10,11,12,13,14,15,16,17], 10, false);
        //     // // enemy1.animations.add('die1', [18,19,20,21,22], 10, false);
        //     // // enemy1.animations.add('die2', [23,24,25,26,27,28,29], 10, false);
        // }


        //---SoulPickup-----------------------------------------

        // Create a group of soul objects
        souls = game.add.group();
        souls.enableBody = true;
        souls.physicsBodyType = Phaser.Physics.ARCADE;
        souls.createMultiple(200, 'Soul', 0, false);

        //---MachineGun-----------------------------------------

        // Create an instance of the MachineGun
        MachineGun = game.add.sprite(750, 1270, 'MachineGun');
        game.physics.arcade.enable(MachineGun);
        MachineGun.animations.add('bounce', [0,1,2,3,4,5,5,4,3,2,1], 24, true);
        MachineGun.play('bounce');
        MachineGun.enableBody = true;

        //---ShotGun-----------------------------------------

        // Create an instance of the ShotGun
        ShotGun = game.add.sprite(300, 3034, 'ShotGun');
        game.physics.arcade.enable(ShotGun);
        ShotGun.animations.add('bounce', [0,1,2,3,4,5,5,4,3,2,1], 24, true);
        ShotGun.play('bounce');
        ShotGun.enableBody = true;

        //----Gamepad-------------------------------------------

        // Add the Virtual Gamepad plugin to the game and create a stick
        // aligned to bottom left of the screen
        gamepad = game.plugins.add(Phaser.VirtualJoystick);
        stick = gamepad.addStick(0, 0, 200, 'generic');
        stick.scale = 0.7;
        stick.alignBottomLeft(60);

        // Create an instance of the virtual gamepad fire button
        fireButton = gamepad.addButton(200, 200, 'generic', 'button1-up', 'button1-down');

        // Set function to be called when pressed
        fireButton.onDown.add(GamepadFire);

        // Align to the bottom right of the screen
        fireButton.alignBottomRight(100);

        // create a boolean variable to toggle pad visibility
        padVisible = true;

        //----Camera-------------------------------------------

        // set the camera to follow the player with a deadzone
        game.camera.follow(player1);
        game.camera.deadzone = new Phaser.Rectangle(centreX - 200, centreY - 70,  400,  140);

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

        game.stage.smoothed = false;

        createHealth();
    },




    //----UPDATE FUNCTION----------------------------------------------------------------------------
    update: function(){


        // Player collision
        game.physics.arcade.collide(player1, RocksLayer, function(){console.log(/*'Hitting Rocks'*/); });
        game.physics.arcade.collide(player1, GrassLayer, function(){console.log(/*'Hitting Grass'*/); });
        game.physics.arcade.collide(player1, TreesLayer, function(){console.log(/*'Hitting Trees'*/); });
        game.physics.arcade.collide(player1, MountainLayer, function(){console.log(/*'Hitting Mountain'*/); });
        game.physics.arcade.overlap(player1, souls, PickupSoul, null, this);
        game.physics.arcade.overlap(player1, MachineGun, PickupMachineGun, null, this);
        game.physics.arcade.overlap(player1, ShotGun, PickupShotGun, null, this);
        game.physics.arcade.overlap(player1, health, PickupHealth, null, this);

        // Bullet collision
        game.physics.arcade.collide(weapon.bullets, RocksLayer, function(bullet){bullet.kill();});
        game.physics.arcade.collide(weapon.bullets, GrassLayer, function(bullet){bullet.kill();});
        game.physics.arcade.collide(weapon.bullets, TreesLayer, function(bullet){bullet.kill();});
        game.physics.arcade.collide(weapon.bullets, MountainLayer, function(bullet){bullet.kill();});
        game.physics.arcade.overlap(weapon.bullets, enemies, killZombie, null, this);

        // Enemy collision
        game.physics.arcade.collide(enemies, RocksLayer, function(){console.log(/*'Hitting Rocks'*/); });
        game.physics.arcade.collide(enemies, GrassLayer, function(){console.log(/*'Hitting Grass'*/); });
        game.physics.arcade.collide(enemies, TreesLayer, function(){console.log(/*'Hitting Trees'*/); });
        game.physics.arcade.collide(enemies, MountainLayer, function(){console.log(/*'Hitting Mountain'*/); });
        game.physics.arcade.collide(enemies, enemies);

        // Door collision
        game.physics.arcade.overlap(player1, GreenDoor, OpenDoor, null, this);
        game.physics.arcade.collide(GreenDoor, player1, function(){/*console.log('Hitting Door');*/ });
        game.physics.arcade.collide(enemies, GreenDoor, function(){/*console.log('Hitting Door');*/ });

        // Key collision
        game.physics.arcade.overlap(player1, GreenKey, PickupKey, null, this);

        fullscreenButton.x = game.camera.x + 0;
        fullscreenButton.y = game.camera.y + 0;


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

                // Movement with physics
                player1.body.velocity.x += speed/50 * stick.x;
                player1.body.velocity.y += speed/50 * stick.y;

                // // Movement without physics (movement with physics needs turned off)
                // player1.body.velocity.x = speed * stick.x;
                // player1.body.velocity.y = speed * stick.y;

                // Stop the playeracceleration getting above 200
                if(player1.body.velocity.x > 200)
                {
                    player1.body.velocity.x = 200;
                }
                if(player1.body.velocity.y > 200)
                {
                    player1.body.velocity.y = 200;
                }
                if(player1.body.velocity.x < -200)
                {
                    player1.body.velocity.x = -200;
                }
                if(player1.body.velocity.y < -200)
                {
                    player1.body.velocity.y = -200;
                }
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

            // Fire Machine Gun
            if((game.input.activePointer.leftButton.isDown) && (player1.gun === 'MachineGun'))
            {
                weapon.fireLimit = 0;
                weapon.bulletAngleVariance = 2;
                weapon.multiFire = false;
                MouseFire();
            }

            // Fire Pistol
            if((game.input.activePointer.leftButton.justPressed()) && (player1.gun === 'pistol'))
            {
                weapon.fireLimit = 0;
                weapon.bulletAngleVariance = 0;
                weapon.fireRate = 300;
                MouseFire();
            }

            // Fire ShotGun
            if((game.input.activePointer.leftButton.justPressed()) && (player1.gun === 'ShotGun'))
            {
                weapon.fireRate = 300;

                MouseFire();
            }


            // reset the multiFire flag on buttons release
            if(game.input.activePointer.leftButton.justReleased())
            {
                weapon.multiFire = true;
            }
        }

        // set fire rate when machine gun is picked up
        if(player1.gun === 'MachineGun')
        {
            fireButton.repeatRate = 100;
        }
        else
        {
            fireButton.repeatRate = 5000;
        }




        justSpawned--;

        if(game.physics.arcade.distanceBetween(Spawn1, player1) < 10000)
        {
            if(justSpawned < 1)
            {
                createZombie();
                justSpawned = 10;
            }

            // //  Set-up a simple repeating timer
            // game.time.events.repeat(Phaser.Timer.SECOND, 20, createZombie, this);
        }

        // Set the enemy movement and animations
        enemies.forEach(function (enemy1) {
            if(enemy1) {
                if ((game.physics.arcade.distanceBetween(enemy1, player1) < 10000) && (enemy1.health > 0))// and dead flag not triggered
                {

                    // currentX = enemy1.x;
                    // currentY = enemy1.y;
                    // if()
                    enemy1.play('walk');
                    game.physics.arcade.moveToObject(enemy1, player1, enemySpeed, null);
                    enemy1.rotation = game.physics.arcade.angleToXY(enemy1, player1.x, player1.y);


                    if (game.physics.arcade.distanceBetween(enemy1, player1) < 20) {
                        //console.log('EnemyEating');
                        // enemy1.animations.stop('walk');
                        // enemy1.animations.add('grab', [4,5,6,7], 30, true);
                        //enemy1.play('grab');
                        game.physics.arcade.moveToObject(enemy1, player1, 0, null);
                    }
                    else {
                        enemy1.play('walk');
                        game.physics.arcade.moveToObject(enemy1, player1, enemySpeed, null);
                    }

                }
                else {
                    enemy1.animations.stop('walk');
                    game.physics.arcade.moveToObject(enemy1, player1, 0, null)
                }
            }
            // game.physics.arcade.overlap(enemy1, player1, RestartGame, null, this)
            game.physics.arcade.overlap(enemy1, player1, cropLife, null, this)



        });



        this.life.updateCrop();

    },

    render: function() {
        game.debug.text(game.time.fps + ' FPS', 900, 14, "#00ff00");
        game.debug.text('justSpawned: ' + justSpawned, 250, 30);
        game.debug.text('Souls: ' + player1.souls, 280, 14);
        game.debug.text('Gun: ' + player1.gun, 750, 14);
       //game.renderSettings.enableScrollDelta = false;

        // // Debug to view collision boxes
        // game.debug.body(player1);
        // game.debug.physicsGroup(bullets);
        // game.debug.physicsGroup(enemies);
        // game.debug.body(MachineGun);
    }

};

function OpenDoor(player, door) {
    if((door.name === 'GreenDoor') && (player1.greenKey))
    {
        door.kill();
    }
}

function PickupKey(player, key) {

    if(key.name === 'GreenKey')
    {
        player.greenKey = true;
    }
    key.kill();
}

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
    //enemy1.body.enable = false;

    enemy1.animations.stop('walk');
    animHit = enemy1.animations.add('shot', [8,9,10,11,12,13,14,15,16,17], 100, false);
    animHit.onComplete.add(hitZombie, this);
    animHit.play(true);


    if(enemy1.health < 1)
    {
        //game.physics.arcade.moveToObject(enemy1,player1,0, null);
        enemy1.body.enable = false;
        animDeath = enemy1.animations.add('die1',[18,19,20,21,22], 10, false);
        animDeath.onComplete.add(killTheZombie, this);
        //enemy1.animations.play('die1');
        //enemy1.kill();
        // animDeath.onComplete.add(killZombie, this);
        animDeath.play(true);
    }

    function killTheZombie(){
        enemyDeathLoc = enemy1;
        enemy1.kill();
        soul = souls.getFirstDead();
        soul.reset(enemyDeathLoc.x, enemyDeathLoc.y);
        //soul = game.add.sprite(enemyDeathLoc.x, enemyDeathLoc.y, 'Soul', 1);
        soul.scale.set(0.5);
        soulAnim = soul.animations.add('pulse', [0,1,2,3,4,5], 10, true);
        soulAnim.play();
    }

    function hitZombie(){
        enemy1.body.enable = true;
        game.physics.arcade.moveToObject(enemy1,player1,enemySpeed, null);
    }

}

function PickupHealth(){
    console.log('health picked up');
    if(widthLife.width < totalLife)
    {
        health.kill();
        widthLife.width = totalLife;
        if(healthCount < 4)
        {
            createHealth();
        }
    }


}

function PickupSoul(player1, soulAnim){
    console.log('hit soul');
    soulAnim.kill();
    player1.souls++;
}

function PickupMachineGun(player1, MachineGun){
    console.log('picked up machinegun');
    player1.gun = 'MachineGun';
    MachineGun.kill();
}

function PickupShotGun(player1, ShotGun){
    console.log('picked up shotgun');
    player1.gun = 'ShotGun';
    ShotGun.kill();
}

function createZombie() {

    // Recycle using getFirstExists(false)
    // Notice that this method will not create new objects if there's no one
    // available, and it won't change size of this group.
    enemy1 = enemies.getFirstDead();
    if (enemy1)
    {
        enemy1.body.enable = true;
        enemy1.reset(game.world.randomX, game.world.randomY);
        enemy1.health = 3;
        enemy1.body.immovable = false;
        enemy1.spawnlocationX = enemy1.x;
        enemy1.spawnlocationY = enemy1.y;
    }

}

function createHealth() {

    if(healthCount === 0)
    {
        healthLocationX = 200;
        healthLocationY = 200;
        healthCount = 1;
    }
    else if(healthCount === 1)
    {
        healthLocationX = 3034;
        healthLocationY = 200;
        healthCount = 2;
    }
    else if(healthCount === 2)
    {
        healthLocationX = 200;
        healthLocationY = 3034;
        healthCount = 3;
    }
    else if(healthCount === 3)
    {
        healthLocationX = 3034;
        healthLocationY = 3034;
        healthCount = 4;
    }

    // Recycle using getFirstExists(false)
    // Notice that this method will not create new objects if there's none
    // available, and it won't change size of this group.
    health = lifePickups.getFirstDead();
    console.log('health created');
    health.reset(healthLocationX, healthLocationY);
    // lifePickups = health.animations.add('bounce', [0,1,2,3,4,5], 14, true);
    // lifePickups.play('bounce');
    health.body.enable = true;
    //health.body.immovable = true;



}

function RestartGame() {
    game.state.start('Level2');
}

function MouseFire() {

    // offset to fire from end of gun
    weapon.trackOffset.x = 45;

    if((!weapon._hasFired) && (player1.gun === "pistol"))
    {
        player1.animations.play('shoot', 30, false);
        weapon.fire();
        weapon._hasFired = true;
    }

    if((player1.gun === 'MachineGun'))
    {
        console.log('firing machine gun');
        player1.animations.play('shoot', 30, false);
        weapon.fire();
    }

    //weapon._hasFired = true;
    if((!weapon._hasFired) && (player1.gun === 'ShotGun'))
    {
        for(var i = 0; i < shotgunRounds; i++)
        {
            weapon.bulletAngleVariance = 20;
            weapon.fire();
        }
        player1.animations.play('shoot', 30, false);

    }

}

function GamepadFire(){

    // offset to fire from end of gun
    weapon.trackOffset.x = 45;

    if(player1.gun === 'MachineGun')
    {
        fireButton.repeatRate = 100;
        weapon.fireLimit = 0;
        weapon.bulletAngleVariance = 2;
        weapon.multiFire = false;
        weapon.fire();
        player1.animations.play('shoot', 30, false);
    }

    // Fire Pistol
    if(player1.gun === 'pistol')
    {
        weapon.fireLimit = 0;
        weapon.bulletAngleVariance = 0;
        weapon.fireRate = 300;
        weapon.fire();
        player1.animations.play('shoot', 30, false);
    }

    // Fire ShotGun
    if((player1.gun === 'ShotGun'))
    {
        fireButton.repeatRate = 5000;
        weapon.fireLimit = 0;
        weapon.multiFire = true;
        for(var i = 0; i < shotgunRounds; i++)
        {
            weapon.bulletAngleVariance = 20;
            weapon.fire();
        }
        // weapon.bulletAngleVariance = 20;
        // weapon.fire();
        // weapon.bulletAngleVariance = 20;
        // weapon.fire();
        player1.animations.play('shoot', 30, false);
        weapon.fireRate = 300;
        //weapon.multiFire = false;
    }



}

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