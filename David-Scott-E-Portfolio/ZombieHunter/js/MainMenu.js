var gameTitleText, menuTitleText, fullscreenActive = false;


zhgame.MainMenu = function(){};
zhgame.MainMenu.prototype = {
    preload: function(){
        game.load.audio("menuTheme", "assets/audio/darkshadow.mp3");
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

        game.completeTheme.stop();

        if(!game.menuTheme) {
            game.menuTheme = game.add.audio('menuTheme', 1, true);

        }

        game.menuTheme.play();

        playGameBtnShadow = game.add.text(550, 200, 'Play Game', { font: '37px Fighting Spirit turbo', fill: '#ffffff' });
        playGameBtnShadow.anchor.set(0.5);
        playGameBtnShadow.inputEnabled = true;

        // Create a label to use as a 'Play' button
        playGameBtn = game.add.text(550, 200, 'Play Game', { font: '35px Fighting Spirit turbo', fill: '#ff0000' });
        playGameBtn.anchor.set(0.5);
        playGameBtn.inputEnabled = true;
        playGameBtn.events.onInputUp.add(function () {
            if(!fullscreenActive)
            {
                changeFullscreen();
                fullscreenActive = true;
            }
            scoreChecked = false;
            // Start Game
            game.state.start('Level1');
        });


        highscoreBtnShadow = game.add.text(550, 250, 'Highscores', { font: '37px Fighting Spirit turbo', fill: '#ffffff' });
        highscoreBtnShadow.anchor.set(0.5);
        highscoreBtnShadow.inputEnabled = true;

        // Create a label to use as a 'Play' button
        highscoreBtn = game.add.text(550, 250, 'Highscores', { font: '35px Fighting Spirit turbo', fill: '#ff0000' });
        highscoreBtn.anchor.set(0.5);
        highscoreBtn.inputEnabled = true;
        highscoreBtn.events.onInputUp.add(function () {
            //changeFullscreen();
            // Load Highscores
            game.state.start('HighScoreTable');
        });

        instructionsBtnShadow = game.add.text(550, 300, 'Instructions', { font: '37px Fighting Spirit turbo', fill: '#ffffff' });
        instructionsBtnShadow.anchor.set(0.5);
        instructionsBtnShadow.inputEnabled = true;

        // Create a label to use as a 'Play' button
        instructionsBtn = game.add.text(550, 300, 'Instructions', { font: '35px Fighting Spirit turbo', fill: '#ff0000' });
        instructionsBtn.anchor.set(0.5);
        instructionsBtn.inputEnabled = true;
        instructionsBtn.events.onInputUp.add(function () {
            // Open instructions
            game.state.start('Instructions');
        });

        storyBtnShadow = game.add.text(550, 350, 'Story', { font: '37px Fighting Spirit turbo', fill: '#ffffff' });
        storyBtnShadow.anchor.set(0.5);
        storyBtnShadow.inputEnabled = true;

        // Create a label to use as a 'Play' button
        storyBtn = game.add.text(550, 350, 'Story', { font: '35px Fighting Spirit turbo', fill: '#ff0000' });
        storyBtn.anchor.set(0.5);
        storyBtn.inputEnabled = true;
        storyBtn.events.onInputUp.add(function () {
            // Open story
            game.state.start('Story');
        });

        exitBtnShadow = game.add.text(550, 400, 'Exit', { font: '37px Fighting Spirit turbo', fill: '#ffffff' });
        exitBtnShadow.anchor.set(0.5);
        exitBtnShadow.inputEnabled = true;

        // Create a label to use as a 'Play' button
        exitBtn = game.add.text(550, 400, 'Exit', { font: '35px Fighting Spirit turbo', fill: '#ff0000' });
        exitBtn.anchor.set(0.5);
        exitBtn.inputEnabled = true;
        exitBtn.events.onInputUp.add(function () {
            // exit game
            window.location.href = "https://david-scott-e-portfolio.firebaseapp.com";
        });

        FinalScore = 0;

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

        if(instructionsBtn.input.pointerOver())
        {
            instructionsBtnShadow.alpha = 1;
        }
        else
        {
            instructionsBtnShadow.alpha = 0;
        }

        if(storyBtn.input.pointerOver())
        {
            storyBtnShadow.alpha = 1;
        }
        else
        {
            storyBtnShadow.alpha = 0;
        }

        if(exitBtn.input.pointerOver())
        {
            exitBtnShadow.alpha = 1;
        }
        else
        {
            exitBtnShadow.alpha = 0;
        }
        var style = { font: "75px Fighting Spirit turbo", fill: '#ff0000' };
        gameTitleText = game.add.text(550, 40, 'Zombie Hunter', style);
        gameTitleText.anchor.set(0.5);
        menuTitleText = game.add.text(550, 110, 'MAIN MENU', { font: "40px Arial", fill: '#ffffff' });
        menuTitleText.anchor.set(0.5);

    }


};










