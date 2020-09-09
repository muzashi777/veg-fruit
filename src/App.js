import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import Index from "./components/index";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Index} />
    </Router>
  );
}

export default App;
