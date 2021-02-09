var guess = document.getElementById("HangManGuess");
var displayGuess = document.getElementById("wordElements");
var results = document.getElementById("winLose");
var letters = document.getElementById("WrongLetters");
var lettersGuessed ="Guessed Letters: ";
var wrongGuess = 0;
word = randomWord();
wordAsList = word.split("");
guessedLetters = new Array(wordAsList.length);
var wrongLetters = [];
drawLines();
document.getElementById('hangManImg').src=Image();

document.addEventListener("keyup", function(event) {
  if (event.keyCode == 13) {
    EnterGuess();
  }
});

function drawLines(){
  var temp = "";
  var line = " _ ";

  for(i=0; i<wordAsList.length; i++){
    if(guessedLetters[i] == null){
      temp = temp.concat(line);
    }
    else{
      temp = temp.concat(guessedLetters[i]);
    }
  }
  displayGuess.innerHTML = temp;
}

function randomWord(){
  words = ["car", "sleeping", "team","could", "public", "library", "primitive", "leg", "browserling", "root",
          "everybody", "grew", "start", "other", "wooden", "honor", "cattle", "plus", "earlier", "deal", "ocean",
          "agree", "disease", "search", "charge", "teach", "offer", "apart", "frozen", "develop", "population", "length", "alike"];

  ran = Math.floor(Math.random() * words.length);
  word = words[ran];
  return word;
}

function EnterGuess(){
  guess = document.getElementById("HangManGuess").value;
  if(wrongGuess < 6){
    inWord(guess);
  }
  else{
    guessedLetters = wordAsList;
    drawLines();
  }
}

function inWord(guess) {
  var alreadyGuessed = false;
  for(i=15; i<lettersGuessed.length; i++){
    if(guess == lettersGuessed[i])
    {
      alreadyGuessed = true;
    }
  }

  if(alreadyGuessed == false){
    if(guess.length == 1){
      var inWord = false;
      var index = [];

        for(i=0; i<wordAsList.length; i++){
          if (guess == wordAsList[i]){
            index.push(i);
            inWord = true;
          }
        }
        if(inWord == true){
          for(i=0; i<index.length; i++){
              guessedLetters[index[i]] = guess;
          }
          lettersGuessed = lettersGuessed.concat(guess);
          letters.innerHTML = lettersGuessed;
        }
        else{
          wrongGuess++;
          document.getElementById('hangManImg').src=Image();
          if(wrongGuess >= 6){
            results.innerHTML = "You Lose To See The Word Press Enter";
          }
          lettersGuessed = lettersGuessed.concat(guess);
          letters.innerHTML = lettersGuessed;
        }
      drawLines();
    }

    else if(guess.length == word.length){
      if(guess == word){
        guessedLetters = guess.split("");
      }
      else{
        wrongGuess = 6;
        results.innerHTML = "You Lose To See The Word Press Enter";
        document.getElementById('hangManImg').src=Image();
      }
    }

    var counter = 0;
    for(i=0; i<wordAsList.length; i++){
      if(guessedLetters[i] == wordAsList[i]){
        counter++;
      }
    }

    if(counter == wordAsList.length){
      results.innerHTML = "You Win";
      wrongGuess = 6;
    }
    drawLines();
  }
}

function Image(){
  var hangManImage = "";
  if(wrongGuess == 0){
    hangManImage = "Images/HangMan0.png";
  }
  else if(wrongGuess == 1){
    hangManImage = "Images/HangMan1.png";
  }
  else if(wrongGuess == 2){
    hangManImage = "Images/HangMan2.png";
  }
  else if(wrongGuess == 3){
    hangManImage = "Images/HangMan3.png";
  }
  else if(wrongGuess == 4){
    hangManImage = "Images/HangMan4.png";
  }
  else if(wrongGuess == 5){
    hangManImage = "Images/HangMan5.png";
  }
  else if(wrongGuess == 6){
    hangManImage = "Images/HangMan6.png";
  }
  return hangManImage;
}

function restartGame(){
  location.reload();
}
