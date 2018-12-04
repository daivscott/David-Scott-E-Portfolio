var ref, fbObj, hsText = [], hs = [5, 4, 3, 2, 1], dispItems, scoreChecked = false;

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

        //
            // Initialize Firebase
            var config = {
                apiKey: "AIzaSyC0UpYALegB9F-dhn1PRfk0cigg6MMXzM4",
                authDomain: "david-scott-e-portfolio.firebaseapp.com",
                databaseURL: "https://david-scott-e-portfolio.firebaseio.com",
                projectId: "david-scott-e-portfolio",
                storageBucket: "david-scott-e-portfolio.appspot.com",
                messagingSenderId: "422279600051"
            };
        if(!scoreChecked) {
            firebase.initializeApp(config);
        }

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
            // console.log(snapshot.val());
            fbObj = snapshot.val();
            updateHSText(fbObj.hs);
        });

        // Create a label to use as a 'Clear' button
        clear_label = game.add.text(280, 125, 'CLEAR', { font: '35px Arial', fill: '#fff' });
        clear_label.inputEnabled = true;
        clear_label.events.onInputUp.add(function () {
            // When the 'Clear' button is pressed run clear the hsText array
            ref.set({hs:[{score: 5, pName: 'COM'}, {score: 4, pName: 'COM'}, {score: 3, pName: 'COM'}, {score: 2, pName: 'COM'}, {score: 1, pName: 'COM'}]});
        });

        // // Create a label to use as a 'Add Score' button
        // score_label = game.add.text(700, 125, 'ADD SCORE', { font: '35px Arial', fill: '#fff' });
        // score_label.inputEnabled = true;
        // score_label.events.onInputUp.add(function () {
        //     // When the 'ADD SCORE' button is pressed add random score
        //     var score = FinalScore;
        //     // var score = Math.round(Math.random() * 100);
        //     var pName = makeid();
        //     var tempObj = {score, pName}
        //     fbObj.hs.push(tempObj);
        //     console.log('temp = ' + tempObj);
        //     fbObj.hs = fbObj.hs.sort(function (a, b) {
        //         return b.score - a.score;
        //     }).slice(0, 5);
        //
        //     ref.set(fbObj);
        //     //console.log(score);
        // });

        game.time.events.add(Phaser.Timer.SECOND * 1, pasteScore, this);



    },
    update: function(){
        // if((hs[4].score < FinalScore))
        // {
        //     game.state.start('InputName');
        // }

        dispItems.scoreText = game.add.text(540, 30, 'Score = ' + FinalScore, { font: "35px Fighting Spirit turbo", fill: '#ff0000' });
        dispItems.scoreText.anchor.set(0.5);
    },
    updateHSText: function(hs){
        for(var i = 0; i < 5; i++)
        {
            hsText[i].text = hs[i].pName + ' ' + hs[i].score;
        }
        if((hs[4].score < FinalScore) && (!scoreChecked))
        {
            ref = null;
            config = null;
            game.state.start('InputName');
            scoreChecked = true;
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

function pasteScore() {
    var score = FinalScore;
    var pName = PASSEDNAME;
    var tempObj = {score, pName};
    fbObj.hs.push(tempObj);
    console.log('temp = ' + tempObj);
    fbObj.hs = fbObj.hs.sort(function (a, b) {
        return b.score - a.score;
    }).slice(0, 5);

    ref.set(fbObj);
}

function checkScore(hs){
    // if((hs[4].score < FinalScore))
    // {
    //     game.state.start('InputName');
    // }
    // console.log('checking score ' + hs[4].score);
}