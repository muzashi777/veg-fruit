import React, { useState } from "react";

function Product() {
  const [greeting, setGreeting] = useState(1);
  function handlePick(e) {
    setGreeting(e);
  }
  return (
    <div>
      <div className="select-pic">
        <div className="d-flex justify-content-around">
          <div
            onClick={() => handlePick(1)}
            className={greeting === 1 ? "bg-select" : null}
          >
            <a
              href="#Product"
              className={greeting === 1 ? "text-danger" : null}
            >
              1
            </a>
          </div>
          <div
            onClick={() => handlePick(2)}
            className={greeting === 2 ? "bg-select" : null}
          >
            <a
              href="#Product/1"
              className={greeting === 2 ? "text-danger" : null}
            >
              2
            </a>
          </div>
          <div
            onClick={() => handlePick(3)}
            className={greeting === 3 ? "bg-select" : null}
          >
            <a
              href="#Product/2"
              className={greeting === 3 ? "text-danger" : null}
            >
              3
            </a>
          </div>
          <div
            onClick={() => handlePick(4)}
            className={greeting === 4 ? "bg-select" : null}
          >
            <a
              href="#Product/3"
              className={greeting === 4 ? "text-danger" : null}
            >
              4
            </a>
          </div>
        </div>
        <h3>Our Products</h3>
      </div>
      <div className="slide">
        <img
          src="https://img1.mashed.com/img/gallery/7-vegetables-you-should-be-eating-and-7-you-shouldnt/intro-1543595549.jpg"
          alt="Girl in a jacket"
        />
      </div>
      <div class="slide">
        <img src="https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg" />
      </div>
      <div class="slide">
        <img src="https://187436-553851-1-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/11/fruits-vocabulary-e1574132203951.jpg" />
      </div>
      <div class="slide">
        <img src="https://www.diagnosisdiet.com/assets/images/c/fruit-og-d176ef00.jpg" />
      </div>
    </div>
  );
}

export default Product;
