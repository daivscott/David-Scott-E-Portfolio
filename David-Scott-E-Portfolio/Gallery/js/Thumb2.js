var thumbnailScale = 0.333;


zhgame.Thumb2 = function(){};
zhgame.Thumb2.prototype = {
    preload: function(){
        //game.load.video('test', 'assets/TheCellTrailer.mp4');
        /*game.load.image("fruitClose", "assets/sprites/FruitProject/FruitCloseCamera.png");
        game.load.image("tableFull", "assets/sprites/FruitProject/PerspectiveFullSceneCamera2.png");
        game.load.image("rearLamp", "assets/sprites/FruitProject/RearLampCamera.png");
        game.load.image("apples", "assets/sprites/FruitProject/singles/Apples.png");
        game.load.image("bananas", "assets/sprites/FruitProject/singles/Bananas.png");
        game.load.image("oranges", "assets/sprites/FruitProject/singles/Oranges.png");
        game.load.image("lamp", "assets/sprites/FruitProject/singles/Lamp.png");*/
        game.load.image("backPage1", "assets/sprites/BackPage1.png");
        game.load.image("forwardPage2", "assets/sprites/ForwardPage3.png");
        game.load.image("tableFPS", "assets/sprites/FruitProject/FPSViewAreaLightOnly.png");
        game.load.image("cherries", "assets/sprites/FruitProject/singles/Cherries.png");
        game.load.image("pear", "assets/sprites/FruitProject/singles/Pear.png");
        game.load.image("platter", "assets/sprites/FruitProject/singles/Platter.png");
        game.load.image("table", "assets/sprites/FruitProject/singles/Table.png");
        game.load.image("back", "assets/sprites/Back.png");
    },
    init: function(){

        this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignVertically = true;
        this.scale.pageAlignHorizontally = true;
        this.game.scale.refresh();

    },
    create: function(){

        // set game physics to arcade
        game.physics.startSystem(Phaser.Physics.ARCADE);

        // set background colour
        game.stage.backgroundColor = '#000000';

        // execute event listeners
        AddChangeStateEventListeners();

        picBack = game.add.button(100, 50, "backPage1", this.clickMe, this, 0, 1, 0);
        picBack.scale.x = 0.7;
        picBack.scale.y = 0.7;
        pic1 = game.add.button(640, 0, "tableFPS", this.clickMe, this, 0, 1, 0);
        pic1.scale.x = thumbnailScale;
        pic1.scale.y = thumbnailScale;
        pic2 = game.add.button(1280, 0, "cherries", this.clickMe, this, 0, 1, 0);
        pic2.scale.x = thumbnailScale;
        pic2.scale.y = thumbnailScale;

        pic3 = game.add.button(0, 360, "pear", this.clickMe, this, 0, 1, 0);
        pic3.scale.x = thumbnailScale;
        pic3.scale.y = thumbnailScale;
        pic4 = game.add.button(640, 360, "platter", this.clickMe, this, 0, 1, 0);
        pic4.scale.x = thumbnailScale;
        pic4.scale.y = thumbnailScale;
        pic5 = game.add.button(1280, 360, "table", this.clickMe, this, 0, 1, 0);
        pic5.scale.x = thumbnailScale;
        pic5.scale.y = thumbnailScale;

        // pic6 = game.add.button(0, 720, "oranges", this.clickMe, this, 0, 1, 0);
        // pic6.scale.x = thumbnailScale;
        // pic6.scale.y = thumbnailScale;
        // pic7 = game.add.button(640, 720, "lamp", this.clickMe, this, 0, 1, 0);
        // pic7.scale.x = thumbnailScale;
        // pic7.scale.y = thumbnailScale;
        // picNext = game.add.button(1480, 780, "forwardPage3", this.clickMe, this, 0, 1, 0);
        // picNext.scale.x = 0.7;
        // picNext.scale.y = 0.7;

    },

    update: function(){},

    clickMe: function(pic)
    {
        console.log('Clicked' + pic.key);
        if(pic.key == 'backPage1')
        {
            game.state.start('Thumb1');
        }
        if(pic.key == 'forwardPage3')
        {
            game.state.start('Thumb3');
        }
        if(pic.key == 'tableFPS')
        {
            game.state.start('state2');
        }
        if(pic.key == 'cherries')
        {
            game.state.start('state7');
        }
        if(pic.key == 'pear')
        {
            game.state.start('state10');
        }
        if(pic.key == 'platter')
        {
            game.state.start('state11');
        }
        if(pic.key == 'table')
        {
            game.state.start('state12');
        }
        // if(pic.key == 'bananas')
        // {
        //     game.state.start('state6');
        // }
        // if(pic.key == 'cherries')
        // {
        //     game.state.start('state7');
        // }
        // if(pic.key == 'lamp')
        // {
        //     game.state.start('state8');
        // }
        // if(pic.key == 'oranges')
        // {
        //     game.state.start('state9');
        // }
        // if(pic.key == 'pear')
        // {
        //     game.state.start('state10');
        // }
        // if(pic.key == 'platter')
        // {
        //     game.state.start('state11');
        // }
        // if(pic.key == 'table')
        // {
        //     game.state.start('state12');
        //}

    }
};

// function ChangeState(i, stateNum){
//     console.log('Level' + stateNum);
//     game.state.start('Level' + stateNum);
// }
//
// function AddKeyCallback(key, fn, args){
//     game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
// }
//
// function AddChangeStateEventListeners(){
//     AddKeyCallback(Phaser.Keyboard.ZERO, ChangeState, 0);
//     AddKeyCallback(Phaser.Keyboard.ONE, ChangeState, 1);
//     AddKeyCallback(Phaser.Keyboard.TWO, ChangeState, 2);
// }

