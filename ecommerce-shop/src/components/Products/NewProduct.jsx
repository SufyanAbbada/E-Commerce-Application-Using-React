import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import productService from "./../../services/ProductsService";

const Newproduct = (props) => {
  const [name, setName] = React.useState("");
  //The initial value of the Text Item will be Nothing.
  const [price, setPrice] = React.useState(0);
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangePrice = (e) => {
    setPrice(e.target.value);
  };
  //Each Function has an event 'e' that will be fired when any event occurs and in this case event is key entering.
  //This e.target.value means that this 'event' will target that area from which it is called
  //And it will take the 'value' attribute and set the State with the value in the 'value' variable of that target area(TextField in our case.)
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <h1>Add a New Product</h1>
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <TextField
          label="Enter New Product Name"
          fullWidth
          value={name}
          onChange={onChangeName}
        />
        <TextField
          label="Its Price"
          fullWidth
          value={price}
          onChange={onChangePrice}
        />
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={5}></Grid>
      <Grid item xs={2}>
        {/*In this button, we simply will call the Axios Post method to call the Database to enter the values from the State to Database. */}
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            console.log("API Call Sent");
            productService
              .addProduct({
                name,
                price,
              })
              .then((data) => {
                //And as our Data is saved, we shall return back
                props.history.push("/products");
              })
              .catch((err) => {
                console.log(err);
              });
          }}
          //We have sent an API call to the database and sent data which was in State.
        >
          Add Product
        </Button>
      </Grid>
      <Grid item xs={5}></Grid>
    </Grid>
  );
};

export default Newproduct;
