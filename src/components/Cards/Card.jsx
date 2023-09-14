import React from "react";
import dollar from "../../assets/dollar.svg";
import book from "../../assets/book.svg";

const Card = ({ course }) => {
  const { id, cover, title, description, price, credit } = course;
  return (
    <div className="bg-white p-4 rounded-lg flex flex-col justify-between gap-4">
      <img src={cover} alt={course.title} />
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm text-[#1C1B1B99] ">{description}</p>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center text-[#1C1B1B99] font-medium">
          <span className="flex items-center gap-2">
            <img src={dollar} /> Price: {price}
          </span>
          <span className="flex items-center gap-2">
            <img src={book} /> Credit: {credit} hr
          </span>
        </div>
        <button className="bg-[#2F80ED] text-white font-semibold text-lg rounded-lg p-2">
          Select
        </button>
      </div>
    </div>
  );
};

export default Card;
