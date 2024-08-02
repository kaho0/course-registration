import React, { useEffect, useState } from "react";
import Card from "./Card";
import PropTypes from "prop-types";

const Cards = ({ handleAddToCourse }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          card={card}
          handleAddToCourse={handleAddToCourse}
        />
      ))}
    </div>
  );
};

Cards.propTypes = {
  handleAddToCourse: PropTypes.func.isRequired,
};

export default Cards;
