import axios from "axios";
const apiEP = "http://localhost:8000/api/v1/products";

const apiProcessor = async ({ method, data }) => {
  try {
    const response = await axios({
      method,
      url: apiEP,
      data,
    });

    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const postProduct = async (productName) => {
  const obj = {
    method: "post",
    data: { product: productName },
  };
  return apiProcessor(obj);
};

export const fetchAllProducts = async () => {
  const obj = {
    method: "get",
  };
  return apiProcessor(obj);
};

export const updateProduct = async ({ _id, product }) => {
  const obj = {
    method: "patch",
    data: { _id, product }, // ✅ Correct: Send prdObj directly
  };
  return apiProcessor(obj);
};
