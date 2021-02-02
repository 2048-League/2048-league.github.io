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
    document.getElementById('leaderboard' + (i + 1)).innerHTML = body[i] ? body[i].score + ' - ' + body[i].username : '';
    }
});

