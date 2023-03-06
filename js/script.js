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
var timeEL = document.querySelector ("#timer-sec");
var timeInterval;
var gameOver = document.querySelector ("gameOver");
// if startQuiz button clicked"
// //  initiate question by click on start
// question toggle static /active - visible/invisible

startButton.addEventListener("click", function () {
    startBox.setAttribute("class", "hide");
    questionCard.removeAttribute("class", "hide");
    timeInterval = setInterval(timeStamp, 1000); 
    showQuestions();
});


//question cards built into an array - grabbing the next question
//increment through the array )-(easiest way is ++)
function showQuestions() {
  
    // console.log(questions[currentQuestion]);
    // currentQuestion++
    // Displaying questions from the array

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
        
    } else {
        // alert ("wrong! click ok and answer next question");
        document.getElementById ("displayResult").textContent = "Wrong!"
    }
    index++;
    showQuestions()
});



    // WHEN the timer is 0 OR questions left equals zero, THEN then conditions i've written fire
    if (timeEL === 0 || currentQuestion >= questions.length) {
    questionCard.setAttribute("class", "hide")
    gameOver.removeAttribute("class", "hide")
    };



// var elButton = document.getElementById("nextq-button");
// btnEl.addEventListener("click", function (event) {
//     showQuestions(index);
// });


function evaluateAnswer (answer) {
    clearInterval (timeEL);
    var userAns = answer.textContent;
    var correcAns = questions[index].answer;

}
//if user answer is correct

//if user answer is incorret


//timer 
function timeStamp (){
    var sec = 60;
    var timer = setInterval(function() {
    document.getElementById("timer-sec").innerHTML="00:" + sec;
    sec--;
    if (sec == 0) {
        clearInterval (timer);
    }
} , 1000);
}

