const Education = () => {
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

                           
                        </div>

                        {/* <div>
                            <p>
                            <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                Link with href
                            </a>
                            <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                Button with data-target
                            </button>
                            </p>
                            <div class="collapse" id="collapseExample">
                            <div class="card card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                            </div>
                            </div>
                        </div> */}

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