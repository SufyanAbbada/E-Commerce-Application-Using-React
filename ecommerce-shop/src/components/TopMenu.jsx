import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  //This makeStyles let us create CSS in our own way.
  link: {
    color: "white",
    paddingRight: "1rem",
    textDecoration: "none",
  },
}));
//But in order to use it, we have to create its class down there
const TopMenu = () => {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6">
          <Link to="/" className={classes.link}>
            Home
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/contact" className={classes.link}>
            Contact Us
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/product" className={classes.link}>
            Products
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/login" className={classes.link}>
            Login
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopMenu;
