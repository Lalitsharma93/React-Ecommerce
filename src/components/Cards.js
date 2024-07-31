import React, { useEffect, useState } from "react";

function Card(){
  const data = [
    { name:"demo",price:"400",image:require('../assets/money-plant-mason-jar-terrarium_1.webp')},
    { name:"demo2",price:"500",image:require('../assets/money-plant-mason-jar-terrarium_2.webp')},
    { name:"demo3",price:"600",image:require('../assets/jade-plant-winter-love-pot_1.webp')},
    { name:"demo4",price:"00",image:require('../assets/happy-birthday-jade-plant-terrarium_1.webp')},
     , { name:"demo",price:"400",image:require('../assets/money-plant-mason-jar-terrarium_1.webp')},
     { name:"demo2",price:"500",image:require('../assets/nurserylive-onion-improved-gavran-vegetable-seeds-918491_295x295.avif')},
     { name:"demo3",price:"600",image:require('../assets/nurserylive-onion-improved-gavran-vegetable-seeds-918491_295x295.avif')},
     { name:"demo4",price:"00",image:require('../assets/nurserylive-onion-improved-gavran-vegetable-seeds-918491_295x295.avif')},
      ,
      { name:"demo",price:"400",image:require('../assets/money-plant-mason-jar-terrarium_1.webp')},
      { name:"demo2",price:"500",image:require('../assets/nurserylive-onion-improved-gavran-vegetable-seeds-918491_295x295.avif')},
      { name:"demo3",price:"600",image:require('../assets/nurserylive-onion-improved-gavran-vegetable-seeds-918491_295x295.avif')},
      { name:"demo4",price:"00",image:require('../assets/nurserylive-onion-improved-gavran-vegetable-seeds-918491_295x295.avif')},
      
 ]

//  const[item,setData] = useState([])
 
// useEffect(()=>{
//   fetch("https://dummyjson.com/products").then((result)=>{
//     result.json().then((resp)=>{
//         setData(resp.products)
//     })
// })
 
// },[])
// console.log(item)
    return(
        <>
<div className="container mt-5">
   <center> <h1>Plants & Seeds</h1></center>
    <div className="row mt-5 " >
        
        <div className="row">
            
{data.map((item)=>{
return(
  <div className="col-md-3">
  <div className="card " style={{width:300,border:'none'}}>
<img src={item.image} alt="" className="img-fluid "/>
  <div className="card-body">
    <h6 className="card-title">{item.name}</h6>
    <p className="card-text">Earliest Delivery:&nbsp;Today</p>
    <h3>{item.price}</h3>
    <a href="/" class="btn btn-primary" style={{fontWeight:500}}>Add To Card</a>
  </div>
</div>
</div>
)
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
export default Card;