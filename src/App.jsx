import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Form } from "./components/Form";
import { ProductTable } from "./components/ProductTable";
// import { ChallengeBlog } from "./components/ChallengeBlog";
// import { ChallengeECommerceCart } from "./components/ChallengeECommerceCart";
import { fetchAllProducts, postProduct } from "./helpers/axiosHelper";

function App() {
  const [listOfProduct, setListOfProduct] = useState([]);
  const [resp, setResp] = useState({});

  const shouldFetchRef = useRef(true);

  useEffect(() => {
    shouldFetchRef.current && getAllProducts();

    shouldFetchRef.current = false;
  }, []);
  const addProduct = async (productName) => {
    // setListOfProduct([...listOfProduct, productObj]);

    //call api to send data to the database

    const response = await postProduct(productName);
    console.log((response, "test res from front end"));
    setResp(response);
  };
  const getAllProducts = async () => {
    // call the axiosHelper to get data from the server
    const data = await fetchAllProducts();

    //mount that data to our productList
    data?.status === "success" && setListOfProduct(data.results);
  };

  return (
    <div className="wrapper">
      <Navbar />
      {resp?.message && (
        <div
          className={
            resp?.status === "success"
              ? "alert alert-success"
              : "alert alert-danger"
          }
        >
          {resp?.message}
        </div>
      )}

      <Form addProduct={addProduct} />
      <ProductTable products={listOfProduct} />
      {/* <ChallengeBlog /> */}
      {/* <ChallengeECommerceCart /> */}
    </div>
  );
}

export default App;
