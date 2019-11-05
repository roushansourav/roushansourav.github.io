
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  btn.className="hidden-btn";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  btn.className="res-btn hidden-btn";
  console.log(btn);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  this.console.log(event.target);
  if (event.target == modal) {
    modal.style.display = "none";    
  }
}
