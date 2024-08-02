import React from "react";
import PropTypes from "prop-types";
import "./App.css"; // Ensure this import is present

const Coursedetails = ({ course, totalCreditHours, totalPrice }) => {
  const remainingCreditHours = 20 - totalCreditHours;

  return (
    <div className="md:w-2/5 lg:w-1/3 m-2 p-4 border rounded-lg shadow-lg">
      <h2 className="pb-2 border-b-2 text-blue-500 font-semibold course-total">
        Credit Hour Remaining: {remainingCreditHours}
      </h2>
      <h3 className="course-header font-semibold mt-4 mb-3">
        Courses selected: {course.length}
      </h3>
      {course.map((course, index) => (
        <div key={course.id} className="mb-2 p-2 bg-gray-100 rounded">
          <h4 className="course-title font-medium">
            {index + 1}. {course.title}
          </h4>
        </div>
      ))}
      <h2 className="pb-2 border-t-2 text-blue-500 font-semibold mt-4 course-total">
        Total Price: ${totalPrice}
      </h2>
    </div>
  );
};

Coursedetails.propTypes = {
  course: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      credit: PropTypes.number.isRequired,
    })
  ).isRequired,
  totalCreditHours: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default Coursedetails;
