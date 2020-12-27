class eye{
    constructor(snake){
        this.snake = snake;
    }

    update(){

    }

    draw(){
        let eyePos1 = {
            x: this.snake.x + Math.cos(this.snake.angle + EYE_ANGLE) * EYE_DISTANCE,
            y: this.snake.y + Math.sin(this.snake.angle + EYE_ANGLE) * EYE_DISTANCE
        }
        
        this.snake.game.screen.drawCircle(eyePos1, 'eye');


        let eyePos2 = {
            x: this.snake.x + Math.cos(this.snake.angle - EYE_ANGLE) * EYE_DISTANCE,
            y: this.snake.y + Math.sin(this.snake.angle - EYE_ANGLE) * EYE_DISTANCE
        }
        
        this.snake.game.screen.drawCircle(eyePos2, 'eye');
    }
}