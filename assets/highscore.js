function showScores() {
    let highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    
    // Separate scores
    highScores.sort(function(a, b) {
        return b.score - a.score;
    });

    let olList = document.getElementById('new-score-list');
    olList.innerHTML = ''; // Clear previous scores before showing updated ones

    for (let i = 0; i < highScores.length; i += 1) {
        let liEl = document.createElement('li');
        liEl.textContent = highScores[i] + "your score" + '-' + highScores[i].score;
        olList.appendChild(liEl);
    }
}


function eraseHighscores() {
    window.localStorage.removeItem('highScores');
    window.location.reload();
}

document.getElementById('erase-new').onclick = eraseHighscores;

showScores();
