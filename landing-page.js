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
