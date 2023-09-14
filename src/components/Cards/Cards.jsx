import React, { useEffect, useState } from "react";
import Card from "./Card";

const Cards = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="grid grid-cols-3 gap-4">
      {courses.map((course) => (
        <Card course={course} />
      ))}
    </div>
  );
};

export default Cards;
