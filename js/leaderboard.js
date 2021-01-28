const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" }
  return new Date(dateString).toLocaleDateString(undefined, options)
}

fetch('https://2048GrandMastersBackend.cubeythecube.repl.co/leaderboard', {
    method: 'GET'
 })
  .then(res => res.json())
  .then(body => {
    document.getElementById('leaderboardText').innerHTML = `1. ${body[0].score} at ${formatDate(body[0].time)}<br>
    2. ${body[1].score} at ${formatDate(body[1].time)}<br>
    3. ${body[2].score} at ${formatDate(body[2].time)}<br>
    4. ${body[3].score} at ${formatDate(body[3].time)}<br>
    5. ${body[4].score} at ${formatDate(body[4].time)}`
});
