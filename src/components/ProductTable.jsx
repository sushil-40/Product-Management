/* eslint-disable react/prop-types */
import React from "react";

export const ProductTable = ({ products }) => {
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
              <th scope="col">#</th>
              <th scope="col">Item</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {products.map((prd, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{prd}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};
