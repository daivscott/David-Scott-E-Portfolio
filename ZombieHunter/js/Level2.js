zhgame.Level2 = function(){};
zhgame.Level2.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#DDDDDD';
        console.log('Level2');

        AddChangeStateEventListeners();
    },
    update: function(){}
};