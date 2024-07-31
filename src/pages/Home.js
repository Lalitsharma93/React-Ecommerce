import React from "react";
import Navbar from "../components/Navbar";
import Crousel from "../components/Crousel.";
import Cards from "../components/Cards";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import Login from "../components/Login";
function Home(){
   
    return(
    <div>
        <Navbar/>
        <Crousel/> 
        <Cards/>
    
        <Blog/>
        <Footer/>
        
    </div>
    );
}
export default Home;