import {onSnake, expandSnake} from './snake.js';
import {randomGridPosition} from './grid.js';
let food =getRandomFoodPostion();
let EXPANSION_RATE =3;
export function update(){
    if (onSnake(food)){
        expandSnake(EXPANSION_RATE);
        food=getRandomFoodPostion()
    }
    }
export function draw(gameBoard){
    
        const foodElement =document.createElement('div');
        foodElement.style.gridColumnStart = food.x;
        foodElement.style.gridRowStart    = food.y;
        foodElement.classList.add("food");
        gameBoard.appendChild(foodElement)
 
};

function getRandomFoodPostion(){
    let newFoodPosition ;
    while (newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition();
    }
    return newFoodPosition;
}