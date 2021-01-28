 fetch('https://2048GrandMastersBackend.cubeythecube.repl.co/leaderboard', {
    method: 'GET'
 })
  .then(res => res.json())
  .then(body => {
    document.getElementById('leaderboardText').innerHTML = `1. ${body[0]}<br>
    2. ${body[1]}<br>
    3. ${body[2]}<br>
    4. ${body[3]}<br>
    5. ${body[4]}`
  });
