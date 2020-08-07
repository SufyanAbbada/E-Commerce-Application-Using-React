import React from "react";

const ProductShow = ({ product }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductShow;
