var ref, hsText = [], hs = [5, 4, 3, 2, 1];

zhgame.HighScoreTable = function(){};
zhgame.HighScoreTable.prototype = {
    preload: function(){},
    init: function(){

        this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignVertically = true;
        this.scale.pageAlignHorizontally = true;
        this.game.scale.refresh();
        //game.scale.startFullScreen(true);

    },
    create: function(){
        // set background colour
        game.stage.backgroundColor = '#000000';
        // addChangeStateEventListener();

        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyC0UpYALegB9F-dhn1PRfk0cigg6MMXzM4",
            authDomain: "david-scott-e-portfolio.firebaseapp.com",
            databaseURL: "https://david-scott-e-portfolio.firebaseio.com",
            projectId: "david-scott-e-portfolio",
            storageBucket: "david-scott-e-portfolio.appspot.com",
            messagingSenderId: "422279600051"
        };
        firebase.initializeApp(config);

        ref = firebase.database().ref();


        for(var i = 1; i < 6; i++)
        {
            game.add.text(500, 20 + (i * 90), i + '. ', {fontSize: '40px', fill: '#ff2218'}).anchor.setTo(1, 0);

        }

        for(var i = 0; i < 5; i++)
        {
            hsText[i] = game.add.text(500, 20 + ((i + 1) * 90), '', {fontSize: '40px', fill: '#ff2218'});
        }

        var updateHSText = this.updateHSText;
        ref.on('value', function(snapshot){
            updateHSText(snapshot.val().hs);
        });

    },
    updateHSText: function(hs){
        for(var i = 0; i < 5; i++)
        {
            hsText[i].text = hs[i];
        }
    }
}