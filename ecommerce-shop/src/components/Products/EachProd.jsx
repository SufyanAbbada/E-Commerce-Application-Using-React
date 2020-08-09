import React from "react";
import { Grid, Button } from "@material-ui/core";
import productService from "./../../services/ProductsService";
import { withRouter } from "react-router";

const ProductShow = (props) => {
  const { product, onDelete } = props;
  return (
    <Grid item xs={3}>
      {/*This is the Grid Item and it will be shown in the Main Grid */}
      <h3>
        {product.name}{" "}
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            console.log("Navigate to Edit");
            props.history.push("/products/update/" + product._id);
          }}
        >
          Edit!
        </Button>{" "}
        <Button
          variant="contained"
          color="secondary"
          onClick={(e) => {
            productService
              .deleteProduct(product._id)
              .then((data) => {
                console.log(data);
                onDelete();
                //This will call the function which is coming from parent and it will execute it as the
                //Data entry is deleted and it is just refreshing the Products again.
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          Delete
        </Button>{" "}
      </h3>
      <p>{product.price}</p>
      <hr />
    </Grid>
  );
};

export default withRouter(ProductShow);
