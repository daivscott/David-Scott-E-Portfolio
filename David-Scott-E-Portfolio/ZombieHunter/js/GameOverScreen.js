var scoreText, dispItems;

zhgame.GameOverScreen = function(){};
zhgame.GameOverScreen.prototype = {
    init: function(FinalScore){

        this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignVertically = true;
        this.scale.pageAlignHorizontally = true;
        this.game.scale.refresh();
        //game.scale.startFullScreen(true);

    },
    preload: function(){

        game.load.image("gameover", "assets/sprites/GameOverScreen/GameOverScreen.png");
        game.load.image("continue", "assets/sprites/GameOverScreen/ContinueMessage.png");
        game.load.image("mobileContinue", "assets/sprites/GameOverScreen/MobileContinueMessage.png");
        game.load.audio("scream", "assets/audio/Scream.mp3");

    },
    create: function(){
        game.stage.backgroundColor = '#000000';

        game.menuTheme.stop();

        // Create scream sound and play
        var screamSound = game.add.audio('scream');
        screamSound.play();


        AddChangeStateEventListeners();

        //var screenWidth = document.getElementById("parentDiv").clientWidth;
        dispItems = game.add.group();

        backgroud = dispItems.create(550, 250,/* 1920, 1080,*/ 'gameover');
        backgroud.anchor.setTo(0.5,0.5);
        backgroud.scale.x = 0.43;
        backgroud.scale.y = 0.43;


        if(!Phaser.Device.desktop)
        {
            var mobileContinueMessage = game.add.tileSprite(550, 370, 1920, 1080, 'mobileContinue');
            mobileContinueMessage.anchor.setTo(0.5, 0.5);
            mobileContinueMessage.scale.x = 0.43;
            mobileContinueMessage.scale.y = 0.43;
            mobileContinueMessage.alpha = 0;

            game.add.tween(mobileContinueMessage).to( { alpha: 1 }, 500, Phaser.Easing.Linear.None, true, 0, 1000, true);
            DisableStick();
        }
        else {


            var continueMessage = game.add.tileSprite(550, 370, 1920, 1080, 'continue');
            continueMessage.anchor.setTo(0.5, 0.5);
            continueMessage.scale.x = 0.43;
            continueMessage.scale.y = 0.43;
            continueMessage.alpha = 0;

            game.add.tween(continueMessage).to( { alpha: 1 }, 500, Phaser.Easing.Linear.None, true, 0, 1000, true);
            DisableStick();


        }



        //game.add.tween(continueMessage).to( { alpha: 1 }, 500, Phaser.Easing.Linear.None, true, 0, 1000, true);

        // function DisableStick() {
        //
        //     // disable and hide mobile controls
        //     stick.enabled = false;
        //     stick.visible = false;
        //     fireButton.visible = false;
        // }

    },
    update: function(){
        if((game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))||(game.input.pointer1.isDown))
        {
            game.state.start('HighScoreTable');
        }

        dispItems.scoreText = game.add.text(540, 30, 'Score = ' + FinalScore, { font: "35px Fighting Spirit turbo", fill: '#ff0000' });
        dispItems.scoreText.anchor.set(0.5);
    },

    // render: function(){
    //     game.debug.text('Score: ' + FinalScore, 540, 50);
    // }


};

function DisableStick() {

    // disable and hide mobile controls
    stick.enabled = false;
    stick.visible = false;
    fireButton.visible = false;
}

