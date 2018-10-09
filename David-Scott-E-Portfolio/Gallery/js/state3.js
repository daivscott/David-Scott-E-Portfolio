zhgame.state3 = function(){};
zhgame.state3.prototype = {
    preload: function(){
        game.load.image("tableFull", "assets/sprites/FruitProject/PerspectiveFullSceneCamera2.png");
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
        //console.log('Level1');

        AddChangeStateEventListeners();

        pic = game.add.button(0, 0, "tableFull", this.clickMe, this, 0, 1, 0);

    },
    update: function(){},

    clickMe: function(){
        game.state.start('Thumb1');
    }
};