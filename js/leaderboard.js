 fetch('https://2048GrandMastersBackend.cubeythecube.repl.co/leaderboard', {
    method: 'GET'
 })
  .then(res => res.json())
  .then(body => {
    document.getElementById('leaderboardText').innerHTML = `1. ${body[0].score} at ${body[0].time}<br>
    2. ${body[1].score} at ${body[1].time}<br>
    3. ${body[2].score} at ${body[2].time}<br>
    4. ${body[3].score} at ${body[3].time}<br>
    5. ${body[4].score} at ${body[4].time}`
  });
