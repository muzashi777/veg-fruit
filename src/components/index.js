import React from "react";
import Product from "./product";
import About from "./about";
import ReactFullpage from "@fullpage/react-fullpage";

const Index = () => (
  <ReactFullpage
    licenseKey={"YOUR_KEY_HERE"}
    scrollingSpeed={1000}
    // verticalCentered={false}
    cards={true}
    // paddingTop={"1rem"}
    anchors={["Home", "Product", "About"]}
    navigationTooltips={["firstSlide", "secondSlide"]}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section one text-center">
            <h1 className="orange-text">
              Welcome to Vegtables and Fruits Shop
            </h1>
            <br></br>
            <br></br>
            <button
              type="button"
              onClick={() => fullpageApi.moveSectionDown()}
              class="btn btn-outline-warning animated bounce infinite"
            >
              More Info
            </button>
          </div>
          <div className="section">
            <Product />
          </div>
          <div className="section">
            <About />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Index;
