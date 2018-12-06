var zhgame = {}, loadingNotification;

zhgame.PreloadState = function(){};
zhgame.PreloadState.prototype = {
    preload: function(){
        game.instructionbg = game.load.image('background', 'assets/sprites/Instructions/Instructions2.png');
        game.load.audio("completeTheme", "assets/audio/deadend_long.mp3");
    },
    init: function(){

        this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignVertically = true;
        this.scale.pageAlignHorizontally = true;
        this.game.scale.refresh();
        //game.scale.startFullScreen(true);

    },
    create: function(){

        game.completeTheme = game.add.audio('completeTheme', 1, true);

        //HACK TO PRELOAD A CUSTOM FONT
        loadingNotification = game.add.text(game.world.centerX, game.world.centerX, "Loading...", {font:"75px px Fighting Spirit turbo", fill:"#FF0000"});
        loadingNotification.anchor.setTo(0.5);

        // game.state.start('MainMenu');

        game.time.events.add(Phaser.Timer.SECOND * 1, LoadGame, this);

        // //  Create Timer
        // var timer = game.time.create(false);
        //
        // //  Set load game to occur after 2 seconds
        // timer.loop(10000, LoadGame, this);
        //
        // // Sart timer
        // timer.start();

    },

}
function LoadGame() {

    //timer.stop();
    game.state.start('Story');

}

function tweenTint(obj, startColor, endColor, time) {
    // create an object to tween with our step value at 0
    var colorBlend = {step: 0};
    // create the tween on this object and tween its step property to 100
    var colorTween = game.add.tween(colorBlend).to({step: 100}, time);
    // run the interpolateColor function every time the tween updates, feeding it the
    // updated value of our tween each time, and set the result as our tint
    colorTween.onUpdateCallback(function() {
        obj.tint = Phaser.Color.interpolateColor(startColor, endColor, 100, colorBlend.step);
    });
    // set the object to the start color straight away
    obj.tint = startColor;
    // start the tween
    colorTween.start();
}

function changeFullscreen(){
    gofull();
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
