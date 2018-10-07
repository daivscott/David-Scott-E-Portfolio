zhgame.Level1 = function(){};
zhgame.Level1.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#0000ff';
        //console.log('Level1');

        AddChangeStateEventListeners();
    },
    update: function(){}
};