const work = document.querySelector("#work");
const education = document.querySelector("#education");

function changeContent(contentId) {
    var elements = document.querySelectorAll('.container_cv');
      elements.forEach(function(element) {
        element.classList.remove('active');
      });

      // Show the selected element
      var selectedElement = document.getElementById(contentId);
      //If statement ensures that the element exist so the script does not throw an error
      if (selectedElement) {
        selectedElement.classList.add('active');
      }
}
