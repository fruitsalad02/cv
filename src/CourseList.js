const CourseList = ({ courses }) => {
    return ( 
        <div>
            {courses.map(course => (
                <div class="card border-secondary mb-3">
                    <div class="card-header">
                        { course.title }
                    </div>
                    <div class="card-body" key={course.id} >
                        <b>{ course.description }</b>
                        <br />
                        <br />
                        <p>Skill: { course.skills }</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default CourseList;