//// Variables ////
let start = document.getElementById('start');
let intro = document.getElementsByClassName('intros');
let score = 0;
let interval;


let time = document.getElementById('times');
let timer = 120;


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


        if (start) {
            start.addEventListener('click', startGame);
        }
        

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
        question: 'what is an array?',
        answers: [
            { text: 'a list of items', correct: true },
            { text: 'a number', correct: false },
            { text: 'a string', correct: false },
            { text: 'a boolean', correct: false }
        ]
    },
  ];

 // Load high scores from Local Storage, or initialize an empty array

 

 if (answerEl) {
   answerEl.addEventListener('click', function(event) {

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

    let highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    highScores.push({ score, time: timer });
    localStorage.setItem('highScores', JSON.stringify(highScores));

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

 }
  

  