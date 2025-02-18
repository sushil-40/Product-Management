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

    console.log(response.data, "test rsp data from axiosHelper");
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
    console.log(response);
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
