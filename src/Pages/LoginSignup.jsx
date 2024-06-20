import React from "react";
import "./CSS/LoginSignup.css";

export const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder=" Your Name " />
          <input type="email" placeholder="Your Email Id " />
          <input type="password" placeholder="Password" />
        </div>
        <button>Sign Up</button>
        <p className="loginsignup-login">
          Already have an account ? <span>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" />
          <p>I agree to the terms and conditions of use and privacy policy</p>
        </div>
      </div>
    </div>
  );
};
