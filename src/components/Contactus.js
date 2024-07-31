import React from "react";
function contactus(){
    return(
        <>
   
  <form action="" method="post" >
  <div className="container mt-5">
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required/>
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required/>
    </div>
    <div class="form-group">
      <label for="Phone">Phone:</label>
      <input type="phone" id="phone" name="phone" required/>
    </div>
    <div class="form-group">
      <label for="message">Message:</label>
      <textarea id="message" name="message" required></textarea>
    </div>
    
    <div class="form-group">
     <center><button type="submit">Submit</button></center> 
    </div>
    </div>



   

  

  </form>
  

        </>
    )
}
export default contactus;