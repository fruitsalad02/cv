const CourseList = ({ courses }) => {
    return ( 
        <div>
            {courses.map(course => (
                <div class="card border-secondary mb-3">
                    <div class="card-header">
                        <b>{ course.title }</b>
                    </div>
                    <div class="card-body" key={course.id} >
                        { course.description }
                        <br />
                        <br />
                        <p><b>Skills: { course.skills }</b></p>
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default CourseList;