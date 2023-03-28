//variables
var startbutton = document.getElementById("start")
var nextbutton = document.getElementById("next")
var savebutton = document.getElementById("save")
var questioncontainer = document.getElementById("questioncont")
var shuffle
var currentquestion
var questionelement = document.getElementById('questions')
var answersElement = document.getElementById('answers')
var username = document.getElementById('username')
var highscores = JSON.parse(localStorage.getItem('highscores'))
var timeleft = 75
var timer = setInterval(countdown, 1000)
var secs = document.getElementById('secs')

//Functions of the start and next buttons  
startbutton.addEventListener('click', startgame)
nextbutton.addEventListener('click', () => {
    currentquestion++})

//function to start the game
function startgame() {
    console.log("Game started!")
    startbutton.classList.add('hide')
    savebutton.classList.add('hide')
    username.classList.add('hide')
    currentquestion = 0
    shuffle = questions.sort(() => Math.random() - 3)
    questioncont.classList.remove('hide')
    countdown()
    nextquestion()
}

//variables for questions 
var questions = [{
    question: 'This is a question',
    answers: [
        { text: 'tests', correct: true },
        { text: 'test', correct: false },
        { text: 'testing', correct: false },
        { text: 'blah', correct: false },

    ]}
]


//funtion to get next question 
function nextquestion() {
    showquestion(shuffle[currentquestion])
}
//function to show the next question
function showquestion(questions) {
    questionselement.innerText = questions.questions
    questions.answers.forEach(answers => {
        var button = document.createElement('button')
        button.innerText = answers.text
        button.classList.add('button')
        if (answers.correct) {
            button.dataset.correct = answers.correct
        }
        button.addEventListener("click", answerquestion)
    })
}

//function for question selection 
function answerquestion() {
    if (correct) {
        console.log('Correct')
        nextquestion()
    }
    else {
        console.log('Wrong')
        nextquestion()
        function countdown() {

        }
    }
    if (shuffle.length > currentquestion + 1) {
        nextbutton.classList.remove('hide')
    } else {
        startbutton.innerText = 'Restart'
        startbutton.classList.remove('hide')
        savebutton.classList.remove('hide')
        username.classList.remove('hide')
    }

}

//Function to start timer 
function countdown() {
    if (timer === 0) {
        Window.alert("Game over!")
        username.classList.remove('hide')
    } else {
        secs.innerhtml = timer + 'seconds remaining'
    }

}

//function for local storage and save high score 
username.addEventListener('keyup', () => {
    savebutton
});
localStorage.setItem('username', JSON.stringify(username));


