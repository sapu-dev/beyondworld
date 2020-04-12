import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "../../../containers/home";
import AboutUs from "../../../containers/aboutUs";
import Orders from "../../../containers/oders";
import Products from "../../../containers/products";
import {Layout} from "antd";
import "../../../scss/header.scss";
class Navbar extends Component {
  state = {
    current: "mail",
    visible: false
  };
  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <Layout>
        <Router>
          <div className="header">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/orders">Orders</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
            </ul>

            <Switch>
              <Route path="/about">
                <AboutUs />
              </Route>
              <Route path="/products">
                <Products />
              </Route>
              <Route path="/orders">
                <Orders />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </Layout>
    );
  }
}

export default Navbar;
