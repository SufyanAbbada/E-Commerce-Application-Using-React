import React from "react";
import ProductShow from "./EachProd";

const Products = () => {
  const [prods, setProds] = React.useState([]);
  return (
    <div>
      <h1>Products Showing From Products Section</h1>
      {/*React usually takes a unique key for each element so that it can compare it with Virtual and real DOM*/}
      {/*So, we have to give any key value so that it can make it unique*/}
      {/*Therefore, we took the index of the array as the unique value and passed it to the map.*/}

      {/*But we shall also create a check that if there no products, then it should tell that */}
      {prods.length === 0 ? (
        <p>There are Currently no Products in our Database</p>
      ) : (
        <div>
          {prods.map((prod, index) => (
            <ProductShow product={prod} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Products;
