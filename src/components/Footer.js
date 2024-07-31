import React from "react";

import { BsFacebook,BsInstagram,BsTwitter,BsLinkedin,BsYoutube } from "react-icons/bs";

function footer(){
    return(
<section className="footer">
        <div className="container">
<div className="row">
    <div className="col-md-4 mt-5">
        <h5>About Store</h5>
        <div className="content">
        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type
        </div>
    </div>
    <div className="col-md-4">
        <img src = {require("../assets/footer-logo.png")} alt="" className="img-fluid logo "/>
        <div style={{textAlign:"center",marginTop:40}}>
        <img src = {require("../assets/google.png")} alt="" className="img-fluid"/>
        <img src = {require("../assets/maestro.png")} alt="" className="img-fluid mx-3"/>
        <img src = {require("../assets/mastercard.png")} alt="" className="img-fluid"/>
        <img src = {require("../assets/paypal.png")} alt="" className="img-fluid mx-3"/>
        <img src = {require("../assets/visa.png")} alt="" className="img-fluid"/>
        </div>
      
    </div>
    <div className="col-md-4 mt-5">
    <h5>Store Information</h5>
    <ul style={{listStyle:"none",color:"white",textAlign:"center",marginTop:30,fontSize:18,fontWeight:400}}>
        <li> Demo Store <br></br>
United States</li>
        <li className="mt-3"> 0123456789</li>
        <li className="mt-3">  demo@gmail.com</li>
    </ul>
      
    </div>
    
</div>
<hr style={{color:"white",marginTop:30,}}></hr>
<ul style={{listStyle:"none" ,textAlign:"center",fontSize:20}} className="icon">
   <a href="" style={{color:"white",margin:20}}><BsFacebook/></a>
   <a href="" style={{color:"white"}}><BsInstagram/></a>
   <a href="" style={{color:"white",margin:20}}><BsTwitter/></a>
   <a href="" style={{color:"white"}}><BsLinkedin/></a>
   <a href="" style={{color:"white",margin:20}}><BsYoutube/></a>
</ul>

<p style={{color:"white",textAlign:"center"}}>Powered By OpenCart Your Store © 2023</p><br></br>
        </div>
        </section>
    );

}

export default footer;