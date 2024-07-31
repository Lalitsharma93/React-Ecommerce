import React from "react";


function Aboutus(){
    return(
      <>
      <div className="container-fluid">
        <div className="row">
            <div className="col-md-">
            <img src={require('../assets/aboutusbanner.jpg')}alt='' className="img-fluid" />
            </div>
        </div>
      </div>
      <div className="container mt-5" >
      <center><img src={require('../assets/t2.webp')}alt='' className="img-fluid" style={{height:100}}/></center>
      <div className="about">    
        <h6 >HOUSEPLANTS</h6>
      <h1>Fresh Your Space</h1>
      <p>Excepteur sint occaecat cupidatat non proident. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis.<br></br> Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue eget dolor.</p>
      </div>

      <div className="row mt-5 py-5">
        <div className="col-md-6">
            <div className="about2">
                <h6>GREEN INDOORS.</h6>
                <h2>Sharing plant<br></br> happiness</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse venenatis<br></br> purus faucibus enim rhoncus suspendisse. Netus et elementum lacus, sem<br></br> sapien faucibus.</p>
            </div>
        </div>
        <div className="col-md-6">
        <img src={require('../assets/z9_1920x.webp')}alt='' className="img-fluid" />   
        </div>
      </div>

      </div>

      <div className="container-fluid">
        <div className="backgr">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="cont">
                        <h5>EXPERIENCE</h5>
                        <h1>We come from five generations of
greenhouse growers.</h1>
                    </div>
                </div>
                <div className="col-md-3"></div>
                   
                
            </div>
            <br></br>
        </div>
      </div>

       
      <div className="mt-5">
        
      </div>
      </>
    )
}

export default Aboutus;