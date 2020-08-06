import React from "react";
import { Link } from "react-router-dom";

const TopMenu = () => {
  return (
    <div>
      {/*Now in order to get the links, we dont use 'a' but use Links of router-dom */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product">Products</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default TopMenu;
