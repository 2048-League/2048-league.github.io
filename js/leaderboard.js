const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" }
  return new Date(dateString).toLocaleDateString(undefined, options)
}

fetch('https://2048GrandMastersBackend.cubeythecube.repl.co/leaderboard', {
    method: 'GET'
 })
  .then(res => res.json())
  .then(body => {
    for(var i = 0; i < 10; i++) {
    let text = body[i] ? body[i].score + ' - ' + body[i].username : '';
    document.getElementById('leaderboard' + (i + 1)).style.fontSize = (text.length < 18 ? 18 : 18 - (text.length - 18)) + 'px'; 
    document.getElementById('leaderboard' + (i + 1)).innerHTML = text;
    }
    body.some((item, index) => {
      if(item.username == localStorage.username) {
        if(index < 10) {
        let text = body[10].score + ' - ' + body[10].username;
        document.getElementById('ranku').innerHTML = 11;
        document.getElementById('leaderboardu').style.fontSize = (text.length < 18 ? 18 : 18 - (text.length - 18)) + 'px'; 
        document.getElementById('rank' + (index + 1)).style.backgroundColor = '#F00';
        document.getElementById('leaderboardu').innerHTML = text;   
        } else {
        let text = item.score + ' - ' + item.username;
        document.getElementById('ranku').innerHTML = index + 1;
        document.getElementById('leaderboardu').style.fontSize = (text.length < 18 ? 18 : 18 - (text.length - 18)) + 'px'; 
        document.getElementById('ranku').style.backgroundColor = '#F00';
        document.getElementById('leaderboardu').innerHTML = text;          
        }
        return true;
      }
      return false;
    });
});

