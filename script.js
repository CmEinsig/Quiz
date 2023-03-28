//variables
var startbutton = document.getElementById("start")
var nextbutton = document.getElementById("next")
var questioncontainer = document.getElementById("questioncont")
var shuffle 
var currentquestion 
var questionelement = document.getElementById('question')
var answersElement = document.getElementById('answers')
//var answerquestion = e.target
//var correct = selectedbutton.dataset.correct

//Function to start the game 
startbutton.addEventListener('click', startgame)
function startgame (){
    console.log("Game started!")
startbutton.classList.add('hide')
currentquestion = 0
shuffle = questions.sort(() => Math.random() -3)
questioncont.classList.remove('hide')
nextquestion()
}

//variables for questions 
var questions = [
{
question: 'This is a question',
answers: [
    {text: 'tests', correct: true},
    {text: 'test', correct: false},
    {text: 'testing', correct: false},
    {text: 'blah', correct: false}
]
}    
]

//funtion to get next question 
function nextquestion (){
    showquestion(shuffle[currentquestion])
}

function showquestion(questions){
    questionelement.innerText = questions.question
questions.answers.forEach(answers => {
   var button = document.createElement('button')
button.innerText = answers.text
button.classList.add('button')
if (answers.correct) {
button.dataset.correct =answers.correct
}
button.addEventListener("click", answerquestion)
})
}



//function for question selection 
function answerquestion (){}

//Function to start timer 
//function starttimer (){}

//function for local storage and save high score 
//function savegame (){}

