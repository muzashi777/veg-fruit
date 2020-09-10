import React from "react";
import "./index.css";
import Index from "./components/index";
import Nav from "./components/nav";

function App() {
  return (
    <div className="d-flex justify-content-center">
      <Nav />
      <Index />
    </div>
  );
}

export default App;
