var fullscreen = false, pic;

zhgame.state2 = function(){};
zhgame.state2.prototype = {
    preload: function(){
        // game.load.image("fruitClose", "assets/sprites/FruitProject/FruitCloseCamera.png");
        game.load.image("tableFPS", "assets/sprites/FruitProject/FPSViewAreaLightOnly.png");
        // game.load.image("tableFull", "assets/sprites/FruitProject/PerspectiveFullSceneCamera2.png");
        // game.load.image("rearLamp", "assets/sprites/FruitProject/RearLampCamera.png");
    },
    init: function(){

        this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignVertically = true;
        this.scale.pageAlignHorizontally = true;
        this.game.scale.refresh();

    },
    create: function(){
        game.stage.backgroundColor = '#000000';
        //console.log('Level2');

        AddChangeStateEventListeners();

        pic = game.add.button(0, 0, "tableFPS", this.clickMe, this, 0, 1, 0);
    },

    update: function(){

    },

    clickMe: function(){
        game.state.start('Thumb2');
    }

};


