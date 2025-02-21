import axios from "axios";
const apiEP = "http://localhost:8000/api/v1/products";

// const apiProcessor = async axios({ method, data }) => {
//   try {
//     const response = await axios({
//       method: method,
//       url: apiEP,
//       data,
//     });
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     return {
//       status: "error",
//       message: error.message,
//     };
//   }
// };

export const postProduct = async (productName) => {
  try {
    console.log(apiEP);
    const response = await axios.post(apiEP, { product: productName }); //the product is the same name from table

    return response.data; // ✅ Return response
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const fetchAllProducts = async () => {
  try {
    const response = await axios.get(apiEP);

    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const updateProduct = async (_id, updatedProductItemObj) => {
  try {
    const response = await axios.patch(apiEP, {
      _id,
      ...updatedProductItemObj,
    });

    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
