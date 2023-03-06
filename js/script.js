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



// if startQuiz button clicked"
// //  initiate question by click on start
// question toggle static /active - visible/invisible

startButton.addEventListener("click", function () {
    startBox.setAttribute("class", "hide");
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
    document.getElementById ("showScore").textContent = "Your Score Was : " + userScore;
    }
} , 1000);
}

//Game Over - show score

//Game Over - enter initials 

//save initials and score on new page