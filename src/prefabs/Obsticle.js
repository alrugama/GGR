//Spaceship prefab
class Obsticle extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.points = pointValue;
        this.moveSpeed = game.settings.spaceshipSpeed;
    }

    update() {
        // moves left
        this.x -= this.moveSpeed;
        //wrap around left to right
        if (this.x <= 0 - this.width) {
            this.x  = game.config.width;
        }
    }

    reset() {
        this.x  = game.config.width;
    }
}