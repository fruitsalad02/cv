const Projects = () => {
    return ( 
        <div>
            <section class="resume-section" id="projects">
                <div class="resume-section-content">
                    <h2 class="mb-5">Featured Projects</h2>

                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Database Design Simulating DoorDash’s Business Model</h3>
                            <div class="subheading mb-3">67-262 Database Design and Development</div>
                            <ul>
                                <li>Designed scheme to represent relationships between customers, deliverers, and businesses following best practices in conceptual, logical, physical, and relational models with normalization into Boyce-Codd Normal Form</li>
                                <li>Developed UI/UX for database queries, utilizing PL/pgSQL, SQL, and Python</li>
                                <li>Full-stack development for both front-end and back-end involving database building, modeling, and UI/UX design</li>
                            </ul>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">2021</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Research and Analysis of Multiple Machine Learning Classifiers </h3>
                            <div class="subheading mb-3">36-202 Methods for Statistics and Data Science</div>
                            <ul>
                                <li>Compared four different machine learning classifiers (Linear Discriminant Analysis, Quadratic Discriminant Analysis, Classification Trees, and Binary Logistic Regression) to determine the most useful model for predictions</li>
                                <li>Utilized techniques and methodologies involving feature set construction, R, and box/bar/pairs plots</li>
                                <li>Authored a <a href="https://drive.google.com/file/d/1Phv9S8ABpbTKFCUBYcRAba56mQR4K3d7/view?usp=sharing" target="_blank">research paper</a> using LaTeX</li>
                            </ul>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">2021</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Full-Stack Website Development</h3>
                            <div class="subheading mb-3">Personal Project</div>
                            <ul>
                                <li>Designed this website from scratch using HTML, CSS, JavaScript, React, Node.js, Express, and APIs</li>
                            </ul>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">2021</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Interactive Robotics</h3>
                            <div class="subheading mb-3">16-223 IDeATe: Creative Kinetic Systems</div>
                            <ul>
                                <li>Created an interactive wireframe mask that fits over the user’s head using an NPN phototransistor to detect the user’s movement and translate it to meaningful action</li>
                                <li>The project involved circuit design, Arduino Uno Rev3 programming, and event driven programming in C/C++</li>
                            </ul>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">2020</span></div>
                    </div>
                    
                </div>
            </section>
            <hr class="m-0" />
        </div>
     );
}
 
export default Projects;