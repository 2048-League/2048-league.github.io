if(localStorage.username && localStorage.token) {
  document.getElementById('nologin').style.visibility = 'hidden';
  document.querySelector('.container').style.filter = '';
}