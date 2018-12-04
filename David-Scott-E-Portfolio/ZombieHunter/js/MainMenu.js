var zhgame = {}, gameTitleText, menuTitleText;


zhgame.MainMenu = function(){};
zhgame.MainMenu.prototype = {
    preload: function(){},
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
        playGameBtnShadow = game.add.text(550, 200, 'Play Game', { font: '37px Fighting Spirit turbo', fill: '#ffffff' });
        playGameBtnShadow.anchor.set(0.5);
        playGameBtnShadow.inputEnabled = true;

        // Create a label to use as a 'Play' button
        playGameBtn = game.add.text(550, 200, 'Play Game', { font: '35px Fighting Spirit turbo', fill: '#ff0000' });
        playGameBtn.anchor.set(0.5);
        playGameBtn.inputEnabled = true;
        playGameBtn.events.onInputUp.add(function () {
            changeFullscreen();
            // Start Game
            game.state.start('Level1');
        });


        highscoreBtnShadow = game.add.text(550, 300, 'Highscores', { font: '37px Fighting Spirit turbo', fill: '#ffffff' });
        highscoreBtnShadow.anchor.set(0.5);
        highscoreBtnShadow.inputEnabled = true;

        // Create a label to use as a 'Play' button
        highscoreBtn = game.add.text(550, 300, 'Highscores', { font: '35px Fighting Spirit turbo', fill: '#ff0000' });
        highscoreBtn.anchor.set(0.5);
        highscoreBtn.inputEnabled = true;
        highscoreBtn.events.onInputUp.add(function () {
            changeFullscreen();
            // Load Highscores
            game.state.start('HighScoreTable');
        });

    },




    //----UPDATE FUNCTION----------------------------------------------------------------------------
    update: function(){
        if(playGameBtn.input.pointerOver())
        {
            playGameBtnShadow.alpha = 1;
        }
        else
        {
            playGameBtnShadow.alpha = 0;
        }

        if(highscoreBtn.input.pointerOver())
        {
            highscoreBtnShadow.alpha = 1;
        }
        else
        {
            highscoreBtnShadow.alpha = 0;
        }
        gameTitleText = game.add.text(550, 40, 'Zombie Hunter', { font: "75px Fighting Spirit turbo", fill: '#ff0000' });
        gameTitleText.anchor.set(0.5);
        menuTitleText = game.add.text(550, 110, 'MAIN MENU', { font: "40px Arial", fill: '#ffffff' });
        menuTitleText.anchor.set(0.5);

    }


};

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








