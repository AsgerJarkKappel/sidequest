const openHam = document.getElementById("openHam");
const closeHam = document.getElementById("closeHam");
const navigationItems = document.getElementById("navigation-items");

function openDropDown() {
  console.log("button pressed");
  openHam.style.display = "none";
  closeHam.style.display = "block";
  navigationItems.classList.add("active");
}

function closeDropDown() {
  openHam.style.display = "block";
  closeHam.style.display = "none";
  navigationItems.classList.remove("active");
}
