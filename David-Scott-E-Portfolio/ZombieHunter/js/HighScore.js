var ref, fbObj, hsText = [];

zhgame.HighScoreTable2 = function(){};
zhgame.HighScoreTable2.prototype = {
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
            fbObj = snapshot.val();
            updateHSText(fbObj.hs);
        });

        // Create a label to use as a 'Clear' button
        pause_label = game.add.text(280, 125, 'CLEAR', { font: '35px Arial', fill: '#fff' });
        pause_label.inputEnabled = true;
        pause_label.events.onInputUp.add(function () {
            // When the 'Clear' button is pressed run clear the hsText array
            ref.set({hs: [0, 0, 0, 0, 0]});
        });

        // Create a label to use as a 'Add Score' button
        pause_label = game.add.text(700, 125, 'ADD SCORE', { font: '35px Arial', fill: '#fff' });
        pause_label.inputEnabled = true;
        pause_label.events.onInputUp.add(function () {
            // When the 'ADD SCORE' button is pressed add random score
            var score = Math.round(Math.random() * 100);
            fbObj.hs.push(score);
            fbObj.hs = fbObj.hs.sort(function (a, b) {
                return b - a;
            }).slice(0, 5);
            ref.set(fbObj);
            console.log(score);
        });

    },
    updateHSText: function(hs){
        for(var i = 0; i < 5; i++)
        {
            hsText[i].text = hs[i];
        }
    }
}

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (var i = 0; i < 3; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}