var fontBtn=[], fontSize = 64, VKOriginX = 200, VKOriginY = 150,
    char1, char2, char3, submittedName;

zhgame.InputName = function(){};
zhgame.InputName.prototype = {
    preload: function(){
        game.load.spritesheet('fontBtn', 'assets/spritesheet/FontFightingAll.png', 64, 64);
        game.load.spritesheet('fontBlank', 'assets/spritesheet/FontBlank.png', 64, 64);

    },
    init: function(){

        this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignVertically = true;
        this.scale.pageAlignHorizontally = true;
        this.game.scale.refresh();
        this.game.scale.startFullScreen(false);

    },
    create: function(){
        game.stage.backgroundColor = '#000000';
        // DisableStick();


        game.add.text(400, 50, 'Enter your name: ', {fontSize: '40px', fill: '#ff2218'});

        char1 = game.add.sprite(460, 120, 'fontBlank');
        char1.blankChar = true;
        char1.flashing = false;
        char1.blank = true;


        char2 = game.add.sprite(524, 120, 'fontBlank');
        char2.blankChar = true;
        char2.flashing = false;
        char2.blank = true;

        char3 = game.add.sprite(588, 120, 'fontBlank');
        char3.blankChar = true;
        char3.flashing = false;
        char3.blank = true;

        if(Phaser.Device.desktop) {
            // Virtual Keyboard buttons for Desktop
            fontBtn[0] = game.add.button(VKOriginX + fontSize, VKOriginY + fontSize, 'fontBtn', EnterChar, this, 37, 0);
            fontBtn[1] = game.add.button(VKOriginX + fontSize*2, VKOriginY + fontSize, 'fontBtn', EnterChar, this, 38, 1);
            fontBtn[2] = game.add.button(VKOriginX + fontSize*3, VKOriginY + fontSize, 'fontBtn', EnterChar, this, 39, 2);
            fontBtn[3] = game.add.button(VKOriginX + fontSize*4, VKOriginY + fontSize, 'fontBtn', EnterChar, this, 40, 3);
            fontBtn[4] = game.add.button(VKOriginX + fontSize*5, VKOriginY + fontSize, 'fontBtn', EnterChar, this, 41, 4);
            fontBtn[5] = game.add.button(VKOriginX + fontSize*6, VKOriginY + fontSize, 'fontBtn', EnterChar, this, 42, 5);
            fontBtn[6] = game.add.button(VKOriginX + fontSize*7, VKOriginY + fontSize, 'fontBtn', EnterChar, this, 43, 6);
            fontBtn[7] = game.add.button(VKOriginX + fontSize*8, VKOriginY + fontSize, 'fontBtn', EnterChar, this, 44, 7);
            fontBtn[8] = game.add.button(VKOriginX + fontSize*9, VKOriginY + fontSize, 'fontBtn', EnterChar, this, 45, 8);

            fontBtn[9] = game.add.button(VKOriginX + fontSize, VKOriginY + fontSize*2, 'fontBtn', EnterChar, this, 46, 9);
            fontBtn[10] = game.add.button(VKOriginX + fontSize*2, VKOriginY + fontSize*2, 'fontBtn', EnterChar, this, 47, 10);
            fontBtn[11] = game.add.button(VKOriginX + fontSize*3, VKOriginY + fontSize*2, 'fontBtn', EnterChar, this, 48, 11);
            fontBtn[12] = game.add.button(VKOriginX + fontSize*4, VKOriginY + fontSize*2, 'fontBtn', EnterChar, this, 49, 12);
            fontBtn[13] = game.add.button(VKOriginX + fontSize*5, VKOriginY + fontSize*2, 'fontBtn', EnterChar, this, 50, 13);
            fontBtn[14] = game.add.button(VKOriginX + fontSize*6, VKOriginY + fontSize*2, 'fontBtn', EnterChar, this, 51, 14);
            fontBtn[15] = game.add.button(VKOriginX + fontSize*7, VKOriginY + fontSize*2, 'fontBtn', EnterChar, this, 52, 15);
            fontBtn[16] = game.add.button(VKOriginX + fontSize*8, VKOriginY + fontSize*2, 'fontBtn', EnterChar, this, 53, 16);
            fontBtn[17] = game.add.button(VKOriginX + fontSize*9, VKOriginY + fontSize*2, 'fontBtn', EnterChar, this, 54, 17);

            fontBtn[18] = game.add.button(VKOriginX + fontSize, VKOriginY + fontSize*3, 'fontBtn', EnterChar, this, 55, 18);
            fontBtn[19] = game.add.button(VKOriginX + fontSize*2, VKOriginY + fontSize*3, 'fontBtn', EnterChar, this, 56, 19);
            fontBtn[20] = game.add.button(VKOriginX + fontSize*3, VKOriginY + fontSize*3, 'fontBtn', EnterChar, this, 57, 20);
            fontBtn[21] = game.add.button(VKOriginX + fontSize*4, VKOriginY + fontSize*3, 'fontBtn', EnterChar, this, 58, 21);
            fontBtn[22] = game.add.button(VKOriginX + fontSize*5, VKOriginY + fontSize*3, 'fontBtn', EnterChar, this, 59, 22);
            fontBtn[23] = game.add.button(VKOriginX + fontSize*6, VKOriginY + fontSize*3, 'fontBtn', EnterChar, this, 60, 23);
            fontBtn[24] = game.add.button(VKOriginX + fontSize*7, VKOriginY + fontSize*3, 'fontBtn', EnterChar, this, 61, 24);
            fontBtn[25] = game.add.button(VKOriginX + fontSize*8, VKOriginY + fontSize*3, 'fontBtn', EnterChar, this, 62, 25);
            fontBtn[26] = game.add.button(VKOriginX + fontSize*9, VKOriginY + fontSize*3, 'fontBtn', EnterChar, this, 73, 36);

            fontBtn[27] = game.add.button(VKOriginX + fontSize, VKOriginY + fontSize*5, 'fontBtn', EnterChar, this, 63, 26);
            fontBtn[28] = game.add.button(VKOriginX + fontSize*2, VKOriginY + fontSize*5, 'fontBtn', EnterChar, this, 64, 27);
            fontBtn[29] = game.add.button(VKOriginX + fontSize*3, VKOriginY + fontSize*5, 'fontBtn', EnterChar, this, 65, 28);
            fontBtn[30] = game.add.button(VKOriginX + fontSize*4, VKOriginY + fontSize*5, 'fontBtn', EnterChar, this, 66, 29);
            fontBtn[31] = game.add.button(VKOriginX + fontSize*5, VKOriginY + fontSize*5, 'fontBtn', EnterChar, this, 67, 30);
            fontBtn[32] = game.add.button(VKOriginX + fontSize*6, VKOriginY + fontSize*5, 'fontBtn', EnterChar, this, 68, 31);
            fontBtn[33] = game.add.button(VKOriginX + fontSize*7, VKOriginY + fontSize*5, 'fontBtn', EnterChar, this, 69, 32);
            fontBtn[34] = game.add.button(VKOriginX + fontSize*8, VKOriginY + fontSize*5, 'fontBtn', EnterChar, this, 70, 33);
            fontBtn[35] = game.add.button(VKOriginX + fontSize*9, VKOriginY + fontSize*5, 'fontBtn', EnterChar, this, 71, 34);
        }
        else
        {
            // Virtual Keyboard buttons for Mobile
            fontBtn[0] = game.add.button(VKOriginX + fontSize, VKOriginY + fontSize, 'fontBtn', EnterChar, this, 0, 0, 37);
            fontBtn[1] = game.add.button(VKOriginX + fontSize * 2, VKOriginY + fontSize, 'fontBtn', EnterChar, this, 1, 1, 38);
            fontBtn[2] = game.add.button(VKOriginX + fontSize * 3, VKOriginY + fontSize, 'fontBtn', EnterChar, this, 2, 2, 39);
            fontBtn[3] = game.add.button(VKOriginX + fontSize * 4, VKOriginY + fontSize, 'fontBtn', EnterChar, this, 3, 3, 40);
            fontBtn[4] = game.add.button(VKOriginX + fontSize * 5, VKOriginY + fontSize, 'fontBtn', EnterChar, this, 4, 4, 41);
            fontBtn[5] = game.add.button(VKOriginX + fontSize * 6, VKOriginY + fontSize, 'fontBtn', EnterChar, this, 5, 5, 42);
            fontBtn[6] = game.add.button(VKOriginX + fontSize * 7, VKOriginY + fontSize, 'fontBtn', EnterChar, this, 6, 6, 43);
            fontBtn[7] = game.add.button(VKOriginX + fontSize * 8, VKOriginY + fontSize, 'fontBtn', EnterChar, this, 7, 7, 44);
            fontBtn[8] = game.add.button(VKOriginX + fontSize * 9, VKOriginY + fontSize, 'fontBtn', EnterChar, this, 8, 8, 45);

            fontBtn[9] = game.add.button(VKOriginX + fontSize, VKOriginY + fontSize * 2, 'fontBtn', EnterChar, this, 9, 9, 46);
            fontBtn[10] = game.add.button(VKOriginX + fontSize * 2, VKOriginY + fontSize * 2, 'fontBtn', EnterChar, this, 10, 10, 47);
            fontBtn[11] = game.add.button(VKOriginX + fontSize * 3, VKOriginY + fontSize * 2, 'fontBtn', EnterChar, this, 11, 11, 48);
            fontBtn[12] = game.add.button(VKOriginX + fontSize * 4, VKOriginY + fontSize * 2, 'fontBtn', EnterChar, this, 12, 12, 49);
            fontBtn[13] = game.add.button(VKOriginX + fontSize * 5, VKOriginY + fontSize * 2, 'fontBtn', EnterChar, this, 13, 13, 50);
            fontBtn[14] = game.add.button(VKOriginX + fontSize * 6, VKOriginY + fontSize * 2, 'fontBtn', EnterChar, this, 14, 14, 51);
            fontBtn[15] = game.add.button(VKOriginX + fontSize * 7, VKOriginY + fontSize * 2, 'fontBtn', EnterChar, this, 15, 15, 52);
            fontBtn[16] = game.add.button(VKOriginX + fontSize * 8, VKOriginY + fontSize * 2, 'fontBtn', EnterChar, this, 16, 16, 53);
            fontBtn[17] = game.add.button(VKOriginX + fontSize * 9, VKOriginY + fontSize * 2, 'fontBtn', EnterChar, this, 17, 17, 54);

            fontBtn[18] = game.add.button(VKOriginX + fontSize, VKOriginY + fontSize * 3, 'fontBtn', EnterChar, this, 18, 18, 55);
            fontBtn[19] = game.add.button(VKOriginX + fontSize * 2, VKOriginY + fontSize * 3, 'fontBtn', EnterChar, this, 19, 19, 56);
            fontBtn[20] = game.add.button(VKOriginX + fontSize * 3, VKOriginY + fontSize * 3, 'fontBtn', EnterChar, this, 20, 20, 57);
            fontBtn[21] = game.add.button(VKOriginX + fontSize * 4, VKOriginY + fontSize * 3, 'fontBtn', EnterChar, this, 21, 21, 58);
            fontBtn[22] = game.add.button(VKOriginX + fontSize * 5, VKOriginY + fontSize * 3, 'fontBtn', EnterChar, this, 22, 22, 59);
            fontBtn[23] = game.add.button(VKOriginX + fontSize * 6, VKOriginY + fontSize * 3, 'fontBtn', EnterChar, this, 23, 23, 60);
            fontBtn[24] = game.add.button(VKOriginX + fontSize * 7, VKOriginY + fontSize * 3, 'fontBtn', EnterChar, this, 24, 24, 61);
            fontBtn[25] = game.add.button(VKOriginX + fontSize * 8, VKOriginY + fontSize * 3, 'fontBtn', EnterChar, this, 25, 25, 62);
            fontBtn[26] = game.add.button(VKOriginX + fontSize * 9, VKOriginY + fontSize * 3, 'fontBtn', EnterChar, this, 36, 36, 73);

            fontBtn[27] = game.add.button(VKOriginX + fontSize, VKOriginY + fontSize * 5, 'fontBtn', EnterChar, this, 26, 26, 63);
            fontBtn[28] = game.add.button(VKOriginX + fontSize * 2, VKOriginY + fontSize * 5, 'fontBtn', EnterChar, this, 27, 27, 64);
            fontBtn[29] = game.add.button(VKOriginX + fontSize * 3, VKOriginY + fontSize * 5, 'fontBtn', EnterChar, this, 28, 28, 65);
            fontBtn[30] = game.add.button(VKOriginX + fontSize * 4, VKOriginY + fontSize * 5, 'fontBtn', EnterChar, this, 29, 29, 66);
            fontBtn[31] = game.add.button(VKOriginX + fontSize * 5, VKOriginY + fontSize * 5, 'fontBtn', EnterChar, this, 30, 30, 67);
            fontBtn[32] = game.add.button(VKOriginX + fontSize * 6, VKOriginY + fontSize * 5, 'fontBtn', EnterChar, this, 31, 31, 68);
            fontBtn[33] = game.add.button(VKOriginX + fontSize * 7, VKOriginY + fontSize * 5, 'fontBtn', EnterChar, this, 32, 32, 69);
            fontBtn[34] = game.add.button(VKOriginX + fontSize * 8, VKOriginY + fontSize * 5, 'fontBtn', EnterChar, this, 33, 33, 70);
            fontBtn[35] = game.add.button(VKOriginX + fontSize * 9, VKOriginY + fontSize * 5, 'fontBtn', EnterChar, this, 34, 34, 71);
        }
        fontBtn[0].nameText = 'A';
        fontBtn[1].nameText = 'B';
        fontBtn[2].nameText = 'C';
        fontBtn[3].nameText = 'D';
        fontBtn[4].nameText = 'E';
        fontBtn[5].nameText = 'F';
        fontBtn[6].nameText = 'G';
        fontBtn[7].nameText = 'H';
        fontBtn[8].nameText = 'I';
        fontBtn[9].nameText = 'J';
        fontBtn[10].nameText = 'K';
        fontBtn[11].nameText = 'L';
        fontBtn[12].nameText = 'M';
        fontBtn[13].nameText = 'N';
        fontBtn[14].nameText = 'O';
        fontBtn[15].nameText = 'P';
        fontBtn[16].nameText = 'Q';
        fontBtn[17].nameText = 'R';
        fontBtn[18].nameText = 'S';
        fontBtn[19].nameText = 'T';
        fontBtn[20].nameText = 'U';
        fontBtn[21].nameText = 'V';
        fontBtn[22].nameText = 'W';
        fontBtn[23].nameText = 'X';
        fontBtn[24].nameText = 'Y';
        fontBtn[25].nameText = '-';
        fontBtn[26].nameText = '1';
        fontBtn[27].nameText = '2';
        fontBtn[28].nameText = '3';
        fontBtn[29].nameText = '4';
        fontBtn[30].nameText = '5';
        fontBtn[31].nameText = '6';
        fontBtn[32].nameText = '7';
        fontBtn[33].nameText = '8';
        fontBtn[34].nameText = '9';
        fontBtn[35].nameText = '0';

        fontBtn[0].name = 0;
        fontBtn[1].name = 1;
        fontBtn[2].name = 2;
        fontBtn[3].name = 3;
        fontBtn[4].name = 4;
        fontBtn[5].name = 5;
        fontBtn[6].name = 6;
        fontBtn[7].name = 7;
        fontBtn[8].name = 8;
        fontBtn[9].name = 9;
        fontBtn[10].name = 10;
        fontBtn[11].name = 11;
        fontBtn[12].name = 12;
        fontBtn[13].name = 13;
        fontBtn[14].name = 14;
        fontBtn[15].name = 15;
        fontBtn[16].name = 16;
        fontBtn[17].name = 17;
        fontBtn[18].name = 18;
        fontBtn[19].name = 19;
        fontBtn[20].name = 20;
        fontBtn[21].name = 21;
        fontBtn[22].name = 22;
        fontBtn[23].name = 23;
        fontBtn[24].name = 24;
        fontBtn[25].name = 25;
        fontBtn[26].name = 36;
        fontBtn[27].name = 26;
        fontBtn[28].name = 27;
        fontBtn[29].name = 28;
        fontBtn[30].name = 29;
        fontBtn[31].name = 30;
        fontBtn[32].name = 31;
        fontBtn[33].name = 32;
        fontBtn[34].name = 33;
        fontBtn[35].name = 34;

        // Create a label to use as a 'Clear' button
        pause_label = game.add.text(280, 125, 'CLEAR', { font: '35px Arial', fill: '#fff' });
        pause_label.inputEnabled = true;
        pause_label.events.onInputUp.add(function () {
            // When the 'Clear' button is pressed run the clear function
            ClearName();
        });

        // Create a label to use as a 'Submit' button
        pause_label = game.add.text(700, 125, 'SUBMIT', { font: '35px Arial', fill: '#fff' });
        pause_label.inputEnabled = true;
        pause_label.events.onInputUp.add(function () {
            // When the 'Clear' button is pressed run the clear function
            SubmitName();
        });
    },
    update: function(){
    //     // nameScore;
    //     if((game.input.keyboard.isDown(Phaser.Keyboard.ENTER)) || (game.input.event.keyCode === 13))
    //     {
    //         game.state.start('HighScoreTable');
    //     }
    //
    //     if((game.input.activePointer.leftButton.justPressed()) || (game.input.pointer1.isDown))
    //     {
    //         focusSet = true;
    //     }
    //
    //
    //     if(focusSet)
    //     {
    //         nameScore.canvasInput.focus();
    //     }

        if(char1.blankChar === true)
        {
            if(!char1.flashing)
            char1.animations.add('flash', [0,1], 3, true);
            char1.animations.play('flash');
            char1.flashing = true;
        }

        if(char2.blankChar === true)
        {
            if(!char2.flashing)
                char2.animations.add('flash', [0,1], 3, true);
            char2.animations.play('flash');
            char2.flashing = true;
        }

        if(char3.blankChar === true)
        {
            if(!char3.flashing)
                char3.animations.add('flash', [0,1], 3, true);
            char3.animations.play('flash');
            char3.flashing = true;
        }

    }
};

function EnterChar(fontBtn) {
    if(char1.blank)
    {
        char1.loadTexture('fontBtn', fontBtn.name);
        char1.blankChar = false;
        char1.flashing = false;
        char1.blank = false;
        char1.nameText = fontBtn.nameText;
        //debug.log('name = ' + fontBtn.name);
    }
    else if(char2.blank)
    {
        char2.loadTexture('fontBtn', fontBtn.name);
        char2.blankChar = false;
        char2.flashing = false;
        char2.blank = false;
        char2.nameText = fontBtn.nameText;
    }
    else if(char3.blank)
    {
        char3.loadTexture('fontBtn', fontBtn.name);
        char3.blankChar = false;
        char3.flashing = false;
        char3.blank = false;
        char3.nameText = fontBtn.nameText;
    }

}

function ClearName() {
    char1.loadTexture('fontBlank');
    char1.blankChar = true;
    char1.flashing = false;
    char1.blank = true;


    char2.loadTexture('fontBlank');
    char2.blankChar = true;
    char2.flashing = false;
    char2.blank = true;

    char3.loadTexture('fontBlank');
    char3.blankChar = true;
    char3.flashing = false;
    char3.blank = true;
}

function SubmitName() {
    if((char1.nameText === undefined))
    {
        char1.nameText = 'C';
        char2.nameText = 'O';
        char3.nameText = 'M';
    }
    if((char2.nameText === undefined))
    {
        char2.nameText = '';
    }
    if((char3.nameText === undefined))
    {
        char3.nameText = '';
    }
    submittedName = char1.nameText + char2.nameText + char3.nameText;
    console.log('Separate Name Parts = ' + char1.nameText + char2.nameText + char3.nameText);
    console.log('Submitted Name = ' + submittedName);
}

// function DisableStick() {
//
//     // disable and hide mobile controls
//     stick.enabled = false;
//     stick.visible = false;
//     fireButton.visible = false;
// }