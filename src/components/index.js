import React from "react";
import Home from "./home";
import Product from "./product";
import About from "./about";

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Home />
        <Product />
        <About />
      </div>
    );
  }
}
