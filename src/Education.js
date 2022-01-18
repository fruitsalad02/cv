import { useState } from 'react';
import { Collapse } from 'react-bootstrap';

const Education = () => {
    var [toggle, setToggle] = useState(false);

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
                                {toggle? "Hide Courses":"Show Courses"}
                            </button>
                            <Collapse in={toggle}>
                                <div class="card card-body">
                                    Computer Science 100
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