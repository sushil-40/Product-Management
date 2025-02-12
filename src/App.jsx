import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Form } from "./components/Form";
import { ProductTable } from "./components/ProductTable";
import { ChallengeBlog } from "./components/ChallengeBlog";
import { ChallengeECommerceCart } from "./components/ChallengeECommerceCart";

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

      {/* <ChallengeBlog /> */}
      {/* <ChallengeECommerceCart /> */}
    </div>
  );
}

export default App;
