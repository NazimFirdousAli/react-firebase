import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../pages/home/home";
import Food from "../pages/categories/food";
import HealthCare from "../pages/categories/healthCare";
import Others from "../pages/categories/others";
import Shoes from "../pages/categories/shoes";
import Dress from "../pages/categories/dress";
import Belts from "../pages/categories/belts";
import Errorpage from "../pages/errorPage/errorpage";
import AddItems from "../pages/addItems/addItems";

export default function AppRouting() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/category/food">
            <Food />
          </Route>
          <Route path="/category/shoes">
            <Shoes />
          </Route>
          <Route path="/category/clothes">
            <Dress />
          </Route>
          <Route path="/category/others">
            <Others />
          </Route>
          <Route path="/category/belts">
            <Belts />
          </Route>
          <Route path="/category/health-care">
            <HealthCare />
          </Route>
          <Route path="/add-items">
            <AddItems />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <Errorpage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
