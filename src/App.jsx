import React, { useState } from "react";
import "./App.css";
import Header from "./assets/Header/Header";
import Cards from "./assets/Cards/Cards";
import Coursedetails from "./assets/Coursename/Coursedetails";

function App() {
  const [course, setCourse] = useState([]);
  const [totalCreditHours, setTotalCreditHours] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddToCourse = (card) => {
    const isDuplicate = course.some((item) => item.id === card.id);

    if (isDuplicate) {
      alert(`The course "${card.title}" is already added.`);
    } else {
      const newTotalCreditHours = totalCreditHours + card.credit;
      if (newTotalCreditHours > 20) {
        alert("Total credit hours exceed the limit of 20.");
      } else {
        const newCourse = [...course, card];
        setCourse(newCourse);
        setTotalCreditHours(newTotalCreditHours);
        setTotalPrice(totalPrice + card.price);
      }
    }
  };

  return (
    <>
      <Header />
      <div className="md:flex justify-between p-4 m-4">
        <Cards handleAddToCourse={handleAddToCourse}></Cards>
        <Coursedetails
          course={course}
          totalCreditHours={totalCreditHours}
          totalPrice={totalPrice}
        ></Coursedetails>
      </div>
    </>
  );
}

export default App;
