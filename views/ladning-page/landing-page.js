function openModal(contentID) {
  var elementToShow = document.getElementById(contentID);
  if (elementToShow) {
    elementToShow.style.display = "flex";
  }
}

function closeModal(contentID) {
  var elementToClose = document.getElementById(contentID);

  if (elementToClose) {
    elementToClose.style.display = "none";
  }
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function navigateToAboutMe() {
  console.log("button pressed");
  window.location.href = "../about-page/cv.html";
}
