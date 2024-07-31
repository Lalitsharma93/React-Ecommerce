
import React from 'react';
import { Link } from 'react-router-dom';
function navbar() {
  return (
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light ">
  <div class="container ">
    <a class="navbar-brand" href="#"><img src={require('../assets/Plan-A-Seed-Garden-Design-logo-brand-identity-by-One-Bright-Spark-Exeter.jpg')} className="img-fluid logoimg"/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-5">
        <li class="nav-item">
          <a class="nav-link active"  href="#" style={{fontWeight:600}}><Link to={'/'} style={{textDecoration:'none',color:'black'}}>Home </Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="" style={{color:'black',fontWeight:600}}><Link to={'/Aboutus'} style={{textDecoration:'none',color:'black'}}>About </Link></a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'black',fontWeight:600}}> 
            Plants
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href=""><Link to={'/Office'} style={{textDecoration:'none',color:'black'}}>Shopping counter </Link></a></li>
            {/* <li><a class="dropdown-item" href="#">House Plants</a></li>
            
            <li><a class="dropdown-item" href="#">Flower Plants</a></li> */}
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'black', fontWeight:600}}>
            Seeds 
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Vegitable Seeds</a></li>
            <li><a class="dropdown-item" href="#">Row Seeds</a></li>
            <li><a class="dropdown-item" href="#">Flower Seeds</a></li>
            
           
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#" tabindex="-1" aria-disabled="true" style={{color:'black', fontWeight:600}}><Link to={'/Contactus'} style={{textDecoration:'none',color:'black'}} >Contact</Link></a>
        </li>
      </ul>
      <button style={{marginLeft:70,backgroundColor:'yellow' , padding:5,width:110 ,fontSize:20,fontWeight:600,borderRadius:10, border:'none'}}><Link to={'/Loginpage'}  style={{textDecoration:'none',color:'black'}} >Login</Link></button>
    <button style={{marginLeft:50,backgroundColor:'yellow' , padding:5,width:120,fontSize:20,fontWeight:600,borderRadius:10, border:'none'}}><Link to={'/Signuppage'}  style={{textDecoration:'none',color:'black'}} >Sign up</Link></button>
    </div>
    
  </div>
</nav>
    
  );
}

export default navbar;