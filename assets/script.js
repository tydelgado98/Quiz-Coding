let time = document.getElementById('times');
let highScore = document.getElementById('hiSco');
let start = document.getElementById('start');
let intro = document.getElementsByClassName('intros');
let timer = 60;

function countdown() {
    let interval = setInterval(function() {
       timer--;
       time.textContent = timer + ' seconds remaining';
         if (timer === 0) {
            clearInterval(interval);
            alert('Game Over');
            }
    }, 1000);
        }
        
start.addEventListener('click', startGame) 

  function startGame() {
    countdown();
    intro[0].style.display = 'none';
    showQuestions();
    }









   
