zhgame.Level1 = function(){};
zhgame.Level1.prototype = {
    preload: function(){
        game.load.video('test', 'assets/TheCellTrailer.mp4');
    },
    create: function(){
        game.stage.backgroundColor = '#0000ff';
        //console.log('Level1');

        AddChangeStateEventListeners();

        vid = game.add.video('test');

        vid.play(true);

        //  x, y, anchor x, anchor y, scale x, scale y
        vid.addToWorld();

    },
    update: function(){}
};