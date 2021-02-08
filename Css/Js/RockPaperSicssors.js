var user = 0;
var comp = 0;
var user_score = 0;
var ai_score = 0;
var user_score_display = document.getElementById("user_score");
var ai_score_display = document.getElementById("ai_score");
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var sicssors = document.getElementById("sicssors");
var user_played = "";
var choices = ['r', 'p', 's'];
var ai_play;
var ran;
var ai_and_user_input;
var result;
var textResut = document.getElementById("result");;

user_input();
function ai_plays(){
  ran = Math.floor(Math.random() * 3);
  ai_play = choices[ran];
  return(ai_play)
}

function user_input(){
  rock.addEventListener('click', function (){
    user_played = 'r';
    game(user_played);
  })
  paper.addEventListener('click', function (){
    user_played = 'p';
    game(user_played);
  })
  sicssors.addEventListener('click', function (){
    user_played = 's';
    game(user_played);
  })
}

function game(user_played){
  ai_play = ai_plays();
  ai_and_user_input = ai_play+user_played;
  switch(ai_and_user_input){
    case "rs":
    case "pr":
    case "sp":
      result = "ai";
      break;

    case "sr":
    case "rp":
    case "ps":
      result = "user";
      break;

    case "ss":
    case "rr":
    case "pp":
      result = "draw";
      break;
    }
    if (result == "ai"){
      ai_score += 1;
      ai_score_display.innerHTML = ai_score;
      textResut.innerHTML = "You Lose";
    }

    else if (result == "user"){
      user_score += 1;
      user_score_display.innerHTML = user_score;
      textResut.innerHTML = "You Win";
    }
    else{
      textResut.innerHTML = "Draw";
    }
}
