const user = window.location.href.slice(window.location.href.indexOf('#') + 1);
document.querySelector('.title').innerHTML = user;