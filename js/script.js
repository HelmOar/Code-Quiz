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
var sec = 70
var userScore = 0
var initialsEl = document.querySelector("#initials");
var playerResults = document.querySelector("#showScore");
var playerName = document.querySelector("#Initials");
var submitButton = document.querySelector("#initialsBtn");
var highScorePage = document.querySelector("#highScorePage");
var timerBox = document.querySelector("#timer");
var displayResult = document.querySelector("#highScore");
var highScoresList = [];
// if startQuiz button clicked"
// //  initiate question by click on start
// question toggle static /active - visible/invisible

startButton.addEventListener("click", function () {
    startBox.setAttribute("class", "hide");
    timerBox.removeAttribute("class", "hide");
    questionCard.removeAttribute("class", "hide");
    showQuestions();
    timeStamp();
});


//question cards built into an array - grabbing the next question
//increment through the array )-(easiest way is ++)
function showQuestions() {
  
    // console.log(questions[currentQuestion]);
    // currentQuestion++
    // Displaying questions from the array

    if (index >= questions.length) {
        console.log("GAMEOVER");
        questionCard.setAttribute("class", "hide")
        gameOver.removeAttribute("class", "hide")
        //score showing is not showing the string and colon
        document.getElementById ("showScore").textContent = "Your Score Was : " + userScore;
        sec = 0;
        return;
        }

question.innerHTML = '<span>'+ questions[index].num + ". " + questions[index].question +'</span>';
option_list.innerHTML = '<button class="option"><span>'+ questions[index].options[0] +'</span></button>'

+ '<button class="option"><span>'+ questions[index].options[1] +'</span></button>'
+ '<button class="option"><span>'+ questions[index].options[2] +'</span></button>'
+ '<button class="option"><span>'+ questions[index].options[3] +'</span></button>';
// console.log(questions);
} 



var btnEl = document.getElementById("option_list");
//next button clicked - event listenr
btnEl.addEventListener ("click",(e) => {
    var userGuess = e.target.innerHTML;
    var rightAnswer = questions[index].answer;
    if (userGuess === rightAnswer) {
        document.getElementById ("displayResult").textContent = "Correct!"
        userScore += 1;
        console.log(userScore);
        
    } else {
        // alert ("wrong! click ok and answer next question");
        document.getElementById ("displayResult").textContent = "Wrong!"
        sec-=10;
    }
    index++;
    showQuestions()
});

//ending game if questions are done




// game over and score is displayed..

// document.getElementById ("showScore").textContent = userScore;

//timer 
//Game Over - show score
function timeStamp (){
    
    var timer = setInterval(function() {
    timeEl.innerHTML ="00:" + sec;
    sec--;
    if (sec <= 0) {
        timeEl.innerHTML = "00.00"
        clearInterval (timer);
        
        console.log("Game Over")
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

// function getHighscore () {
highScoresList =
JSON.parse(Window.localStorage.getItem('highscores')) || [];
console.log(highScoresList);
highScoresList.sort(function (a,b) {
    return b.score - a.score;
});

// for (var i = 0; i < highScoresList.length; i += 1) {
//     var newScore = document.createElement("li");
//     //access the information from 
//     highScoresList [i].initials and highScoresList[i].score;
//     highScoresList.appendChild(highScoreList);






