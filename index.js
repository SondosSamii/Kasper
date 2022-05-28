const navMenu = document.getElementById("nav-menu");
let states = document.querySelectorAll("#statistic .state"),
  counter = 0;

function dFlex() {
  if (window.innerWidth > 768) {
    navMenu.style.display = "flex";
  } else {
    navMenu.style.display = "none";
  }
}

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

window.onload = function () {
  dFlex();
  toggleShow("block", "none", "none");
};

window.onresize = function () {
  dFlex();
};

function counterUp(state, max) {
  state.innerHTML = counter;
  if (counter < max) {
    setTimeout(function () {
      counterUp(state, max);
    }, 1);
    counter++;
  } else {
    state.innerHTML = max;
  }
}

function counterUpInView() {
  if (states[0].getBoundingClientRect().top <= window.innerHeight) {
    for (const state of states) {
      counterUp(state, state.innerHTML);
    }
    document.removeEventListener("scroll", counterUpInView);
  }
}

document.addEventListener("scroll", counterUpInView);
