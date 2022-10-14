import { getInputeDirection } from "./input.js";

export let SNAK_SPEED =5;
const snakeBody =[{x:10 , y:10}];
let newSegments =0; 
              
 export function update(){
    //expended snake length
    addSegments();
    // for move a head of snake 
    const  inputDirection =getInputeDirection()
    for(let i = snakeBody.length-2 ; i>=0 ; i--){
        snakeBody[i+1]= {...snakeBody[i]}
    }
    snakeBody[0].x +=inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}
export function draw(gameBoard){
    snakeBody.forEach(segment=>{
        const snakeElement =document.createElement('div');
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.style.gridRowStart    = segment.y;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    })
};
// expand snake size
export function expandSnake(amount){
    newSegments+= amount;
}
export function onSnake(position, {ignoreHead= false}={}){
       return snakeBody.some((segment,index)=> {
       if(ignoreHead && index ===0) return false;
        return equalPosition(segment , position)
    })
};
 export function getSnakeHead(){
    return snakeBody[0];
 };
export function snakeIntersection(){
    return  onSnake(snakeBody[0],{ignoreHead:true})
}
function equalPosition (pos1 , pos2){
    return pos1.x ===pos2.x && pos1.y ===pos2.y
    };

function addSegments(){
    for(let i=0 ; i< newSegments; i++){
        // snakeBody[snakeBody.length]={...snakeBody[snakeBody.length - 1]}
      snakeBody.push({...snakeBody[snakeBody.length - 1]})
    }
    newSegments=0;
}    

export function dispalyGameOver(){
    
    const gmaetxt=document.getElementById("game-over-text");
     return  gmaetxt.style.display="block";
}