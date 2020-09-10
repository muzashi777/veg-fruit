import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import Index from "./components/index";
import Nav from "./components/nav";

// function App() {
//   return (
//     <Router>
//       <Route path="/" exact component={Index} />
//     </Router>
//   );
// }

function App() {
  return (
    <div className="d-flex justify-content-center">
      <Nav />
      <Index />
    </div>
  );
}

export default App;
