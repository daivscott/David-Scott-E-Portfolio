var game = new Phaser.Game(1920, 1080, Phaser.AUTO); // can set how big camera view is here

game.state.add('Thumb1', zhgame.Thumb1);
game.state.add('Thumb2', zhgame.Thumb2);

game.state.add('state1', zhgame.state1);
game.state.add('state2', zhgame.state2);
game.state.add('state3', zhgame.state3);
game.state.add('state4', zhgame.state4);
game.state.add('state5', zhgame.state5);
game.state.add('state6', zhgame.state6);
game.state.add('state7', zhgame.state7);
game.state.add('state8', zhgame.state8);
game.state.add('state9', zhgame.state9);
game.state.add('state10', zhgame.state10);
game.state.add('state11', zhgame.state11);
game.state.add('state12', zhgame.state12);
game.state.start('Thumb1');
