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
    case "nested":
      return cvSection;
    case "contact":
      return contactSection;
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
            <img src="Resources/images/profile-pic.png" alt="My face">
        </div>
        <p class="greetings">&lt; Hello World! &sol;&gt;</p>
        <p class="under-title">My name is Asger and I'm an <span style="font-weight: bold;">IT-Product Developer</span>.</p>
        <p class="under-title">I'm interested in <span style="font-weight: bold;">UI/UX design</span> and work as a <span style="font-weight: bold;">Front-end developer</span>.
            This website is my portfolio and it will be updated with new projects and features to highlight my skills within IT and Design. <br> Feel free to explore and contact me!
        </p>
    </div>

    <div class="navigation-buttons-container">
        <a href="#about" class="nav-btn">about</a> 
        <a href="#projects" class="nav-btn">Projects</a> 
        <a href="#contact" class="nav-btn">Contact</a>
    </div>
  </div>
`;
const aboutSection = `
<div class="about-page-container">
        <div class="about-item">
            
            <div class="about-pic-container flexBig">
                <h1 class="about-title">About me</h1>
                <img src="Resources/images/profile-pic.png" alt="My face">
            </div>
            <span>My Name is Asger Kappel, I'm 25 years old and a recently graduated 
                        Master of Science (MSc) in IT-Product Development graduated from
                        Aarhus university. Exited to start my career
                        in IT and learn from the best in the business
                        to build on my skills and acquire new expertises.
                        Interested in all aspects of developing
                        IT products, understanding users’ needs, and
                        developing software on both front- and backend
                        side to facilitate user needs. I work well
                        in teams and I am capable of working on individual
                        tasks as well. I enjoy responsibility and
                        solving my tasks with quality and efficiency
                        drives me.<br><br>

                        You can download my CV below or open an online version, <span style="font-weight:bold;"> online version is destop only.</span>
            </span>

            <div class="cv-btn-container">
                <a href="#nested" class="cv-nav-btn">See Online CV</a> 
                <a href="../Resources/asger-cv.pdf" target="_blank" class="cv-nav-btn">Download CV PDF</a>
            </div>
        </div>

        <div class="about-item">
            
            <h1 class="about-title">About this Website</h1>
            
            <span>This website is my portfolio. Its existence is to showcase my
                skills within software development and UI/UX Design. The motivation behind
                beginning this Portfolio project was to address shortcommings related to
                my capabilities and understanding of software developement. To address this 
                I outlined a few simple rules with this project</span>

            <div class="rules-item">    
                <ul class="rules">
                    <li>Do it yourself</li>
                    <li>Understand every line of code</li>
                    <li>Use design guidelines for good UX</li>
                </ul>
            </div>
            <span style="margin-top:0; margin-bottom:10px">By adhearing to these rules I ensure that I learn how to develop software
            by actually doing it and keep my UX skills sharp, and I can also with full transparency show my capabilities.<br>
            <br>This portfolio-website is static and is developed using HTML, CSS and JavaScript. The project page will be updated
            with projects were I will use different technologies to gain full-stack experience and have fun.
            </span>
        </div>
    </div>
`;
const projectsSection = `
    <div class="projects-container">
        <a href="#home">
            <div class="project-item">
                <img src="Resources/images/portfolio-project.png">
                <h2>Portfolio</h2>
                <span>This project is a standart portfolio project aimed at showcasing
                    and learning front-end development.<br>
                    <span style="font-weight:bold">This project is ongoing and exploratory
                    </span>,
                    both on the software and UX-side.
                </span>
        
                <div class="tech-stack">
                    <img src="Resources/images/html-5.png">
                    <img src="Resources/images/css-3.png">
                    <img src="Resources/images/js.png">
                </div>
            </div>
        </a>
    </div>
    `;

const cvSection = `<div class="grid-container">
                
            <div class="item-sidebar">
                <aside class="sidebar-left">
                    <div class="item-pictureCircle">
                        <img src="Resources/images/profile-pic.png" alt="My face">
                    </div>
                    
                    <div class="item-about"><h5>About</h5>
                    <p>Soon to be Master of Science (MSc) in
                        IT-Product Development graduating from
                        Aarhus university. Exited to start my career
                        in IT and learn from the best in the business
                        to build on my skills and acquire new expertises.
                        Interested in all aspects of developing
                        IT products, understanding users’ needs, and
                        developing software on both front- and backend
                        side to facilitate user needs. I work well
                        in teams and I am capable of working on individual
                        tasks as well. I enjoy responsibility and
                        solving my tasks with quality and efficiency
                        drives me.</p></div>

                    <div class="item-contact">
                        <h5>Contact</h5>
                        <p><span style="letter-spacing:0.04em;"><span class="thick-text">Phone:</span> 53384896</span></p>
                        <p><span style="letter-spacing:0.04em;"><span class="thick-text">E mail:</span> asger.k@hotmail.com</span></p>
                        <p><span style="letter-spacing:0.04em;"><span class="thick-text">Address: </span> Søndre Ringgade 77, st tv 8000 Århus</span></p>
                        <p><a href="https://www.linkedin.com/in/asger-jark-kappel-571799221" target="_blank"><img class="small-linkedIn" src="Resources/images/li-logo.png" alt="Open my linkedIn profile"></a></p>
                    </div>
                </aside>
            </div>

            <div class="item-title">
                <h1> Asger Jark Kappel</h1>
                <h3>Cand.IT</h3>
                <div class="button_container"> 
                    <span class="contentText" style="color: white;">Toggle between Education and work relavance</span>
                    <button id="educationButton" onclick="changeContent('education')">school</button>
                    <button id="workButton" onclick="changeContent('work')">Work</button>
                </div>
            </div> 

            <div id="education" class="container_cv active">
                <div class="content">
                    <div class="left">
                        <h3 class="content_title">Aarhus Univeristy</h3>
                        <p class="cv_date">2021-2023</p>
                        <p class="cv_date">Master degree</p>
                    </div>
                    <div class="fill">
                        <p><span class="contentText"><span style="font-weight: bold;">Natural science:</span> IT-Product Development</span></p>
                        <p><button id="MasterCoursesButton" onclick="openModal('masterCourses')">Press to see curse list</button></p>
                        <p><span class="contentText"><span style="font-weight: bold;">Master Thesis: </span> An Exploration of Situated and Casual
                            Data Visualization for Lowering Shower Consumption</span></p>
                    </div>
                </div>

                <div class="content">
                    <div class="left">
                        <h3 class="content_title">Aarhus Univeristy</h3>
                        <p class="cv_date">2018-2021</p>
                        <p class="cv_date">Bachelor Degree</p>
                    </div>
                    <div class="fill">
                        <p><span class="contentText"><span style="font-weight: bold;">Natural science:</span> IT-Product Development</span></p>
                        <p><button id="BachelorCoursesButton" onclick="openModal('bachelorCourses')">Press to see curse list</button></p>
                        <p><span class="contentText"><span style="font-weight: bold;">Bachelor Thesis: </span> Exploring the future of voting</span></p>
                    </div>
                </div>

                <div class="content">
                    <div class="left">
                        <h3 class="content_title">Paderup Gymnasium</h3>
                        <p class="cv_date">2014-2017</p>
                        <p class="cv_date">Danish Gymnasium (STX)</p>
                    </div>
                        
                    <div class="fill">
                        <p><span class="contentText"><span style="font-weight: bold;">Area of focus: </span> Natural Science</span></p>
                        <p class="contentText">Mathematics on A- level</p>
                        <p class="contentText">Physics on A- level</p>
                    </div>
                </div>

                <div class="content">
                    <div class="left">
                        <h3 class="content_title">Forberedelsesskolen</h3>
                        <p class="cv_date">2007-2014</p>
                        <p class="cv_date">Third to Ninth grade</p>
                    </div>
                        
                    <div class="fill">
                        <p class="contentText">Found my interest in Science</p>
                        <p class="contentText">Began taking guitar lessons</p>
                    </div>
                </div>
            </div>

            <div id="work" class="container_cv">
                <div class="content">
                    <div class="left">
                        <h3 class="content_title">Develco Products</h3>
                        <p class="cv_date">2017-2018</p>
                    </div>
                    
                    <div class="fill">
                        <p><span class="contentText italic"><span style="font-weight: bold; font-style: normal;">Position: </span> Quality Assurance Quality Control</span></p>
                        <p><span class="contentText"><span style="font-weight: bold;">Responsibility: </span> Responsible for version updating and repackaging IoT products</span></p>
                    </div>
                </div>
            
                <div class="content">
                    <div class="left">
                        <h3 class="content_title">Sunset Boulevard</h3>
                        <p class="cv_date">2015-2016</p>

                    </div>
                    
                    <div class="fill">
                        <p><span class="contentText italic"><span style="font-weight: bold; font-style: normal;">Position: </span> Service worker</span></p>
                        <p><span class="contentText"><span style="font-weight: bold;">Responsibility: </span> Responsible for customer contact in restaurant and drive-in,
                            making food, and cleaning</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!--Pop up grades-->
        <div id="masterCourses" class="modal">
            <div class="backdrop" onclick="closeModal('masterCourses')"></div>
            <div class="modal-content">
                <!--&times; is the little x when the pop-up is showing-->
              <span class="close" onclick="closeModal('masterCourses')">&times;</span>
              <h2>Master Degree Courses</h2>
              <img src="Resources/images/kandidat-fag.png" alt="Courses"/>
            </div>
        </div>

        <div id="bachelorCourses" class="modal">
            <div class="backdrop" onclick="closeModal('bachelorCourses')"></div>
            <div class="modal-content">
                <!--&times; is the little x when the pop-up is showing-->
              <span class="close" onclick="closeModal('bachelorCourses')">&times;</span>
              <h2>Master Degree Courses</h2>
              <img src="/esources/images/bachelor-fag.png" alt="Courses"/>
            </div>
        </div>
    </body>`;

const contactSection = `
    <div class="about-page-container">
        <div class="about-item">
            <h1 class="about-title">Contact me</h1>
            <span>Feel free to contact me, my contact details are listed below.
            </span>

            <div class="rules-item">    
                <ul class="rules">
                    <li><span style="font-weight:bold;">E-mail: </span> <a href = "mailto:asger.k@hotmail.com?subject = Feedback&body = Message">asger.k@hotmail.com</a></li>
                    <li><span style="font-weight:bold;">Phone: </span> <span>+45 53 38 48 96</span></li>
                    <br>
                    <a href="https://www.linkedin.com/in/asger-jark-kappel-571799221" target="_blank"><img style="width:100px; height:30px;" src="Resources/images/li-logo.png" alt="Open my linkedIn profile"></a></p>
                </ul>
            </div>
        </div>
    </div>
`;
