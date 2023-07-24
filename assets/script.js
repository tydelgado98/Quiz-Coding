let time = document.getElementById('times');
let highScore = document.getElementById('hiSco');
let start = document.getElementById('start');

function countdown() {
    let timer = 60;
    let interval = setInterval(function() {
        if (timer > 1) {
           time.textContent = timer + ' seconds remaining';
        } else if (timer === 1) {
            time.textContent = timer + ' second remaining';
        } else {
            time.textContent = '';
            clearInterval(interval);
            alert('Game over');
        } 
    }, 1000);
        }
start.addEventListener('click', countdown) 