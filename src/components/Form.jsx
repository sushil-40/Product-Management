import React, { useState } from "react";

export const Form = ({ addProduct }) => {
  const [inputFormData, setInputFormData] = useState("");

  const handleOnChange = (e) => {
    setInputFormData(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    addProduct(inputFormData);
  };

  return (
    <form
      className="input-product-form"
      method="post"
      onSubmit={handleOnSubmit}
    >
      <div className="input-group mt-5 mb-3 container">
        <input
          onChange={handleOnChange}
          type="text"
          className="form-control me-2 rounded"
          placeholder="Enter Product Name"
          aria-label="Product name"
          aria-describedby="button-addon2"
          name="product"
          id="product"
        />
        <button
          className="btn btn-info rounded"
          type="submit"
          id="button-addon2"
        >
          Add Product
        </button>
      </div>
    </form>
  );
};
