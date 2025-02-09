import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Form } from "./components/Form";
import { ProductTable } from "./components/ProductTable";

function App() {
  const [listOfProduct, setListOfProduct] = useState([]);
  const addProduct = (product) => {
    setListOfProduct([...listOfProduct, product]);
  };

  return (
    <div className="wrapper">
      <Navbar />
      <Form addProduct={addProduct} />
      <ProductTable products={listOfProduct} />
    </div>
  );
}

export default App;
