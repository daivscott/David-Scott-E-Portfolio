var instructionsTitleText, storyTitleText;


zhgame.Story = function(){};
zhgame.Story.prototype = {
    preload: function(){},
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

        // instructionsTitleText = game.add.text(550, 40, 'Story', { font: "1px Fighting Spirit turbo", fill: '#ff0000' });
        // instructionsTitleText.anchor.set(0.5);
        storyTitleText = game.add.text(550, 110, 'STORY', { font: "40px Arial", fill: '#ffffff' });
        storyTitleText.anchor.set(0.5);
        storyText = game.add.text(290, 200.1, 'The 5th cycle of the Sun brought biological devastation\n' +
            'to 90% of the earths inhabitants through \' The Great Flash\' \n' +
            'All the lost souls were left trapped in their distorted\n' +
            'corpses roaming the earth in torment. Our heroes calling is\n' +
            'to free all those souls from their twisted bodies before the\n' +
            'next solar flash where he will be allowed to ascend to the\n' +
            '4th dimension. To pass through he must collect over 200 \n' +
            'souls and find 4 keys of light to grant safe passage.\n' +
            'Can you be that hero? ', { font: "22px", fill: '#ff0000' });
        //storyText.anchor.set(0.5);

    }


};












