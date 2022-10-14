import {update as updateSnake,draw as drawSnake ,SNAK_SPEED,getSnakeHead,snakeIntersection,dispalyGameOver} from "./snake.js" ;
import {draw as drawFood , update as updateFood } from "./food.js";
import {outsideGrid} from "./grid.js"
let lastRenderTime=0;
let gameOver = false;
const gameBoard =document.getElementById('game-board');
function main( currentTime){
    if (gameOver ){
      return  dispalyGameOver();
    }
    /*requestAnimationFrame() call this method whenever you're ready to update your animation onscreen.
    The number of callbacks is usually 60 times per second,
    This will request that your animation function be called before the browser performs the next repaint.*/
    window.requestAnimationFrame(main)
    const secndsSinceLastRenderTime = (currentTime - lastRenderTime)/1000;

    if(secndsSinceLastRenderTime< 1/SNAK_SPEED)return
    lastRenderTime = currentTime;
    // update all of logic
    
    update();
    draw();
};
window.requestAnimationFrame(main);
function update(){
    updateSnake();
    updateFood();
    checkDeath();
}
function draw(){
    gameBoard.innerHTML=""
    drawSnake(gameBoard);
    drawFood(gameBoard);
}
function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}


/* const snakeElement =document.createElement('div');
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.style.gridRowStart    = segment.y;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement); */