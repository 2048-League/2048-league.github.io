function login() {
  fetch('https://2048GrandMastersBackend.cubeythecube.repl.co/login', {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ "username": document.getElementById('username').value, "password": document.getElementById('password').value})
  })
  .then(res => res.text())
  .then(res => {
    if(res == 'Success!') {
      window.location = '../';
    } else {
      document.getElementById('error').innerHTML = res;
    }
  });
}