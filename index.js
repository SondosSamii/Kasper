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
  toggleShow("block", "none", "none");
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

function showContent(event) {
  let thisTabClass = event.target.value,
    allImgs = document.getElementById("tabsContent").children,
    tabButtons = document.getElementsByClassName("tab-btn");
  for (let button of tabButtons) {
    button.classList.remove("active");
    if (button.value === thisTabClass) {
      button.classList.add("active");
    }
  }

  for (let img of allImgs) {
    const classFlag = img.classList.contains(thisTabClass);
    if (classFlag) {
      img.style.display = "block";
      toggleShow("none", "none", "block");
    } else if (thisTabClass === "all") {
      img.style.display = "block";
      toggleShow("block", "none", "none");
    } else {
      img.style.display = "none";
    }
  }
}

function toggleShow(moreDisplay, lessDisplay, imgDisplay) {
  document.getElementById("showMore").style.display = moreDisplay;
  document.getElementById("showLess").style.display = lessDisplay;
  let allImgs = document.getElementById("tabsContent").children;
  for (let i = 8; i < allImgs.length; i++) {
    allImgs[i].style.display = imgDisplay;
  }
}
