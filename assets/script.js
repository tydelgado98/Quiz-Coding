//// Variables ////
let start = document.getElementById('start');
let intro = document.getElementsByClassName('intros');
let score = 0;
let interval;


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
let finalSco = document.getElementById('finalScore');
let finalTi = document.getElementById('finalTime');
let currentQuestion = 0;
let section = document.getElementById('quizSection');
let highScore = document.getElementById('highScore');

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
{
    question: 'What is the capital of Illinois?',
    answers: [
        {text: 'Chicago', correct: false},
        {text: 'Springfield', correct: true},
        {text: 'Peoria', correct: false},
        {text: 'Rockford', correct: false}
    ]
},
{
    question: 'What is the capital of Colorado?',
    answers: [
        {text: 'Denver', correct: true},
        {text: 'Colorado Springs', correct: false},
        {text: 'Boulder', correct: false},
        {text: 'Fort Collins', correct: false}
    ]
},
{
    question: 'What is the capital of Washington?',
    answers: [
        {text: 'Seattle', correct: false},
        {text: 'Tacoma', correct: false},
        {text: 'Olympia', correct: true},
        {text: 'Spokane', correct: false}
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
        answerFeed.textContent = "correct!";
    }
    else {
        timer -= 5;
        console.log("You Chose wrong, your score is: " + score + "points");
        answerFeed.textContent = "incorrect!";
    }
   //// Next Question ////
    currentQuestion++;

    setTimeout(() => {
      answerFeed.textContent = "";
  }, 1300);

//// End Game ////

    if (currentQuestion === questionSection.length) {
    clearInterval(interval);
    console.log('Game Over');
    console.log('Your Score is: ' + score + 'points');
    console.log('Your Time is: ' + timer + 'seconds');
    console.log("Start over if you want to play again");

////// Score Section //////
    section.style.display = 'none';
    highScore.style.display = 'block';
    
    finalSco.textContent = score;
    finalTi.textContent = timer;
    //// High Score Page ////
 setTimeout(() => {
      window.location.href = 'high-score.html'
  }, 1300);

  
      }
      else {
        showQuestions();
      }

  }
  );


  

  