import React, { useState } from "react";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log("username", username);
  console.log("password", password);
  const Submit = (e) => {

    e.preventDefault();
    fetch ("http://rocketpro.rootstechnology.in/api/login", {
       method: "POST",
       headers: {'Content-Type': 'application/json;charset=utf-8'},
       body: JSON.stringify({
         email:username,
         password: password
      }),
  })
    .then((response) => response.json())
    .then((result) => {
     console.log(result);
    });

  
  };
  return (
    <>
      <center>
        {" "}
        <div class="login-container mt-5">
          <h2>Login</h2>
          <form class="login-form">
            <div class="form-group">
              <label for="username">Username:</label>
              <input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                id="username"
                name="username"
                required
              />
            </div>
            <div class="form-group">
              <label for="password">Password:</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                name="password"
                required
              />
            </div>
            <div class="form-group mt-3">
              <button onClick={(e) => Submit(e)} type="button">
                Login
              </button>
            </div>
          </form>
        </div>
      </center>
    </>
  );
}
export default Login;
