//elements defined
var startButton = document.querySelector("#start-button");
var questionCard = document.querySelector("#question-card");
var startBox = document.querySelector(".box");
var nextqButton = document.querySelector("#nextq-button");
var currentQuestion = 1
var index = 0
var question = document.querySelector ("#question")
var option_list = document.querySelector ("#option_list")
// if startQuiz button clicked"
// //  initiate question by click on start
// question toggle static /active - visible/invisible

startButton.addEventListener("click", function () {
    startBox.setAttribute("class", "hide")
    questionCard.removeAttribute("class", "hide")
});


//question cards built into an array - grabbing the next question
//increment through the array )-(easiest way is ++)
function showQuestions(index) {
  
    // console.log(questions[currentQuestion]);
    // currentQuestion++
    // Displaying questions from the array

question.innerHTML = '<span>'+ questions[index].num + ". " + questions[index].question +'</span>';
option_list.innerHTML = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'

+ '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
+ '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
+ '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
+ '<div class="option"><span>'+ questions[index].options[4] +'</span></div>';
} 

//next button clicked - event listenr
nextqButton.addEventListener ("click", function () {
    showQuestions(index);
    index++
    console.log(questions[index]);
}
)
//if user clicked on option

// option_list.addEventListener ( "click", function () {
//     if (optionSelected === answer
// }
// )
//if user answer is correct

//if user answer is incorret


//timer 
var time = questions.length * 30;
var timeEL = document.querySelector ("timer", 1000);
var timeInterval = setInterval() 
    secondsLeft--;
  if (secondsLeft ===0); {
    clearInterval(timerInterval)
  }
