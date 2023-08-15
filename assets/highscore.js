function showScores() {
    let highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    
    // Separate scores by highest to lowest
    highScores.sort(function(a, b) {
        return b.score - a.score;
    });

    // Show scores

    let ulList = document.getElementById('new-score-list');
    ulList.innerHTML = ''; // Clear previous scores before showing updated ones

    for (let i = 0; i < highScores.length; i += 1) {
        let liEl = document.createElement('li');
        liEl.textContent = `Score: ${highScores[i].score} | Time: ${highScores[i].time} seconds`;
        ulList.appendChild(liEl);
    }
}

// Erase scores

function eraseHighscores() {
    window.localStorage.removeItem('highScores');
    window.location.reload();
}

document.getElementById('erase-new').onclick = eraseHighscores;

showScores();
