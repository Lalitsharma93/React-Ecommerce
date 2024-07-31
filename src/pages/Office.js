import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
//import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
function Office() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products").then((result) => {
      result.json().then((resp) => {
        setItems(resp.products);
      });
    });
  }, []);
  console.log(items);
  return (
    <>
       <Navbar/>
      <div className="container mt-5">
        <center>
          <h1>SHOPPING COUNTER</h1>
        </center>
        <div className="row mt-5 ">
          <div className="row">
            {items.map((item) => {
              return (
                <div className="col-md-3">
                  <div className="card " style={{ width: 300, border: "none" }}>
                    <img
                      src={item.images[0]}
                      alt=""
                      className=" "
                      style={{ height: 300, width: 300 }}
                    />
                    <div className="card-body">
                      <h6 className="card-title">{item.brand}</h6>
                      <p className="card-text">{item.description}</p>
                      <h3>${item.price}</h3>
                      <a class="btn btn-primary" style={{ fontWeight: 500 }}>
                        <Link
                          to={"/Sapretpage"}
                          state={{ some:item }}
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          Buy Now
                        </Link>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* <div className="container mt-5">
   
    <div className="row mt-5 " >
        
        <div className="col-md-3">
            
<div className="card" style={{width:300,border:'none'}}>
<img src={require('../assets/nurserylive-onion-improved-gavran-vegetable-seeds-918491_295x295.avif')} alt="" className="img-fluid "/>
  <div className="card-body">
    <h6 className="card-title">Onion Improved Gavran - Vegetable Seeds</h6>
    <p className="card-text">Earliest Delivery:&nbsp;Today</p>
    <h3>$79</h3>
    <a href="/" class="btn btn-primary" style={{fontWeight:500}}>Add To Card</a>
  </div>
</div>


</div>
<div className="col-md-3">
            
<div className="card" style={{width:300,border:'none'}}>
<img src={require('../assets/nurserylive-cucumber-yellow-round-vegetable-seeds-916468_295x295.avif')} alt="" className="img-fluid "/>
  <div className="card-body">
    <h6 className="card-title">Cucumber Yellow Round - Vegetable Seeds</h6>
    <p className="card-text">Earliest Delivery:&nbsp;Today</p>
    <h3>$67</h3>
    <a href="/" class="btn btn-primary" style={{fontWeight:500}}>Add To Card</a>
  </div>
</div>


</div>
<div className="col-md-3">
            
<div className="card" style={{width:300,border:'none'}}>
<img src={require('../assets/nurserylive-seeds-cabbage-f1-hybrid-vegetable-seeds-16969061040268_295x295.avif')} alt="" className="img-fluid "/>
  <div className="card-body">
    <h6 className="card-title">Cabbage F1 Hybrid - Vegetable Seeds</h6>
    <p className="card-text">Earliest Delivery:&nbsp;Today</p>
    <h3>$89</h3>
    <a href="/" class="btn btn-primary" style={{fontWeight:500}}>Add To Card</a>
  </div>
</div>


</div>
<div className="col-md-3">
            
<div className="card" style={{width:300,border:'none'}}>
<img src={require('../assets/nurserylive-sugar-pea-snow-pea-vegetable-seeds-146209_295x295.avif')} alt="" className="img-fluid "/>
  <div className="card-body">
    <h6 className="card-title">Sugar Pea, Snow Pea - Vegetable Seeds </h6>
    <p className="card-text">Earliest Delivery:&nbsp;Today</p>
    <h3>$59</h3>
    <a href="/" class="btn btn-primary" style={{fontWeight:500}}>Add To Card</a>
  </div>
</div>


</div>


</div>
</div> */}
    </>
  );
}
export default Office;
