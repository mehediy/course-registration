import React from "react";

const Cart = ({ selectedCourse, creditHour, remainingHour }) => {
  //   Calculate total price
  let price = 0;
  selectedCourse.map((course) => {
    price = price + course.price;
  });

  return (
    <div className="w-1/4 bg-white p-4 self-start rounded-lg flex flex-col gap-2">
      <h3 className="text-[#2F80ED] text-lg font-bold border-b-2 py-2">
        Credit Hour Remaining: {remainingHour} hr
      </h3>
      <div>
        <h3 className="text-xl font-bold">Course Name</h3>
        <ol className="list-decimal py-4 ml-5 text-[#1C1B1B99]">
          {selectedCourse.map((course, idx) => (
            <li key={idx}>{course.title}</li>
          ))}
        </ol>
      </div>
      <h3 className="border-b-2 border-t-2 py-2 font-medium">
        Total Credit Hour: {creditHour}
      </h3>
      <h3 className="font-semibold">Total Price: {price.toFixed(2)} USD</h3>
    </div>
  );
};

export default Cart;
