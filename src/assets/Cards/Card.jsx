import PropTypes from "prop-types";
import { IoMdBook } from "react-icons/io";
import { FiDollarSign } from "react-icons/fi";

const Card = ({ image, card, handleAddToCourse }) => {
  const { title, description, price, credit } = card;
  return (
    <div className="p-2 m-2 flex flex-col justify-between h-full">
      <img
        className="w-full h-48 object-cover rounded-lg"
        src={image}
        alt={title}
      />
      <div className="flex-grow">
        <h2 className="text-2xl mt-3 mb-3">{title}</h2>
        <p>{description}</p>
      </div>
      <div className="flex justify-between p-2 m-2">
        <div className="flex items-center">
          <FiDollarSign className="mr-1" />
          <p>{price}</p>
        </div>
        <div className="flex items-center">
          <IoMdBook className="mr-1" />
          <p>{credit} hr</p>
        </div>
      </div>
      <button
        onClick={() => handleAddToCourse(card)}
        className="bg-blue-600 text-white w-full p-2 mt-3 rounded-xl"
      >
        Select
      </button>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  card: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    credit: PropTypes.number.isRequired,
  }).isRequired,
  handleAddToCourse: PropTypes.func.isRequired,
};

export default Card;
