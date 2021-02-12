document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});
document.onkeydown = function(e) {
  if(e.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}
 
Object.freeze(GameManager);
Object.freeze(GameManager.protototype);
Object.freeze(Grid);
Object.freeze(Grid.prototype);
Object.freeze(KeyboardInputManager);
Object.freeze(KeyboardInputManager.prototype);
Object.freeze(LocalStorageManager);
Object.freeze(LocalStorageManager.prototype);



