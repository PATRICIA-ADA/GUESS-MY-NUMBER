'use strict';

/* console.log(document.querySelector('.whetherLowOrHighScore').textContent = "Correct number!");

console.log(document.querySelector('.typeInNumber').value = "78");

console.log(document.querySelector('.scoreReductionBasedOnTrial').textContent = "5");

console.log(document.querySelector('.guessingOfNumber').textContent = "10"); */

/* let secretNumber = Math.trunc(Math.random() * 20 +1);

let decreaseScore = 20;
let highScore = 0;

document.querySelector('.checkTheNumber').addEventListener('click', function(){
  let guessTheNumber = Number(document.querySelector('.typeInNumber').value);

// If there is no input
  if(!guessTheNumber){
    document.querySelector('.whetherLowOrHighScore').textContent = 'No Number';
  }

  else if(guessTheNumber > 20){
    document.querySelector('.whetherLowOrHighScore').textContent = 'Limit number exceeded';
  }
// If the input is correct
  else if(guessTheNumber === secretNumber){
    document.querySelector('.guessingOfNumber').textContent = secretNumber;
    
    document.querySelector('.whetherLowOrHighScore').textContent = 'Wow! you got it';

    document.querySelector('.gameProject').style.backgroundColor = 'green';

    document.querySelector('.guessingOfNumber').style.fontSize = '3rem';

    document.querySelector('.guessingOfNumber').style.width = '7rem';
    
    if(decreaseScore > highScore){
      highScore = decreaseScore;
    document.querySelector('.ratingOfScore').textContent = highScore;
    }
    
  }
// If the input is too high  
 else if(guessTheNumber > secretNumber){
    if(decreaseScore > 1){
      document.querySelector('.whetherLowOrHighScore').textContent = 'Oh! no, Too high';

      decreaseScore--; //decreaseScore = decreaseScore - 1;

      document.querySelector('.scoreReductionBasedOnTrial').textContent = decreaseScore;
    } 
    else{
      document.querySelector('.whetherLowOrHighScore').textContent = 'Game Over';

      document.querySelector('.scoreReductionBasedOnTrial').textContent = 0;
    }   
 }
// If the input is too low 
 else if(guessTheNumber < secretNumber){
  if(decreaseScore > 1){
    document.querySelector('.whetherLowOrHighScore').textContent = 'Sorry, too low';

    decreaseScore--; //decreaseScore = decreaseScore - 1;

    document.querySelector('.scoreReductionBasedOnTrial').textContent = decreaseScore;
  } 
  else{
    document.querySelector('.whetherLowOrHighScore').textContent = 'Game Over';

    document.querySelector('.scoreReductionBasedOnTrial').textContent = 0;
  }
}
})

// TRYING TO RESET IT BACK
document.querySelector('.tryAgain').addEventListener('click', function(){
  decreaseScore =20;
  secretNumber = Math.trunc(Math.random() * 20 +1);

  document.querySelector('.typeInNumber').value = "";

  document.querySelector('.scoreReductionBasedOnTrial').textContent = decreaseScore;

  document.querySelector('.whetherLowOrHighScore').textContent = 'Start guessing....';
  
  document.querySelector('.gameProject').style.backgroundColor = 'black';

  document.querySelector('.guessingOfNumber').style.fontSize = '1.5rem';

  document.querySelector('.guessingOfNumber').style.width = '5rem';

  document.querySelector('.guessingOfNumber').textContent= '?';
}) */


//YOU JUST REFACTOR YOUR CODE TO DRY PRINCIPLES
let secretNumber = Math.trunc(Math.random() * 20 + 1);

let displayResultOfGuess = function(message){
  document.querySelector('.whetherLowOrHighScore').textContent = message
}
let displayTheScore = decreaseScore => document.querySelector('.scoreReductionBasedOnTrial').textContent = decreaseScore;

let score = 20;
let highScore = 0;
// starting the code
document.querySelector('.checkTheNumber').addEventListener('click', function(){

  let guess = Number(document.querySelector('.typeInNumber').value);

  if(!guess){
    displayResultOfGuess('No Number');
  }

  else if(guess === secretNumber){
    document.querySelector('.guessingOfNumber').textContent = secretNumber;

    displayResultOfGuess('Wow!!! You got it');

    document.querySelector('.gameProject').style.backgroundColor = 'green';

    document.querySelector('.guessingOfNumber').style.width = '7rem';

    document.querySelector('.guessingOfNumber').style.fontSize = '2rem';

    if(score > highScore){
      highScore = score;
      document.querySelector('.ratingOfScore').textContent = highScore;
    }
  }

  else if(guess !== secretNumber){
    if(score > 1){
      displayResultOfGuess( guess > secretNumber ? 'Oh no, too High!': 'Sorry, too low');

      score--;
      displayTheScore(score);
    }
    else{
      displayResultOfGuess('Sorry!, Game Over');
      displayTheScore(0);
    }
  }
})

// Code to reset the game
document.querySelector('.tryAgain').addEventListener('click', function(){

  secretNumber = Math.trunc(Math.random() * 20 + 1);

   highScore = 0;

  document.querySelector('.gameProject').style.backgroundColor = 'black';

  document.querySelector('.guessingOfNumber').style.width = '5rem';

  document.querySelector('.guessingOfNumber').style.fontSize = '1.5rem';

  document.querySelector('.typeInNumber').value = '';

  displayResultOfGuess('Start guessing...');
  displayTheScore(20);

  document.querySelector('.ratingOfScore').textContent = highScore;

  document.querySelector('.guessingOfNumber').textContent = '?';
})