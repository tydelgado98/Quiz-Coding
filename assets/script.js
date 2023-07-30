let time = document.getElementById('times');
let highScore = document.getElementById('hiSco');
let start = document.getElementById('start');
let intro = document.getElementsByClassName('intros');
let timer = 60;
let score = 0;


function countdown() {
    let interval = setInterval(function() {
       timer--;
       time.textContent = timer + ' seconds remaining';
         if (timer === 0) {
            clearInterval(interval);
            alert('Game Over');
            }
    }, 800);
        }
        
start.addEventListener('click', startGame) 

  function startGame() {
    countdown();
    intro[0].style.display = 'none';
    console.log('started');
   showQuestions();
    }







let questionEl = document.getElementById('questions');
let answerEl = document.getElementById('answers');

let currQuestion = 0;

function showQuestions() {
  questionEl.textContent = questionSec[currQuestion].question;
  showAnswers();
}

function showAnswers() {
 let currAnswer = questionSec[currQuestion].answers;
answerEl.innerHTML = '';

  for (let i = 0; i < currAnswer.length; i++) {
 let Abutton = document.createElement('button');
  Abutton.textContent = currAnswer[i].text;
  answerEl.appendChild(Abutton);
}

}


 let questionSec = [
    {
        question: 'What is the capital of California?',
        answers: [
            {text: 'Sacramento', correct: true},
            {text: 'Los Angeles', correct: false},
            {text: 'San Francisco', correct: false},
            {text: 'San Diego', correct: false}
        ] 
    },
    {
        question: 'What is the capital of Texas?',
        answers: [
            {text: 'Houston', correct: false},
            {text: 'Dallas', correct: false},
            {text: 'Austin', correct: true},
            {text: 'San Antonio', correct: false}
        ]
    },
  ];








   
