//elements defined
var startButton = document.querySelector("#start-button");
var questionCard = document.querySelector("#question-card");
var startBox = document.querySelector(".box");
var nextqButton = document.querySelector("#nextq-button");
var currentQuestion = 1
// if startQuiz button clicked
// //  initiate question by click on start
// question toggle static /active - visible/invisible

startButton.addEventListener("click", function () {
    startBox.setAttribute("class", "hide")
    questionCard.removeAttribute("class", "hide")
});


//question cards built into an array - grabbing the next question
//increment through the array )-(easiest way is ++)
function showQuestions(index) {
    var question = document.querySelector ("#question")
    // console.log(questions[currentQuestion]);
    currentQuestion++
} 

// Displaying questions from the array

function showQuestions(index){
for (var i = 0; i < questions.length; i++) {
console.log ("<span>" + questions [i].question + "</span>");

// if (response === questions.answer) {
     
// }

// }   

// question = text.Content=qTag;
//next button clicked - event listener needs a string

nextqButton.addEventListener ("click", function () {
    showQuestions();
    // console.log("hello world");
}
)