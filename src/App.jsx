import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Cart from "./components/Cart/Cart";

function App() {
  const [selectedCourse, setSelectedCourse] = useState([]);
  const selectedCourseHandler = (course) => {
    const isExist = selectedCourse.find((item) => item.id == course.id);
    if (isExist) console.log("Already selected");
    else setSelectedCourse([...selectedCourse, course]);
  };

  console.log(selectedCourse);

  return (
    <div className="container mx-auto pb-14 px-2">
      <h1 className="text-center text-3xl font-bold py-6">
        Course Registration
      </h1>
      <div className="flex justify-center gap-4">
        <Cards selectedCourseHandler={selectedCourseHandler} />
        <Cart />
      </div>
    </div>
  );
}

export default App;
