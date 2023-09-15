import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Cart from "./components/Cart/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [creditHour, setCreditHour] = useState(0);
  const [remainingHour, setRemainingHour] = useState(20);

  const selectedCourseHandler = (course) => {
    const isExist = selectedCourse.find((item) => item.id == course.id);
    let currentCreditHour = creditHour + course.credit;

    if (isExist) toast("Already selected");
    else {
      if (currentCreditHour > 20) {
        toast("Insufficient Remaining Credit Hours");
      } else {
        setSelectedCourse([...selectedCourse, course]);
        setCreditHour(currentCreditHour);
        setRemainingHour(20 - currentCreditHour);
      }
    }
  };

  return (
    <div className="container mx-auto pb-14 px-2">
      <h1 className="text-center text-3xl font-bold py-6">
        Course Registration
      </h1>
      <ToastContainer />
      <div className="flex justify-center gap-4">
        <Cards selectedCourseHandler={selectedCourseHandler} />
        <Cart
          selectedCourse={selectedCourse}
          creditHour={creditHour}
          remainingHour={remainingHour}
        />
      </div>
    </div>
  );
}

export default App;
