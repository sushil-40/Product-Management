import React, { useState } from "react";
import apple from "../assets/apple.jpg";
import banana from "../assets/banana.jpg";
import orange from "../assets/orange.jpg";
// 6. E-Commerce Cart System
// ✅ Problem:

// Create a simple shopping cart where users can:
// Add products to the cart.
// product1  product2 product3 .... [btn-addProduct] ===> Cart
//each product has price
// Remove products from the cart.
// list of products   [remove button]
// Show the total price.
// total price of the products
// 💡 Bonus: Save cart data in local storage.

// export const ChallengeECommerceCart = () => {
//   const products = [
//     {
//       product: "apple",
//       price: 100,
//     },
//     {
//       product: "banana",
//       price: 200,
//     },
//     {
//       product: "mango",
//       price: 300,
//     },
//   ];
//   const [purchaseItem, setPurchaseItem] = useState([]);

//   const addToPurchase = (item) => {
//     setPurchaseItem((prevItems) => [...prevItems, item]);
//   };

//   return (
//     <div className="wrapper">
//       <h2>Cart System</h2>
//       <div className="products">
//         <h3>Products</h3>
//         <ul>
//           {products.map((prd, i) => {
//             return (
//               <li key={i}>
//                 {prd.product} <span>{prd.price}</span>{" "}
//                 <span>
//                   <button type="button" onClick={() => addToPurchase(prd)}>
//                     Add to Cart
//                   </button>
//                 </span>
//               </li>
//             );
//           })}
//         </ul>
//       </div>

//       <div className="Cart">
//         <h3>Cart</h3>
//         <ul>
//           {purchaseItem.map((item, i) => (
//             <li key={i}>{item.product}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

export const ChallengeECommerceCart = () => {
  const products = [
    { product: "apple", price: 100, img: apple, alt: "apple-product" },
    { product: "banana", price: 200, img: banana, alt: "banana-product" },
    { product: "orange", price: 300, img: orange, alt: "orange-product" },
  ];

  const [purchaseItem, setPurchaseItem] = useState([]);

  const handleOnAddToProduct = (item) => {
    setPurchaseItem((prevItems) => [...prevItems, item]);
  };
  const getTotalPrice = () => {
    const totalPrice = purchaseItem.reduce((acc, item) => acc + item.price, 0);
    return totalPrice;
  };
  const handleOnRemove = (rmp) => {
    const filteredPurchaseItems = purchaseItem.filter((item) => item !== rmp);
    setPurchaseItem(filteredPurchaseItems);
  };
  return (
    <div className="commercial-cart-wrapper">
      <div className="product-display">
        <h3>Products</h3>
        <hr />
        <div className="product-layout">
          {products.map((prd, i) => {
            return (
              <div className="product-item" key={i}>
                <div className="img">
                  <img
                    src={prd.img}
                    alt={prd.alt}
                    height={"200px"}
                    width={"300px"}
                  />
                </div>
                <div className="price mt-2">${prd.price}</div>
                <div className="add-btn mt-2">
                  <button
                    onClick={() => handleOnAddToProduct(prd)}
                    className="btn btn-success rounded p-2"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="cart-container ms-5 mt-5 mb-5">
        <table width={"50%"}>
          <thead>
            <tr>
              <th colSpan={3}>
                <h3>Carts</h3> <hr />
              </th>
            </tr>
            <tr>
              <th>#</th>
              <th>Item(s)</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {purchaseItem.map((prch, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{prch.product}</td>
                  <td>{prch.price}</td>
                  <td>
                    <button
                      onClick={() => handleOnRemove(prch)}
                      type="button"
                      className="btn btn-warning"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}

            <tr>
              <td colSpan={3}>
                <hr />
                Total Price:${getTotalPrice()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
