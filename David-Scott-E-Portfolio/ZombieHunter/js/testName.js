BasicGame.MainMenu = function (game) {};
BasicGame.MainMenu.prototype = {
    create: function () 	{
        myInput = createInput(this.game.world.centerX,this.game.world.centerY);
        myInput.anchor.set(0.5);
        myInput.canvasInput.value('Text');
        myInput.canvasInput.focus();
    }};

function inputFocus(sprite){
    sprite.canvasInput.focus();
    console.log(sprite.canvasInput._value);
}
function createInput(x, y){
    var bmd = game.add.bitmapData(400, 50);
    var myInput = game.add.sprite(x, y, bmd);
    myInput.canvasInput = new CanvasInput  ({
        canvas: bmd.canvas,
        fontSize:20,
        fontFamily: 'Arial',
        fontColor: '#212121',
        fontWeight: 'bold',
        width: 300,
        padding: 8,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 3,
        boxShadow: '1px 1px 0px #fff',
        innerShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)',
        placeHolder: 'Enter message here...'
    });
    myInput.inputEnabled = true;
    myInput.input.useHandCursor = true;
    myInput.events.onInputUp.add(inputFocus, this);
    return myInput;
}