var guesses = 0;
var number = document.getElementById("number");
var highLow = document.getElementById("highLow");
var displayGuessedValues = document.getElementById("GuessedValues");
var GuessedValues = "Guessed: ";
var ranNum = Math.floor(Math.random() * 100) + 1;

document.addEventListener("keyup", function(event) {
  if (event.keyCode == 13) {
    EnterGuess();
  }
});
function EnterGuess(){
  guess = document.getElementById("guess").value;
  if(guesses ==  4){
    Lose();
  }
  else{
    HigherOrLower(guess);
  }
}

function Win(){
  highLow.innerHTML = "You Win Good Job!";
  number.innerHTML = ranNum;
  setTimeout(() => {  location.reload(); }, 2000);
}

function Lose(){
  highLow.innerHTML = "You Lose Nice Try :(";
  number.innerHTML = ranNum;
  setTimeout(() => {  location.reload(); }, 2000);
}

function HigherOrLower(guess){
  temp = "";
  guess = parseInt(guess);
  if(guess == ranNum){
    Win();
    guesses = 5;
  }
  else{
    if(ranNum > guess){
      highLow.innerHTML = "Higher";
      temp = temp.concat(guess, ": Higher");
    }
    else{
      highLow.innerHTML = "Lower";
      temp = temp.concat(guess, ": Lower");
    }
    GuessedValues = GuessedValues.concat(" | ",temp);
    guesses++;
    if(guesses >= 3){
      guesses++;
      setTimeout(() => {  EnterGuess(); }, 500);
    }
  }
  displayGuessedValues.innerHTML = GuessedValues;
}
