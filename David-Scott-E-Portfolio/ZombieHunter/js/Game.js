var game = new Phaser.Game(1500, 1000, Phaser.AUTO);
game.state.add('Level0', zhgame.Level0);
game.state.add('Level1', zhgame.Level1);
game.state.add('Level2', zhgame.Level2);
game.state.start('Level0');
