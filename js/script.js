//elements defined
var startButton = document.querySelector("#start-button");
var questionCard = document.querySelector("#question-card");
var startBox = document.querySelector(".box");
var nextqButton = document.querySelector("#nextq-button");
var currentQuestion = 1
var index = 0
var question = document.querySelector ("#question")
var option_list = document.querySelector ("#option_list")
var secondsLeft = questions.length * 5;
var timeEl = document.querySelector ("#timer-sec");
var timeInterval;
var gameOver = document.querySelector ("#gameOver");
var sec = 80
var userScore = 0
var initialsEl = document.querySelector("#initials");
var playerResults = document.querySelector("#showScore");
var playerName = document.querySelector("#Initials");
var submitButton = document.querySelector("#initialsBtn");
var highScorePage = document.querySelector("#highScorePage");
var timerBox = document.querySelector("#timer");
var displayResult = document.querySelector("#highScore");
var highScoresList = [];


startButton.addEventListener("click", function () {
    startBox.setAttribute("class", "hide");
    timerBox.removeAttribute("class", "hide");
    questionCard.removeAttribute("class", "hide");
    showQuestions();
    timeStamp();
});

function showQuestions() {
  
    if (index >= questions.length) {
        console.log("GAMEOVER");
        questionCard.setAttribute("class", "hide")
        gameOver.removeAttribute("class", "hide")
        document.getElementById ("showScore").textContent = "Your Score Was : " + userScore;
        sec = 0;
        return;
        }

question.innerHTML = '<span>'+ questions[index].num + ". " + questions[index].question +'</span>';
option_list.innerHTML = '<button class="option"><span>'+ questions[index].options[0] +'</span></button>'

+ '<button class="option"><span>'+ questions[index].options[1] +'</span></button>'
+ '<button class="option"><span>'+ questions[index].options[2] +'</span></button>'
+ '<button class="option"><span>'+ questions[index].options[3] +'</span></button>';

} 

var btnEl = document.getElementById("option_list");

btnEl.addEventListener ("click",(e) => {
    var userGuess = e.target.innerHTML;
    var rightAnswer = questions[index].answer;
    if (userGuess === rightAnswer) {
        document.getElementById ("displayResult").textContent = "Correct!"
        userScore += 1;
        console.log(userScore);
        
    } else {
        document.getElementById ("displayResult").textContent = "Wrong!"
        sec-=10;
    }
    index++;
    showQuestions()
});

function timeStamp (){
    
    var timer = setInterval(function() {
    timeEl.innerHTML ="00:" + sec;
    sec--;
    if (sec <= 0) {
        timeEl.innerHTML = "00.00"
        clearInterval (timer);
    
    questionCard.setAttribute("class", "hide")
    gameOver.removeAttribute("class", "hide")
    timerBox.setAttribute("class", "hide")
    document.getElementById ("showScore").textContent = "Your Score Was : " + userScore;
    }
} , 1000);
}

function setHighscore () {
    var playerInitials = playerName.value;
    highScoresList = JSON.parse(localStorage.getItem('highscores')) || [];
    var newScore = {userScore, initials:playerInitials};
    highScoresList.push(newScore);
    console.log(highScoresList);
    localStorage.setItem('highscores',JSON.stringify(highScoresList));
}
 
submitButton.addEventListener( "click", function(event) {
    event.preventDefault()
    highScorePage.removeAttribute("class", "hide");
    gameOver.setAttribute("class", "hide");
   setHighscore();
   getHighscore();

})

function getHighscore () {
highScoresList = JSON.parse(localStorage.getItem('highscores')) || [];
console.log(highScoresList);
highScoresList.sort(function (a,b) {
    return b.score - a.score;
});

for (var i = 0; i < highScoresList.length; i += 1) {

    var newScore = document.createElement("li");
    newScore.innerHTML=  highScoresList [i].initials  + " : " +  highScoresList[i].userScore;
   
   
    displayResult.appendChild(newScore);
}}
     

