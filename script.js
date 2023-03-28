//variables
var startbutton = document.getElementById("start")
var questioncontainer = document.getElementById("questioncont")
var shuffle 
var currentquestion 
var questionelement = document.getElementById('question')
var answersElement = document.getElementById('answer')

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
    {text: 'answer', correct: true},
    {text: 'test', correct: false},
    {text: 'testing', correct: false},
    {text: 'answers', correct: false}
]
    }
]


//funtion to get next question 
function nextquestion (){
showquestion(shuffle[currentquestion])

}

function showquestion(questions){
    questionelement.innerText = questions.question

}

//function for question selection 
function answerquestion (){

}

//Function to start timer 
function starttimer (){

}

//function for local storage and save high score 
function savegame (){

}

