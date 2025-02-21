/* eslint-disable react/prop-types */
import React, { useRef, useState } from "react";

export const ProductTable = ({ products, updateProductItem }) => {
  const [displayUpdateForm, setDisplayUpdateForm] = useState(false);

  const [updatedItemDetail, setUpdatedItemDetail] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  // Create a ref for the input field
  const inputRef = useRef(null);
  const updateFormRef = useRef(null);
  const handleOnShowUpdate = (prodObj) => {
    setDisplayUpdateForm(true);
    setSelectedProduct(prodObj);

    setUpdatedItemDetail(prodObj.product);

    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current?.focus();
        inputRef.current.select();
      }
    }, 100);

    setTimeout(() => {
      updateFormRef.current?.scrollIntoView(
        {
          behavior: "smooth",
          block: "center",
        },
        200
      );
    });
  };

  console.log(displayUpdateForm);
  const handleOnUpdateItemChange = (e) => {
    setUpdatedItemDetail(e.target.value);
  };
  const handleOnUpdateItem = () => {
    // implement logic to handle update of product
    if (!selectedProduct) return;
    updateProductItem(selectedProduct._id, { product: updatedItemDetail });

    setDisplayUpdateForm(false);
    setSelectedProduct(null);
  };
  const handleOnDelete = () => {};
  return (
    <div>
      <h2 className="text-center" style={{ color: "GrayText" }}>
        Product Table
      </h2>
      <hr />
      {displayUpdateForm && (
        <div
          ref={updateFormRef}
          className={
            displayUpdateForm ? "update-product text-center" : "display-none"
          }
        >
          <h3 style={{ color: "blue" }}>Edit product detail!</h3>

          <div className="item-update">
            <input
              ref={inputRef}
              onChange={handleOnUpdateItemChange}
              type="text"
              name="update-product"
              placeholder={selectedProduct.product}
            />{" "}
            <button
              onClick={handleOnUpdateItem}
              className="btn btn-primary rounded"
            >
              Update Item
            </button>
          </div>
        </div>
      )}

      {products.length < 1 ? (
        <p className="text-center" style={{ color: "red" }}>
          No items available to display. Please add some items!
        </p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">_id</th>
              <th scope="col">Item</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {products.map((prd, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{prd._id}</th>
                  <td>{prd.product}</td>
                  <td>
                    <button
                      onClick={() => handleOnShowUpdate(prd)}
                      className="btn btn-info rounded"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      <div className="row my-5 d-grid">
        <button
          onClick={handleOnDelete}
          type="button"
          className="btn btn-danger"
        >
          Delete Product(s)
        </button>
      </div>
    </div>
  );
};
