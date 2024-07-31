import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { json } from "react-router-dom";

function Singuppage() {
  const [username, setUsername] = useState("");
  const [emailaddres, setEmailaddres] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const Submit = (e) => {
    e.preventDefault();
    fetch("http://rocketpro.rootstechnology.in/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        name: username,
        email: emailaddres,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <>
      <Navbar />

      <div
        class="container signup-container"
        style={{ backgroundColor: "aqua" }}
      >
        <h2 class="text-center mb-4">Sign Up</h2>
        <form>
          <div class="form-group">
            <label for="username">Username</label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              class="form-control"
              id="username"
              name="username"
              required
            />
          </div>
          <div class="form-group">
            <label for="email">Email address</label>
            <input
              onChange={(e) => setEmailaddres(e.target.value)}
              type="email"
              class="form-control"
              id="email"
              name="email"
              required
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              class="form-control"
              id="password"
              name="password"
              required
            />
          </div>
          {/* <div class="form-group">
            <label for="confirmPassword">Confirm Password</label>
            <input type="password" class="form-control" id="confirmPassword" name="confirmPassword" required/>
        </div> */}

          <label for="Male">Male</label>
          <input type="radio" id="Male" name="group1" value="Male" />

          <label for="Female">Female</label>

          <input type="radio" id="Female" name="group1" value="Female" />

          <div class="form-group text-center mt-5">
            <button onClick={(e) => Submit(e)} type="button ">
              Login
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
export default Singuppage;
