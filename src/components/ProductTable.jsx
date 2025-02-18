/* eslint-disable react/prop-types */
import React from "react";

export const ProductTable = ({ products }) => {
  const handleOnDelete = () => {};
  return (
    <div>
      <h2 className="text-center" style={{ color: "GrayText" }}>
        Product Table
      </h2>
      <hr />
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
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {products.map((prd, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{prd._id}</th>
                  <td>{prd.product}</td>
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
