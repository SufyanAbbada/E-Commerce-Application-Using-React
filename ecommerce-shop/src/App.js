import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import TopMenu from "./components/TopMenu";
import Productshow from "./components/Products/products";
import Products from "./components/Products/products";
import Contact from "./components/contact";
import Landing from "./components/LandingPage";
import "./App.css";
import PageNotFound from "./components/NotFound";
import Logging from "./components/Login";

//We have to wrap our whole component in the Router Component.

function App() {
  return (
    <Router>
      <div>
        <h1>E-commerce Website</h1>
        <TopMenu />
        <Switch>
          <Route path="/product" component={Products} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Logging} />
          <Route path="/" exact component={Landing} />
          {/*This line means that on coming to '/' means coming to main one, we shall go where? 
          So as we hit the URL with localhost:3000/ then due to this slash, we will go to Route of Landing Page
          And in the similar way, we shall be able to Route at any direction we want.*/}
          <Route path="/notfound" component={PageNotFound} />
          <Redirect to="/notfound" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
