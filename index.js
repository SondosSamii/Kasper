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
      // console.log(allImgs.length);
    } else if (allImgs[i] > 7) {
      allImgs[i].style.display = "none";
    } else {
      allImgs[i].style.display = "none";
    }
    for (let j = 8; j < allImgs.length; j++) {
      allImgs[j].style.display = "none";
    }
  }
}

function showMore() {
  document.getElementById("showMore").style.display = "none";
  let allImgs = document.getElementById("tabsContent").children;
  for (let i = 8; i < allImgs.length; i++) {
    console.log(allImgs[i]);
    allImgs[i].style.display = "block";
  }
}
