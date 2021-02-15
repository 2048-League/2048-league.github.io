// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("save");

var confirm = document.getElementById("confirm");
var abort = document.getElementById("abort");

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  console.log("display");
}

// Confirmation
confirm.onclick = function() {
  fetch('https://2048GrandMastersBackend.cubeythecube.repl.co/settings', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
      "oldUsername": document.getElementById('old-username').value, 
      "newUsername": document.getElementById('new-username').value, 
      "password": document.getElementById('password').value
      })
    })
  .then(res => res.json())
  .then(res => {
  if(res.token) {
    localStorage.setItem('token', res.token);
    localStorage.setItem('username', res.username);
    modal.style.display = "none";
    window.location = "../";
  } else {
    console.log(res.error);
  }
  });
}

abort.onclick = function() {
  modal.style.display = "none";
  window.location = "../";
}





// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }