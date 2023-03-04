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

// function showQuestions(index){
// for (var i = 0; i < question.length; i++) {
// console.log ("<span>" + questions [i].question + "</span>");

//create new span and div tag for question and object passing thru array index
var  que_tag = '<span>'+ questions[index].num + ". " + questions[index].question +'</span>';
var option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'

+ '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
+ '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
+ '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
+ '<div class="option"><span>'+ questions[index].options[4] +'</span></div>';
que_text.textContent = que_tag; //add new span tag inside que tag
option_list.textContent = option_tag; //add new div tag inside option tag


//next button clicked - event listenr
nextqButton.addEventListener ("click", function () {
    showQuestions();
    // console.log("hello world");
}
)