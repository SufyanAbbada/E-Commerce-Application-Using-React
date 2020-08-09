import React from "react";
import ProductShow from "./EachProd";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
//import "../../../src/App.css";
import productService from "./../../services/ProductsService";

const useStyles = makeStyles((theme) => ({
  AddButton: {
    position: "absolute",
    //top: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const Products = (props) => {
  const classes = useStyles();
  const [prods, setProds] = React.useState([
    // { name: "abc", price: 100 },
    // { name: "xyz", price: 150 },
  ]);
  //Here we have created a function that is used to call the Api containing that axios call
  const getData = () => {
    //Axios has send a 'get' call on the url
    //and as it gets the result, it goes to 'then' which is itself a function that will modify
    //the values of the prods in the State and if not, it will generate error.
    productService
      .getProducts()
      .then((data) => {
        setProds(data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(getData, []);
  //This React.useEffect will call this function when the variables given to it are changed.
  //And if we give it an empty array, it will only re-render it when Mount is called (means only once)
  //getData();
  //We have called the products to be shown
  const adder = () => {
    //console.log(props.location.pathname);
    props.history.push("/products/new");
  };
  return (
    <div>
      <Grid container>
        <Grid item xs={8}>
          <h1>Products Showing From Products Section</h1>
        </Grid>
        <Grid item xs={4}>
          <Fab
            color="primary"
            aria-label="add"
            className={classes.AddButton}
            onClick={adder}
            variant="extended"
          >
            <AddIcon to="/new" />
            Add Product
          </Fab>
        </Grid>
      </Grid>
      {/*React usually takes a unique key for each element so that it can compare it with Virtual and real DOM*/}
      {/*So, we have to give any key value so that it can make it unique*/}
      {/*Therefore, we took the index of the array as the unique value and passed it to the map.*/}

      {/*But we shall also create a check that if there no products, then it should tell that */}
      {prods.length === 0 ? (
        <p>There are Currently no Products in our Database</p>
      ) : (
        <Grid container spacing={3}>
          {/*We will Use Grid to show our Items and this is the container of them*/}
          {prods.map((prod, index) => (
            <ProductShow product={prod} key={index} onDelete={getData} />
            //This means that as this function is called, our get data will execute again
          ))}
        </Grid>
      )}
    </div>
  );
};
export default Products;
