/// Variables ///
let highScore = document.getElementById('hiSco');
let start = document.getElementById('start');
let intro = document.getElementsByClassName('intros');
let score = 0;

/// Timer Section ///

let time = document.getElementById('times');
let timer = 60;


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


/// Questions and Answers ///

let questionEl = document.getElementById('questions');
let answerEl = document.getElementById('answers');

let currentQuestion = 0;

function showQuestions() {
  questionEl.textContent = questionSection[currentQuestion].question;
  showAnswers();
}

function showAnswers() {
 let currentAnswer = questionSection[currentQuestion].answers;
 answerEl.innerHTML = '';

  for (let i = 0; i < currentAnswer.length; i++) {
 let Abutton = document.createElement('button');
  Abutton.textContent = currentAnswer[i].text;
  answerEl.appendChild(Abutton);
}
}


 let questionSection = [
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

  answerEl.addEventListener('click', function(event) {

    chosenAnswer = event.target.textContent;
    let correctAnswer = questionSection[currentQuestion].answers.find(answer => answer.correct).text;
    console.log("Chosen Answer: " + chosenAnswer);
    console.log("Correct Answer: " + correctAnswer);
    if (chosenAnswer === correctAnswer) {
        score++;
        console.log("your Score is:  " + score + "points");
    }
    else {
        timer -= 20;
        console.log("You Chose wrong, your score is: " + score + "points");
    }
    currentQuestion++;
    showQuestions();
    if (currentQuestion === questionSection.length) {
    alert('Game Over');
    clearInterval(interval);
    }
  }
  

  );