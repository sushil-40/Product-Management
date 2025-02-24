/* eslint-disable react/prop-types */
import React, { useRef, useState } from "react";

export const ProductTable = ({ products, updateProductItem }) => {
  const [displayUpdateForm, setDisplayUpdateForm] = useState(false);

  const [updatedItemDetail, setUpdatedItemDetail] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [toDelete, setToDelete] = useState([]);

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

  const handleOnUpdateItemChange = (e) => {
    setUpdatedItemDetail(e.target.value);
  };
  const handleOnUpdateItem = () => {
    // implement logic to handle update of product
    if (!selectedProduct) return;
    updateProductItem(selectedProduct._id, updatedItemDetail);

    setDisplayUpdateForm(false);
    setSelectedProduct(null);
  };
  const handleOnDelete = () => {};

  const handleOnSelect = (e) => {
    const { checked, value } = e.target;

    if (value === "allProduct") {
      if (checked) {
        //Select all
        const _ids = products.map((prd) => prd._id);
        setToDelete(_ids);
      } else {
        //Deselect all
        setToDelete([]);
      }
    } else {
      if (checked) {
        //Add Selected item

        setToDelete((prev) => [...prev, value]);
      } else {
        //Remove deselected item
        setToDelete((prev) => prev.filter((_id) => _id !== value));
      }
    }
  };

  console.log(toDelete);
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
              <th>
                {" "}
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="allProduct"
                  id="all-product"
                  onChange={handleOnSelect}
                  checked={
                    toDelete.length === products.length && products.length > 0
                  }
                />{" "}
                <label htmlFor="all-product"> Select All</label>
              </th>
              <th scope="col">Item</th>

              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {products.map((prd, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{prd._id}</th>
                  <td>
                    {" "}
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={prd?._id}
                      onChange={handleOnSelect}
                      checked={toDelete.includes(prd._id)}
                    />{" "}
                  </td>
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
