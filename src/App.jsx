import "./App.css";
import Cards from "./components/Cards/Cards";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-3xl font-bold py-6">
        Course Registration
      </h1>
      <div className="flex justify-center gap-4">
        <Cards />
        <Cart />
      </div>
    </div>
  );
}

export default App;
