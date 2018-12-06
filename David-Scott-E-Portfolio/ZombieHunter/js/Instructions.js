var background, timer = 0;


zhgame.Instructions = function(){};
zhgame.Instructions.prototype = {
    preload: function(){
        // game.instructionbg = game.load.image('background', 'assets/sprites/Instructions/Instructions2.png');
    },
    init: function(){
        this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignVertically = true;
        this.scale.pageAlignHorizontally = true;
        this.game.scale.refresh();
        //game.scale.startFullScreen(true);
    },
    //
    //----CREATE FUNCTION----------------------------------------------------------------------------
    create: function(){



        game.instructionbg = game.add.sprite(0, 0, 'background');

        mainMenuBtnShadow = game.add.text(550, 580, 'Main Menu', { font: '37px Fighting Spirit turbo', fill: '#ffffff' });
        mainMenuBtnShadow.anchor.set(0.5);
        mainMenuBtnShadow.inputEnabled = true;

        // Create a label to use as a 'Play' button
        mainMenuBtn = game.add.text(550, 580, 'Main Menu', { font: '35px Fighting Spirit turbo', fill: '#ff0000' });
        mainMenuBtn.anchor.set(0.5);
        mainMenuBtn.inputEnabled = true;
        mainMenuBtn.events.onInputUp.add(function () {
            ref = null;
            config = null;
            game.state.start('MainMenu');
        });


        //DisableStick();

    },


    //----UPDATE FUNCTION----------------------------------------------------------------------------
    update: function(){

        timer += game.time.elapsed;

        if ( timer >= 500 )
        {

            timer -= 500;
            tweenTint(mainMenuBtn, 0x0000ff, 0xff0000, 2000);

        }

        if(mainMenuBtn.input.pointerOver())
        {
            mainMenuBtnShadow.alpha = 1;
        }
        else
        {
            mainMenuBtnShadow.alpha = 0;
        }

    }

};











