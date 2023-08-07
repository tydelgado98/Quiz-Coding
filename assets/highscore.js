function showScores() {
    let highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    
    // Separate scores
    highscores.sort(function(a, b) {
        return b.score - a.score;
    });

    let olList = document.getElementById("new-score-list");
    olList.innerHTML = ''; // Clear previous scores before showing updated ones

    for (let i = 0; i < highscores.length; i += 1) {
        let liEl = document.createElement('li');
        liEl.textContent = highscores[i].initials + '-' + highscores[i].score;
        olList.appendChild(liEl);
    }
}

// Erase scores
function eraseHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
}

document.getElementById("erase-new").onclick = eraseHighscores;

showScores();
