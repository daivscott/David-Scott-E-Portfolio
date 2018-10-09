var game = new Phaser.Game(800, 600, Phaser.AUTO); // can set how big camera view is here
//var game = new Phaser.Game(1920, 1080, Phaser.AUTO);
// const SAFE_ZONE_WIDTH=1200;const SAFE_ZONE_HEIGHT=900;
// var game = new Phaser.Game( SAFE_ZONE_WIDTH, SAFE_ZONE_HEIGHT, Phaser.AUTO, 'game_div');
game.state.add('Level0', zhgame.Level0);
game.state.add('Level1', zhgame.Level1);
game.state.add('Level2', zhgame.Level2);
game.state.start('Level0');
