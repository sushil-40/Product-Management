import React from "react";

export const Navbar = () => {
  return (
    <div className="navbar  mt-2 d-flex justify-content-space-between">
      <div className="logo ms-5">
        <p className="title">Product Management</p>
      </div>
      <div className="search-product me-5">
        <input
          type="text"
          name="inputProduct"
          placeholder="Enter Product Name"
          className="me-2 rounded"
        />
        <button
          type="submit"
          name="btn-submit"
          className="rounded"
          style={{ color: "white", background: "black" }}
        >
          Search
        </button>
      </div>
    </div>
  );
};
