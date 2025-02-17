import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Form } from "./components/Form";
import { ProductTable } from "./components/ProductTable";
import { ChallengeBlog } from "./components/ChallengeBlog";
import { ChallengeECommerceCart } from "./components/ChallengeECommerceCart";
import { postProduct } from "./helpers/axiosHelper";

function App() {
  const [listOfProduct, setListOfProduct] = useState([]);

  const addProduct = async (productName) => {
    // setListOfProduct([...listOfProduct, productObj]);

    //call api to send data to the database
    // try {
    //   const response = await postProduct(productName);
    //   console.log(response);
    // } catch (error) {
    //   console.log(error.messge);
    // }
    const response = await postProduct(productName);

    console.log(response.data, "test api response data");
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
