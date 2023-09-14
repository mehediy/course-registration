import "./App.css";
import Cards from "./components/Cards/Cards";

function App() {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-3xl font-bold py-6">
        Course Registration
      </h1>
      <div>
        <Cards />
      </div>
    </div>
  );
}

export default App;
