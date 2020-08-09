import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar, Typography, Button } from "@material-ui/core";
import userService from "./../services/UserService";

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
          <Link to="/products" className={classes.link}>
            Products
          </Link>
        </Typography>
        {!userService.isLoggedIn ? (
          <>
            <Typography variant="h6">
              <Link to="/login" className={classes.link}>
                Login
              </Link>
            </Typography>
            <Typography variant="h6">
              <Link to="/register" className={classes.link}>
                Sign Up
              </Link>
            </Typography>
          </>
        ) : (
          <Typography variant="h6">
            <Button
              variant="contained"
              color="Primary"
              onClick={(e) => {
                userService.logout();
                window.location.reload();
              }}
            >
              Log Out
            </Button>
          </Typography>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default TopMenu;
