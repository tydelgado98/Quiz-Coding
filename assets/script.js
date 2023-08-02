/// Variables ///
let highScore = document.getElementById('hiSco');
let start = document.getElementById('start');
let intro = document.getElementsByClassName('intros');
let score = 0;
let interval;
/// Timer Section ///

let time = document.getElementById('times');
let timer = 60;


function countdown() {
  interval = setInterval(function() {
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

let answerFeed = document.getElementById('answerTxt')

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
    {
        question: 'What is the capital of New York?',
        answers: [
            {text: 'Buffalo', correct: false},
            {text: 'Albany', correct: true},
            {text: 'New York City', correct: false},
            {text: 'Rochester', correct: false}
        ]
    },
    {
      question: 'What is the capital of Florida?',
      answers: [
          {text: 'Tampa', correct: false},
          {text: 'Tallahasee', correct: true},
          {text: 'Orlando', correct: false},
          {text: 'Miami', correct: false}
      ]
  },
  {
    question: 'What is the capital of Massachuesetts?',
    answers: [
        {text: 'Boston', correct: false},
        {text: 'Cape Cod', correct: true},
        {text: 'Springfield', correct: false},
        {text: 'Holyoke', correct: false}
    ]
},
  ];


  let checkAnswer = answerEl.addEventListener('click', function(event) {

    let chosenAnswer = event.target.textContent;
    let correctAnswer = questionSection[currentQuestion].answers.find(answer => answer.correct).text;

    console.log("Chosen Answer: " + chosenAnswer);
    console.log("Correct Answer: " + correctAnswer);

    if (chosenAnswer === correctAnswer) {
        score++;
        console.log("your Score is:  " + score + "points");
        answerFeed.textContent = "+1 point!";
    }
    else {
        timer -= 5;
        console.log("You Chose wrong, your score is: " + score + "points");
        answerFeed.textContent = "-5 seconds!";
    }
   
    currentQuestion++;

    setTimeout(() => {
      answerFeed.textContent = "";
  }, 1300);

    if (currentQuestion === questionSection.length) {
      alert('Game Over');
    clearInterval(interval);
    console.log('Game Over');
    console.log('Your Score is: ' + score + 'points');
    console.log('Your Time is: ' + timer + 'seconds');
    console.log("Start over if you want to play again");
      }
      else {
        showQuestions();
      }

  }
  );