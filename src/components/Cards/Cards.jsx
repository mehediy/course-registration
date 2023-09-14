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
    <>
      {courses.map((course) => (
        <Card course={course} />
      ))}
    </>
  );
};

export default Cards;
