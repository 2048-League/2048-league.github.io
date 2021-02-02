function signup() {
  fetch('https://2048GrandMastersBackend.cubeythecube.repl.co/signup', {
  method: "POST",
  headers: {
  'Content-Type': 'application/json'
  },
  body: JSON.stringify({ 
    "username": document.getElementById('username').value, 
    "password": document.getElementById('password').value, 
    "password2": document.getElementById('confirm-password').value, 
    "email": document.getElementById('email').value })
  })
  .then(res => res.json())
  .then(res => {
  if(res.token) {
    localStorage.setItem('token', res.token);
    localStorage.setItem('username', document.getElementById('username').value);
    window.location = "../";
  } else {
    document.getElementById('error').innerHTML = res.error;
  }
  });
}