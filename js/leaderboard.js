var leaderboardType = localStorage.getItem("leaderboardType")
const el = document.getElementById('leaderboard');

if (leaderboardType == 'day') {
  el.classList.add('day')
}
if (leaderboardType == 'week') {
  el.classList.add('week')
}
// var leaderboardType = 'all';
var colors = [];

Array.from(document.getElementById('leaderboardbox').children).forEach((element, index) => {
  colors[index] = element.style.backgroundColor;
});
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" }
  return new Date(dateString).toLocaleDateString(undefined, options)
}

const ctx = document.createElement('canvas').getContext('2d');
const measureText = text => {
  return ctx.measureText(text).width / 5.5;
}

function leaderboard(ltype=leaderboardType) {
fetch('https://2048GrandMastersBackend.cubeythecube.repl.co/leaderboard', {
    method: 'GET'
 })
  .then(res => res.json())
  .then(body => {
    Array.from(document.getElementById('leaderboardbox').children).forEach((element, index) => {
      element.style.backgroundColor = colors[index];
    });
    if(ltype == 'day') {
      body = body.filter((item) => (Date.now() - Date.parse(item.time)) < 86400000)
    } else if(ltype == 'week') {
      body = body.filter((item) => (Date.now() - Date.parse(item.time)) < 86400000 * 7)
    }
    body = body.filter((item, index) => {
      return !body.some((i,j) => {
        return j < index && i.username == item.username;
      });
    });
    for(var i = 0; i < 10; i++) {
      let text = body[i] ? body[i].score + ' - ' + body[i].username : '';
      if(ltype == leaderboardType) {
      document.getElementById('leaderboard' + (i + 1)).style.fontSize = (measureText(text) < 18 ? 18 : 18 - (measureText(text) - 18)) + 'px'; 
      document.getElementById('leaderboard' + (i + 1)).innerHTML = text;
      }
    }
    if(ltype == leaderboardType) {
    document.getElementById('ranku').style.backgroundColor = '#000';
    document.getElementById('ranku').innerHTML = '11';
    document.getElementById('leaderboardu').innerHTML = '';
    }

    body.some((item, index) => {
      if(item.username == localStorage.username) {
        if(ltype == 'all') {
        document.getElementsByClassName('leaderboardtile')[24].innerHTML = index + 1;
        localStorage.setItem('bestScore', item.score);
        }
      if(ltype == leaderboardType) {
        if(index < 10) {
          let text = body[10] ? body[10].score + ' - ' + body[10].username : '';
          document.getElementById('leaderboardu').style.fontSize = (measureText(text) < 18 ? 18 : 18 - (measureText(text) - 18)) + 'px'; 
          document.getElementById('rank' + (index + 1)).style.backgroundColor = '#F00';
          document.getElementById('leaderboardu').innerHTML = text;   
        } else {
          let text = item.score + ' - ' + item.username;
          document.getElementById('ranku').innerHTML = index + 1;
          document.getElementById('leaderboardu').style.fontSize = (measureText(text) < 18 ? 18 : 18 - (measureText(text) - 18)) + 'px'; 
          document.getElementById('ranku').style.backgroundColor = '#F00';
          document.getElementById('leaderboardu').innerHTML = text;          
        }
      }
        return true;
      }
      return false;
    });
});
return document.getElementsByClassName('leaderboardtile')[24].innerHTML;
}

function change() {
  const el = document.getElementById('leaderboard');
  if(!el.classList.length) {
    el.classList.add('day');
    leaderboardType = 'day';
  } else if(el.classList[0] == 'day') {
    el.classList.replace('day', 'week');
    leaderboardType = 'week';
  } else {
    el.classList.remove('week');
    leaderboardType = 'all';
  }
  localStorage.setItem("leaderboardType", leaderboardType)
  leaderboard();
}