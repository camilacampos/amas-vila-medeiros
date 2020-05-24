// Get the container element
var menuContainer = document.getElementById("menu-amas");

// Get all buttons with class="btn" inside the container
var menuItems = menuContainer.getElementsByClassName("nav-item");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
