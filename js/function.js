/* ----- Toggle ----- */
const toggle = document.querySelector(".toggle");
const menu = document.querySelector("nav");
/* Toggle mobile menu */
function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");

    // adds the menu (hamburger) icon
    toggle.querySelector("a").innerHTML = '<i class="fas fa-bars"></i>';
  } else {
    menu.classList.add("active");

    // adds the close (x) icon
    toggle.querySelector("a").innerHTML = '<i class="fas fa-times"></i>';
  }
}
/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);

/* ----- Popups ----- */
function popup(index) {
  var modal = document.getElementById("popup-window" + index);

  // Get the button that opens the modal
  var btn = document.getElementById("popup-button" + index);

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close" + index)[0];

  if (modal == null || btn == null || span == null) {
    return;
  }
  // When the user clicks on the button, open the modal
  btn.onclick = function () {
    modal.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    log("ITT");
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

popup(1);
popup(2);
popup(3);
