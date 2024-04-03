function toggleMenu() {
  var icon = document.getElementById("hamburger-icon");
  var link = document.getElementById("hamburger-link");
  if (icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-x");
    link.style.display = "flex";
  } else if (icon.classList.contains("fa-x")) {
    icon.classList.remove("fa-x");
    icon.classList.add("fa-bars");
    link.style.display = "none";
  }
}
