const work = document.querySelector("#work");

const education = document.querySelector("#education");

function changeContent(contentId) {
  var elements = document.querySelectorAll(".container_cv");
  elements.forEach(function (element) {
    element.classList.remove("active");
  });

  // Show the selected element
  var selectedElement = document.getElementById(contentId);
  //If statement ensures that the element exist so the script does not throw an error
  if (selectedElement) {
    selectedElement.classList.add("active");
  }
}

//To show correct courses list and close them
//check To do list for possible modifications
function openModal(coursesID) {
  var elementToShow = document.getElementById(coursesID);
  if (elementToShow) {
    elementToShow.style.display = "block";
  }
}

function closeModal(coursesID) {
  var elementToClose = document.getElementById(coursesID);

  if (elementToClose) {
    elementToClose.style.display = "none";
  }
}
