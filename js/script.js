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
// if startQuiz button clicked"
// //  initiate question by click on start
// question toggle static /active - visible/invisible

startButton.addEventListener("click", function () {
    startBox.setAttribute("class", "hide")
    questionCard.removeAttribute("class", "hide")
    timeInterval = setInterval(timeStamp, 1000) 
    showQuestions(index);
});


//question cards built into an array - grabbing the next question
//increment through the array )-(easiest way is ++)
function showQuestions(index) {
  
    // console.log(questions[currentQuestion]);
    // currentQuestion++
    // Displaying questions from the array

question.innerHTML = '<span>'+ questions[index].num + ". " + questions[index].question +'</span>';
option_list.innerHTML = '<button class="option"><span>'+ questions[index].options[0] +'</span></button>'

+ '<button class="option"><span>'+ questions[index].options[1] +'</span></button>'
+ '<button class="option"><span>'+ questions[index].options[2] +'</span></button>'
+ '<button class="option"><span>'+ questions[index].options[3] +'</span></button>';
 
} 
var elButton = document.querySelector(".option") 
//next button clicked - event listenr
elButton.addEventListener ("click", function (event) {
    console.log (event.target);
    showQuestions(index);
    console.log (elButton);
    index++
  
}
)
//if user clicked on option

// option_list.addEventListener ( "click", function () {
//     if (optionSelected === answer
// }
// )
//if user answer is correct

//if user answer is incorret
function evaluateAnswer () {

}

//timer 
function timeStamp () {
   
    secondsLeft--;
    timeEL.textContent=secondsLeft;
  if (secondsLeft <= 0); {
    clearInterval(timerInterval)
}

}
