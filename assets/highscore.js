let highScoreList = document.getElementById('highScores');

let user = JSON.parse(localStorage.getItem('user'));
for (let i = 0; i < user.length; i++) {
  let li = document.createElement('li');
  li.textContent = user[i].name + ' - ' + user[i].score;
  highScoreList.appendChild(li);
}