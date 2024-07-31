import React from "react";


function blog(){
    const blog =[
        {image: require('../assets/blog12_1024x1024.webp' ),
    Content: "Nunc aliquet, justo non commodo congue, velit sem pulvinar enim, ac bibendum mi mi eget libero. Maecenas ac viverra enim, et laoreet lacus. Etiam nisi diam, sagittis ac quam at, posuere hendrerit eros. Praesent aliquam tincidunt tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum odio...",
    Hedding:'Plants Help Make Your House  More Beautiful'
    },
    {image: require('../assets/blog11_1024x1024.webp'  ),
    Content: "Nunc aliquet, justo non commodo congue, velit sem pulvinar enim, ac bibendum mi mi eget libero. Maecenas ac viverra enim, et laoreet lacus. Etiam nisi diam, sagittis ac quam at, posuere hendrerit eros. Praesent aliquam tincidunt tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum odio...",
    Hedding:'Plants Help Make Your Office More Beautiful'
    },
    
        
    ]


    return(
        <>
<div className="container mt-5">
    <h1 style={{color:"green",textAlign:"center"}}>Our Blog</h1>
   {blog.map((item,index)=>{
    return(
       
       
        <div className="row mt-5">
             {
            index % 2 == 0?
            <>
             <div className="col-md-6">
            <h3 className="head">{item.Hedding}</h3>
            <p className="para">{item.Content}</p>
            <a href="" className="readmore" style={{textDecoration:"none"}}>Read More
            
            </a>
        </div>
        <div className="col-md-6">
        <img src={item.image}alt='' className="img-fluid "/>
        </div></>:<>
        <div className="col-md-6 ">
        <img src={item.image}alt='' className="img-fluid "/>
        </div>
        <div className="col-md-6">
            <h3 className="head">{item.Hedding}</h3>
            <p className="para">{item.Content}</p>
            <a href="" className="readmore" style={{textDecoration:"none"}}>Read More
            
            </a>
        </div>
        </>
        }
       
    </div>
 
    )
   })}
    {/* <div className="row mt-5 py-5">
        
    <div className="col-md-6">
        <img src={require()}alt='' className="img-fluid "/>
        </div>

        <div className="col-md-6">
            <h3 className="head" style={{paddingLeft:50}}>Plants Help Make Your House More Beautiful</h3>
            <p className="para" style={{paddingLeft:50}}>Nunc aliquet, justo non commodo congue, velit sem pulvinar enim, ac bibendum mi mi eget libero. Maecenas ac viverra enim, et laoreet lacus. Etiam nisi diam, sagittis ac quam at, posuere hendrerit eros. Praesent aliquam tincidunt tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum odio...</p>
            <a href="" className="readmore" style={{textDecoration:"none",marginLeft:50}}>Read More
        
            </a>
        </div>
        
    </div> */}
</div>
        </>
    )
}
export default blog;