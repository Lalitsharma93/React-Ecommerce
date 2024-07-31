import React from "react";
import Navbar from "../components/Navbar";
import { useLocation, useParams } from "react-router-dom";


function Sapretpage(props) {
  let { state } = useLocation();
  console.log("state", state.some); 

  return (
    <>
      <Navbar />
      <div class="container bg-light">
        <div className="row  mt-5">
          <div className="col-md-5 mt-5">
            <center>
              <img
                src={state.images}
                alt=""
                className=" "
              />
              <div style={{ display: "flex" }}>
                <img
                  src={state.some.images[0]}
                  alt=""
                  className=""
                  height={100}
                />
                <img
                  src={state.some.images[0]}
                  alt=""
                  className=""
                  height={100}
                />
              </div>
            </center>
          </div>

          <div className="col-md-7">
            <h2>{state.some.title
}</h2>
            <p class="product-description">{state.some.description}
              Product description goes here. Provide details about the features
              and benefits of the product.
            </p>
            <div className="brand">
              <span>Brand :&nbsp;</span>
              <p> {state.some.brand}</p>
            </div>

            <div className="rated">
              <span>Rated : </span>
              <span className="star" style={{ color: "gold" }}>
                &#9733; &#9733; &#9733; &#9733;
                
              </span>
              {state.some.rating}
            </div>
            <div>
              <p class="product-price"> ${state.some.price}</p>
              <span>Stock Available {state.some.stock}</span>
            </div>
            <br></br>

            <br></br>
            <button type="submit">Buy Now</button>
          </div>

          <hr></hr>
        </div>
      </div>












    </>
  );
}
export default Sapretpage;
