var scoreText;

zhgame.Level2 = function(){};
zhgame.Level2.prototype = {
    init: function(FinalScore){},
    preload: function(){

        // game.load.image("gameover", "assets/sprites/GameOverScreen/GameOverScreen.png");
        // game.load.image("restart", "assets/sprites/GameOverScreen/RestartMessage.png");
        // game.load.image("mobilerestart", "assets/sprites/GameOverScreen/MobileRestartMessage.png");
        game.load.audio("scream", "assets/audio/Scream.mp3");
        scoreText = game.add.text(32, 380, 'Score = ' + FinalScore /*, { font: "Fighting Spirit turbo"}*/);
        scoreText.anchor.set(0.5);
    },
    create: function(){
        game.stage.backgroundColor = '#000000';
        //console.log('Level2');
        var screamSound = game.add.audio('scream');

        screamSound.play();

        dispItems = game.add.group();

        AddChangeStateEventListeners();

        //var screenWidth = document.getElementById("parentDiv").clientWidth;


        // dispItems.create(550, 200, 1920, 1080, 'gameover');
        // // var backgroud = game.add.tileSprite(550, 200, 1920, 1080, 'gameover');
        // backgroud.anchor.setTo(0.5,0.5);
        // //backgroud.x = centreX;
        // backgroud.scale.x = 0.43;
        // backgroud.scale.y = 0.43;


        // if(!Phaser.Device.desktop)
        // {
        //     var mobileRestartMessage = game.add.tileSprite(550, 320, 1920, 1080, 'mobilerestart');
        //     mobileRestartMessage.anchor.setTo(0.5, 0.5);
        //     mobileRestartMessage.scale.x = 0.43;
        //     mobileRestartMessage.scale.y = 0.43;
        //     mobileRestartMessage.alpha = 0;
        //
        //     game.add.tween(mobileRestartMessage).to( { alpha: 1 }, 500, Phaser.Easing.Linear.None, true, 0, 1000, true);
        //     DisableStick();
        // }
        // else {
        //
        //     dispItems.create(550, 320, 1920, 1080, 'restart');
        //     // var restartMessage = game.add.tileSprite(550, 320, 1920, 1080, 'restart');
        //     restartMessage.anchor.setTo(0.5, 0.5);
        //     restartMessage.scale.x = 0.43;
        //     restartMessage.scale.y = 0.43;
        //     restartMessage.alpha = 0;
        //
        //     game.add.tween(restartMessage).to( { alpha: 1 }, 500, Phaser.Easing.Linear.None, true, 0, 1000, true);
        //     DisableStick();
        //
        //     dispItems.scoreText = game.add.text(32, 380, 'Score = ' + FinalScore /*, { font: "Fighting Spirit turbo"}*/);
        //     scoreText.anchor.set(0.5);
        //
        //     }



        //game.add.tween(restartMessage).to( { alpha: 1 }, 500, Phaser.Easing.Linear.None, true, 0, 1000, true);

        function DisableStick() {

            // disable and hide mobile controls
            stick.enabled = false;
            stick.visible = false;
            fireButton.visible = false;
        }
    },
    update: function(){
        if((game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))||(game.input.pointer1.isDown))
        {
            game.state.start('Level1');
        }
    },

    // render: function(){
    //     game.debug.text('Score: ' + FinalScore, 540, 50);
    // }


};

