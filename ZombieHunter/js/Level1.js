class Level1 extends Phaser.Scene{

    constructor(){
        super({key:'Level1'})
    }

    preload(){
        this.load.image('Player', 'assets/sprites/PistolShoot1.png');
    }

    create(){
        this.image = this.add.image(200, 200, 'Player');

        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    }

    update(delta){
        if(this.key_A.isDown)
            this.image.x--;
        if(this.key_D.isDown)
            this.image.x++;
        if(this.key_W.isDown)
            this.image.y--;
        if(this.key_S.isDown)
            this.image.y++;
    }
}