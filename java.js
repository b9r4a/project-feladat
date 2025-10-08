const tipusok = ["gyerek","felnott"];
//modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function gyerekkattintas() {
    gyerekmodal.style.display = "block";
    span.onclick = function() {
      gyerekmodal.style.display = "none";
    }
    window.onclick = function(event) {
      if(event.target == gyerekmodal) {
        gyerekmodal.style.display = "none";
      }
    }
}
function felnottkattintas() {
    felnottmodal.style.display = "block";
    span.onclick = function() {
      felnottmodal.style.display = "none";
    }
    window.onclick = function(event) {
      if(event.target == felnottmodal) {
        felnottmodal.style.display = "none";
      }
    }
}

/*btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}*/