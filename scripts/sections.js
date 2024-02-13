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
            This website is my portfolio and it will be updated with new projects and features to highlight my skills within IT and Design. <br> Feel free to explore and contact me!
        </p>
    </div>

    <div class="navigation-buttons-container">
        <a href="#home" class="navigators">Home</a> 
        <a href="#about" class="navigators">About</a> 
        <a href="#projects" class="navigators">Projects</a>
    </div>
  </div>
`;
const aboutSection = `<div class="grid-container">
                
            <div class="item-sidebar">
                <aside class="sidebar-left">
                    <div class="item-pictureCircle">
                        <img src="/Resources/images/profilePic.png" alt="My face"/>
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
                        <p><a href="https://www.linkedin.com/in/asger-jark-kappel-571799221" target="_blank"><img class="small-linkedIn" src="../Resources/images/LI-Logo.png" alt="Open my linkedIn profile"></a></p>
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
              <img src="/Resources/images/kandidat_fag.png" alt="Courses"/>
            </div>
        </div>

        <div id="bachelorCourses" class="modal">
            <div class="backdrop" onclick="closeModal('bachelorCourses')"></div>
            <div class="modal-content">
                <!--&times; is the little x when the pop-up is showing-->
              <span class="close" onclick="closeModal('bachelorCourses')">&times;</span>
              <h2>Master Degree Courses</h2>
              <img src="/Resources/images/BachelorFag.png" alt="Courses"/>
            </div>
        </div>
    </body>
`;
const projectsSection = `
    <div class="section">
        <h1 class="sectionTitle">Projects</h1>
        <p>Just this demo</p>
    </div>
`;
