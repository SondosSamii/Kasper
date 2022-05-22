const navMenu = document.getElementById("nav-menu");

function dFlex() {
  if (window.innerWidth > 768) {
    navMenu.style.display = "flex";
  } else {
    navMenu.style.display = "none";
  }
}

window.onload = function () {
  dFlex();
};

window.onresize = function () {
  dFlex();
};

document.getElementById("toggle-menu").onclick = function () {
  if (navMenu.style.display !== "flex") {
    navMenu.style.display = "flex";
  } else {
    navMenu.style.display = "none";
  }
};
