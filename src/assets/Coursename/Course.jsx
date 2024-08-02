import PropTypes from "prop-types";

const Course = ({ course }) => {
  const { title } = course;

  return (
    <div>
      <h3 className="text-3xl">Course : {course.length}</h3>
      {course.map((course) => (
        <div key={course.id}>
          <h4 className="text-xl">{course.title}</h4>
        </div>
      ))}
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      credit: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Course;
