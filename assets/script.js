//// Variables ////
let start = document.getElementById('start');
let intro = document.getElementsByClassName('intros');
let score = 0;
let interval;


let time = document.getElementById('times');
let timer = 180;


const countdown = () => {
  const interval = setInterval(() => {
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
        

  const startGame = () => {
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

const showQuestions = () => (questionEl.textContent = questionSection[currentQuestion].question, showAnswers());
 
 


const showAnswers = () => {
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
    {
        question: 'what is a function?',
        answers: [
            { text: 'a list of items', correct: false },
            { text: 'a number', correct: false },
            { text: 'a string', correct: false },
            { text: 'a block of code', correct: true }
        ]
    },
    {
        question: 'what is a variable?',
        answers: [
            { text: 'a boolean', correct: false },
            { text: 'a string', correct: false },
            { text: 'a number', correct: false },
            { text: 'a container for a value', correct: true }
        ]
    },
    {
        question: 'What is the purpose of JavaScript?',
        answers: [
            { text: 'To make websites interactive', correct: true },
            { text: 'To style web pages', correct: false },
            { text: 'To create databases', correct: false },
            { text: 'To generate QR codes', correct: false }
        ]
    },
    {
        question: 'How do you declare a variable in JavaScript?',
        answers: [
            { text: 'Using the print keyword', correct: false },
            { text: 'By typing the variables value', correct: false },
            { text: 'With the define keyword', correct: false },
            { text: 'By using keywords like var, let, or const', correct: true }
        ]
    },
    {
        question: 'How do you write a comment in JavaScript?',
        answers: [
            { text: 'Using the comment keyword', correct: false },
            { text: 'By using double quotes around text', correct: false },
            { text: 'With the # symbol', correct: false },
            { text: 'With the // symbol', correct: true }
        ]
    },
    {
        question: 'What is an event listener?',
        answers: [
            { text: 'function waits for a certain event to occur, then does an action', correct: true },
            { text: 'A function that generates random numbers', correct: false },
            { text: 'A way to create animations', correct: false },
            { text: 'A function that modifies CSS styles', correct: false }
        ]
    },
    {
        question: 'What is the purpose of a for loop?',
        answers: [
            { text: 'To change the value of a variable', correct: false },
            { text: 'To make a function recursive', correct: false },
            { text: 'To create an array', correct: false },
            { text: 'To repeatedly execute a block of code', correct: true }
        ]
    },
    {
        question: 'How do you add an element to the end of an array?',
        answers: [
            { text: 'Using the add() method', correct: false },
            { text: 'By assigning a value to a specific index', correct: false },
            { text: 'With the append() method', correct: false },
            { text: 'Using the push() method', correct: true }
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
 setTimeout(() => window.location.href = 'high-score.html', 1300);
      
      }
      else {
        showQuestions();
      }

  }
  );

 }
  

  