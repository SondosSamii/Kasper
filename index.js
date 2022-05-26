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
  for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("active");
    if (tabButtons[i].value === thisTabClass) {
      tabButtons[i].classList.add("active");
    }
  }

  for (let i = 0; i < allImgs.length; i++) {
    const classFlag = allImgs[i].classList.contains(thisTabClass);
    if (classFlag || thisTabClass === "all") {
      allImgs[i].style.display = "block";
      toggleShow("block", "none", "none");
    } else {
      allImgs[i].style.display = "none";
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
