class snake {
    constructor(game){
        this.game = game;
        this.x = GAME_WIDTH/2;
        this.y = GAME_HEIGHT/2;

        this.angle = 0;
        this.tailPositions = [];

        this.eye = new eye(this);

        this.createTail();

        this.listenMouseEvent();
    }

    listenMouseEvent(){
        this.game.canvas.addEventListener('mousemove', (event)=>{
            var rect = this.game.canvas.getBoundingClientRect();
            this.processMouseMove({
                x: event.clientX - rect.left,
                y: event.clientY - rect.top
            });
        });
    }

    processMouseMove(mousePos){
        this.angle = Math.atan2(
            mousePos.y - (SCREEN_HEIGHT / 2),
            mousePos.x - (SCREEN_WIDTH / 2)
        );
    }

    createTail(){
        for(let i = 0; i < SNAKE_LENGTH; i++){
            this.tailPositions.push({
                x: this.x - i * SNAKE_SPEED,
                y: this.y
            });
        }
    }

    update(){
        let newTailPosition = {
            x: this.x + SNAKE_SPEED * Math.cos(this.angle),
            y: this.y + SNAKE_SPEED * Math.sin(this.angle)
        }
        
        this.tailPositions.unshift(newTailPosition);
        this.tailPositions.pop();

        this.x = newTailPosition.x;
        this.y = newTailPosition.y;
    }

    draw(){
        // DRAW SHADOW'S SNAKE
        for(let i = this.tailPositions.length - 1; i > 1; i--){
            this.game.screen.drawCircle(
                { x: this.tailPositions[i].x,
                  y: this.tailPositions[i].y
                },
                'shadow'
            );
        }

        // DRAW BODY'S SNAKE
        for(let i = this.tailPositions.length - 1; i > 1; i--){
            if(i % 5 == 0){
                this.game.screen.drawCircle(
                    { x: this.tailPositions[i].x,
                      y: this.tailPositions[i].y
                    },
                    'snake'
                );
            }
        }

        // DRAW HEAD
        this.game.screen.drawCircle(
            { x: this.x,
              y: this.y
            },
            'snake'
        );

        this.eye.draw();
    }
}