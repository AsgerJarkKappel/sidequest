//This renders the navbar on each page. Hidden in the shadow dom for encapsulation
const host = document.querySelector("#header");

const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="nav.css">
    
<div class="topnav" id="myTopnav">
    <a href="#home" class="active">Home</a>
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <i class="fa fa-bars"></i>
    </a>
</div>`;

class Test extends HTMLElement {
  constructor() {
    super();
    const host = document.querySelector("#header");
    const shadow = host.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));
  }
}
customElements.define("nav-element", Test);

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
