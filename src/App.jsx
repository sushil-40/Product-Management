import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Form } from "./components/Form";
import { ProductTable } from "./components/ProductTable";
// import { ChallengeBlog } from "./components/ChallengeBlog";
// import { ChallengeECommerceCart } from "./components/ChallengeECommerceCart";
import {
  fetchAllProducts,
  postProduct,
  updateProduct,
} from "./helpers/axiosHelper";

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
    if (response?.status === "success") {
      getAllProducts(); // ✅ Refresh updated product list
    }
  };
  const getAllProducts = async () => {
    // call the axiosHelper to get data from the server
    const data = await fetchAllProducts();

    //mount that data to our productList
    data?.status === "success" && setListOfProduct(data.results);
  };
  const updateProductItem = async (_id, product) => {
    const data = await updateProduct({ _id, product }); // ✅ Correct format
    setResp(data);

    if (data?.status === "success") {
      getAllProducts(); // ✅ Refresh updated product list
    }
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
      <ProductTable
        products={listOfProduct}
        updateProductItem={updateProductItem}
      />
      {/* <ChallengeBlog /> */}
      {/* <ChallengeECommerceCart /> */}
    </div>
  );
}

export default App;
