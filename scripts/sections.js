/**
 * A simple switch case that just returns a string based on the
 * input id/value.
 *
 * @param {The hash value whose section is needed} id
 * @returns
 */
function getSectionContent(id) {
  switch (id) {
    case "home":
      return homeSection;
    case "about":
      return aboutSection;
    case "projects":
      return projectsSection;
    case "editor":
      return editorSection;
    default:
      return '<span class="errTxt">Error 404</span>';
  }
}

//Below are the various sections that are displayed on the site
// when the hash changes. These can be split into individual
// documents if desired.
const homeSection = `
  <div class="content-container">
    <div class="presentation">
        <div class="pic-container">
            <img src="/Resources/images/profilePic.png" alt="My face"/>
        </div>
        <p class="greetings">Hello!</p>
        <p class="under-title">My name is Asger and I'm an <span style="font-weight: bold;">IT-Product Developer</span>.</p>
        <p class="under-title">I'm interested in <span style="font-weight: bold;">UI/UX design</span> and work as a <span style="font-weight: bold;">Front-end developer</span>.
            This website is my portfolio and it will be updated with new projects and features to highlight my skills within IT and Design. Feel free to explore and contact me!
        </p>
    </div>

    <div class="navigation-buttons-container">
        <button class="nav-btn">Projects</button>
        <button id="aboutMeBtn" onclick="navigateToAboutMe()" class="nav-btn">About me</a></button>
        <button class="nav-btn">Contact</button>
    </div>
  </div>
`;
const aboutSection = `
    <div class="section">
        <h1 class="sectionTitle">About</h1>
        <p>This is just a demo</p>
    </div>
`;
const projectsSection = `
    <div class="section">
        <h1 class="sectionTitle">Projects</h1>
        <p>Just this demo</p>
    </div>
`;
