import React from "react";

function Nav() {
  return (
    <div className="fixed-top ">
      <div className="position-absolute d-flex justify-content-around  logo">
        <img src="/veg-logo.png" width="80px" />
        <ul className="mt-2 p-1 ">
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#Product">Product</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
        </ul>
      </div>

      <div className="nav-bar container"></div>
    </div>
  );
}

export default Nav;
