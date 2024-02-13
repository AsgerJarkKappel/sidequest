//This renders the navbar on each page. Hidden in the shadow dom for encapsulation
/**const host = document.querySelector("#header");

const template = document.createElement("template");
//Removed style link for navbar an inserted it hear as it becomes txt and that is not supported MIME type... idk
template.innerHTML = `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
.topnav {
  overflow: hidden;
  background-color: #333;
  grid-area: nav;
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #88d498;
  color: white;
}

.topnav .icon {
  display: none;
}


/**@media screen and (max-width: 900px) {
  .topnav a{display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }

  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>    
<div class="topnav" id="myTopnav">
    <a href="../index.html" class="active">Home</a>
    <a href="#news">Projects</a>
    <a href="/views/cv.html">About me</a>
    <a href="#about">Contact me</a>
    <a href="javascript:void(0);" class="icon">
        <i class="fa fa-bars"></i>
    </a>
</div>`;

class NavBar extends HTMLElement {
  constructor() {
    super();
    const host = document.querySelector("#header");
    const shadow = host.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));
  }
}
customElements.define("nav-element", NavBar);

function myFunction() {
  console.log("Button pressed");
  //You have to know the host-node (header element, now with ID) of the shadow root (the template) to query the element.
  const host = document.getElementById("header");
  console.log("this header " + host); //Debug
  const child = host.shadowRoot;
  console.log("child is " + child); //Debug
  var x = child.querySelector(".topnav"); //Select first element with that attribute (We only have one topnav)
  console.log(x.className); //Debug
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function navigateToHome() {
  console.log("button pressed");

  location = window.location;

  console.log(location);

  location.assign("http://127.0.0.1:5500/views/landing-page/landing-page.html");

  window.location.href = location;
}

function navigateToAboutMe() {
  console.log("button pressed");

  //window.location.href = "../../veiws/";
}

function navigateToProjects() {
  console.log("button pressed");

  //window.location.href = "../../veiws/";
}*/

function myFunctionNew() {
  console.log("Button pressed");
  //You have to know the host-node (header element, now with ID) of the shadow root (the template) to query the element.
  var x = document.getElementById("myTopnav");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}
