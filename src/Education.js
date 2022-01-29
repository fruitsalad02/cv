import { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import CourseList from "./CourseList";

const Education = () => {
    var [toggle, setToggle] = useState(false);
    const courses = [
      {
        "id": 1,
        "title": "Principles of Functional Programming (Fall 2021)",
        "description": "Introduces theory and practice of functional programming. Students learn how to use abstract data types and higher order functions to solve problems. In addition to this, students learn different styles of programming including Continuation Passing Style using tail recursions and Lazy programming using streams.",
        "skills": "SML/NJ, parallelism, cost graphs and recurrences to analyze work and span"
      },
      {
        "id": 2,
        "title": "Database Design and Development (Fall 2021)",
        "description": "Study tools and techniques for managing data with database systems. Students learn how to use a database system and how to build a database system. Course themes include relational models, SQL, progoramming interface to a database, transactions, constraints, security, functional dependencies, normalization, ER models, and non-relational models.",
        "skills": "SQL, PL/pgSQL, MongoDB, PyMongo, Vertabelo, database modeling (conceptual, logical, physical, relational)"
      },
      {
        "id": 3,
        "title": "Designing Human-Centered Software (Fall 2021)",
        "description": "Introduces the skills and concepts of Human-Computer Interaction. Covers iterative design processes, interactive prototype construction, discount evaluation techniques, and the historical context of HCI.",
        "skills": "Prototyping and user testing, Processing IDE (Java)"
      },
      {
        "id": 4,
        "title": "Information and Grid Design (Fall 2021)",
        "description": "Utilize grid systems, images, text, and typography to convey meaningful messages through design.",
        "skills": "Adobe XD, Adobe Photoshop, Bootstrap/HTML/CSS, grid design (manuscript, column, modular)"
      },
      {
        "id": 5,
        "title": "Principles of Imperative Computation (Spring 2021)",
        "description": "Teaches imperative programming in a C-like language and methods for ensuring the correctness of imperative programs.",
        "skills": "C, data structures (binary trees, avl trees, stacks, queues), abstraction, modularity"
      },
      {
        "id": 6,
        "title": "Information Systems Milieux (Spring 2021)",
        "description": "Understand the role of IS in the enterprise and the means by which these systems are created, utilized, and maintained. Focuses on enterprise information architecture including the components of enterprise strategy, business, application, information, and infrastructure layers. Provides framework for understanding information systems and a language to identify their dynamic complexities and interdependencies. Themes include project management, eCommerce, mobile computing and digital economy, front-end web development, database design and modeling, decisions support systems, and information security and privacy.",
        "skills": "HTML/CSS/jQuery/Javascript, SQL, project management, creating user stories and value propositions, ER modeling"
      },
      {
        "id": 7,
        "title": "Methods for Statistics and Data Science (Spring 2021)",
        "description": "Covers simple and multiple regression, analysis of variance methods and logistic regression. Students use RStudio to produce models, analyze data, and produce written reports. The course also explores some machine learning classifiers.",
        "skills": "R"
      },
      {
        "id": 8,
        "title": "Fundamentals of Programming and Computer Science (Fall 2020)",
        "description": "Offers a technical introduction to the fundamentals of programming with an emphasis on producing clear, robust, and reasonably efficient code using top-down design, informal analysis, and effective testing and debugging. Targets numerous deployment scenarios, including standalone programs, shell scripts, and web-based applications.",
        "skills": "Python and various libraries"
      },
      {
        "id": 9,
        "title": "IDeATe: Creative Kinetic Systems (Fall 2020)",
        "description": "Introduces physical computing and addresses practical design and fabrication of robots, interactive gadgets, and kinetic sculptures.",
        "skills": "Arduino IDE (C/C++)"
      },
      {
        "id": 10,
        "title": "Cognitive Psychology (Fall 2020)",
        "description": "Introduces how people perceive, learn, think, and remember.",
        "skills": "Knowledge on theories of perception, attention, memory, knowledge representation, learning, language, problem solving, reasoning, and decision making"
      },
    ];

    return ( 
        <div>
            <section class="resume-section" id="education">
                <div class="resume-section-content">
                    <h2 class="mb-5">Education</h2>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Carnegie Mellon University</h3>
                            <div class="subheading mb-3">Bachelor of Science</div>
                            <div>Information Systems, Minor in Computer Science and Human-Computer Interaction</div>
                            <p>GPA: 3.60, Dean's List</p>

                            <button class="btn btn-primary" onClick={() => setToggle((toggle) => !toggle)}>
                                {toggle? "Hide Courses":"Show Relevant Courses"}
                            </button>

                            <br />
                            <br />

                            <Collapse in={toggle}>
                                <div>
                                    { courses && <CourseList courses={courses} /> }
                                </div>
                            </Collapse>
                           
                        </div>

                        <div class="flex-shrink-0"><span class="text-primary">August 2020 - May 2024</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Hillsborough High School</h3>
                            <div class="subheading mb-3">International Baccalaureate Program</div>
                            <div>Valedictorian</div>
                            <p hidden>GPA: 7.??</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">August 2016 - May 2020</span></div>
                    </div>
                </div>
            </section>
            <hr class="m-0" />
        </div>
     );
}
 
export default Education;