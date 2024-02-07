//Only stylistic for the hover-effect in the navigation bar
setupHoverStyle();

//Listen when changes are made in the URL with new hashes
// and call the onHashChange()-function to react to it
window.addEventListener("hashchange", onHashChange);

//Also initially call onHashChage() to set an initial section
window.onload = () => {
  onHashChange();
};

/**
 * This is called when the URL gets a new hash-value.
 * Then function will locate the content corresponding to
 * the hash, and update the main section with this content.
 *
 * If this hash is not recognized, it will display an error
 * message. If no hash is present, it will return to the
 * home page.
 */
function onHashChange() {
  //Get the hash-value as a plain string. The URL will be
  // formatted as follows: <url>/#<value>
  const windowHash = window.location.hash.substring(1);

  //If no hash is present, go to the home page
  if (!window.location.hash) {
    window.location.hash = "home";
  }

  //Find the main content element on the page
  const sectionElement = document.getElementById("mainContent");
  //Set the content using the getSectionContent-function
  sectionElement.innerHTML = getSectionContent(windowHash);

  //Optional styling to make the navigator-items change styles
  // based on the currently selected element.
  const headerElements = document.getElementsByClassName("navigators");
  changeSelectedStyle(headerElements, windowHash);

  //Only used for example content, but it is necessary to
  // call, since the page is not reloaded when changing the hash.
  loadEditor(windowHash === "editor");
}

/**
 * Loops through the individual elements. If the element's link-value
 * matches the current value, the style will set to one thing. If not,
 * the style will be set to another/default.
 *
 * @param {The list of link elements whose styles needs to be changed} elements
 * @param {The current hash-value} currentHash
 */
function changeSelectedStyle(elements, currentHash) {
  for (let element of elements) {
    if (element.href.split("#")[1].startsWith(currentHash)) {
      element.style.color = "var(--black)";
      element.className = "navigators selected";
    } else {
      element.style.color = "var(--white)";
      element.className = "navigators";
    }
  }
}

/**
 * Due to the nature of the selected-style, we can't use the
 * :hover-attribute in CSS, so we'll need to implement our own.
 * When the mouse enters a navigation-element, it will have one style,
 * and when it leaves, it will have another.
 */
function setupHoverStyle() {
  for (let element of document.getElementsByClassName("navigators")) {
    element.onmouseenter = () => {
      element.style.color = "var(--black)";
    };
    element.onmouseleave = () => {
      if (!element.className.includes("selected"))
        element.style.color = "var(--white)";
    };
  }
}
