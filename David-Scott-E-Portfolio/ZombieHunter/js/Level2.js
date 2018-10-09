zhgame.Level2 = function(){};
zhgame.Level2.prototype = {
    preload: function(){
        game.load.image("background", "assets/sprites/FruitProject/FruitCloseCamera.png");
    },
    create: function(){
        game.stage.backgroundColor = '#DDDDDD';
        //console.log('Level2');

        AddChangeStateEventListeners();

        var pic = game.add.tileSprite(0, 0, 1920, 1080, 'background');
        pic.scale.x = 0.5;
        pic.scale.y = 0.5;
    },
    update: function(){}
};

// main.jsvar game = new Phaser.Game(1000, 600, Phaser.CANVAS, 'game_div');var main_state = {
// preload: function() {
// game.load.image("background", "http://gametest.mobi/phaser095/assets/pics/aya_touhou_teng_soldier.png");
// },
// create: function() {
// game.add.tileSprite(0, 0, 1000, 600, 'background');
// },
//
// update: function() {    }};
// game.state.add('main', main_state);
// game.state.start('main');