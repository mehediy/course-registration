import React from "react";
import dollar from "../../assets/dollar.svg";
import book from "../../assets/book.svg";

const Card = ({ course }) => {
  const { id, cover, title, description, price, credit } = course;
  return (
    <div>
      <img src={cover} alt={course.title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        <span>
          <img src={dollar} /> {price}
        </span>
        <span>
          <img src={book} /> {credit}
        </span>
      </div>
      <button>Select</button>
    </div>
  );
};

export default Card;
