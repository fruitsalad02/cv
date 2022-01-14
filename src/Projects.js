const Projects = () => {
    return ( 
        <div>
            <section class="resume-section" id="awards">
                <div class="resume-section-content">
                    <h2 class="mb-5">Projects</h2>

                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Database Project - DoorDash</h3>
                            <div class="subheading mb-3">Database Design and Development</div>
                            <p>I simulated creating the underlying structure of DoorDash's business model from scratch. Using information on DoorDash's current business model and functions, I came up with value propositions and user stories for the company. With this, I was able to develop a conceptual model that I translated into logical, physical, and relational models. During this process, I made necessary changes to the structure of the models to adhere to Boyce-Codd Normal Form. I used these models to program user-prompted queries, utilizing a combination of PL/pgSQL, SQL, and Python, allowing the user to gather useful information from the created database tables.</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">Fall 2021</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Machine Learning Classification</h3>
                            <div class="subheading mb-3">Methods for Statistics and Data Science</div>
                            <p>Programming in R, I conducted a study to compare four different machine learning classifiers (LDA, QDA, classification trees, and binary logistic regression) by constructing a feature set extracted from the Titanic passenger data set. A final classifier was determined to be the most useful in predicting the survivability of the passengers.</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">Spring 2021</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Regression Models</h3>
                            <div class="subheading mb-3">Methods for Statistics and Data Science</div>
                            <p>Programming in R, I explored a variety of regression models using a feature set resulting from a bike-sharing system data set. The most useful model in predicting the number of users for the system was determined by considering significant interactions between the variables using factors such as interaction plots, vif comparisons, p-values, residual plots, and qq plots.</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">Spring 2021</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Information Systems Term Project Proposal</h3>
                            <div class="subheading mb-3">Information Systems Milieux</div>
                            <p>I proposed a solution to counter the disorganization of vaccine distribution in the United States. I gathered research on the prevailing problem, designed and created a poster detailing the problem and solution, and created a video to advertise our solution.</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">Spring 2021</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Database Project - Yamaha</h3>
                            <div class="subheading mb-3">Information Systems Milieux</div>
                            <p>Given Yamaha piano sales data, I created and performed a series of SQL queries on a database using SQL. I also created an entity-relationship diagram and wrote a business memo specifying which dealership and brand of piano would be useful in expanding.</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">Spring 2021</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Web Development Project</h3>
                            <div class="subheading mb-3">Information Systems Milieux</div>
                            <p>Following specific guidelines given by a client, I redesigned the website for the Duquesne Incline using HTML, CSS, and JQuery. In addition to the website, I created a design guide, a task breakdown, a timeline for the project, and conducted user testing to improve the website before its final implementation.</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">Spring 2021</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Robotic, Interactive, and Kinetic Mask</h3>
                            <div class="subheading mb-3">IDeATe: Creative Kinetic Systems</div>
                            <p>Using C/C++ and an Arduino Uno Rev3, I created an interactive wireframe mask that fits over the user’s head. This mask used an NPN phototransistor to detect the user’s movement to then translate it to meaningful action. The project involves the physical design of the mask and circuit design along with coding event logic in C/C++.</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">Fall 2020</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Python-Based Computer Game</h3>
                            <div class="subheading mb-3">Fundamentals of Programming and Computer Science</div>
                            <p>I designed and programmed a rhythm-based game where the player and enemies move according to the beat of a chosen song. The game features different types of enemies that have their own AI attack patterns and a randomly generated stage. This project uses Python, PIL/Pillow, and the Librosa package.</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">Fall 2020</span></div>
                    </div>

                </div>
            </section>
            <hr class="m-0" />
        </div>
     );
}
 
export default Projects;