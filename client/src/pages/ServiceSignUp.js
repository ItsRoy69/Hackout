import React, { useEffect, useState } from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";

import service_signup from "../assets/service_signup.png";

import { Link, useNavigate } from "react-router-dom";

import "../styles/ServiceSignUp.css";

const ServiceSignUp = () => {
  

  // console.log("Latitude is : ", latitude);
  // console.log("Latitude is : ", longitude);

  
  return (
    <>
      <Navbar />
      <div className="signup_service">
        <div className="signup_service_header">
          <div className="signup_service_left">
            <h1>Signup to get services</h1>
            <h4>Join 30,000+ partners across India</h4>
            <div className="signup_service_inputs">
              <div className="signup_service_name">
                <input
                  type="text"
                  className="service_signup_inputs signup_service_name_input "
                  placeholder="Name"
                  style={{ width: "416px" }}
                  name="name"                  
                />
              </div>
              <div className="signup_service_mail">
                <input
                  type="text"
                  className="service_signup_inputs signup_service_mail_input "
                  placeholder="Mail ID"
                  style={{ width: "416px" }}
                  name="email"
                  
                />
              </div>
              <div className="signup_service_password">
                <input
                  type="password"
                  className="service_signup_inputs signup_service_password_input "
                  placeholder="Password"
                  style={{ width: "416px" }}
                  name="password"
                />
              </div>
              <div className="signup_service_address">
                <textarea
                  type="text"
                  className="service_signup_inputs signup_service_password_input "
                  placeholder="Address"
                  style={{ width: "416px" }}
                  name="address"                  
                />
              </div>
              <div className="signup_service_buttons">
                <div className="signup_service_signup_button_div">
                  <Link to="sign-up">
                    <button
                      className="signup_service_button"
                      type="submit"
                    >
                      Signup
                    </button>
                  </Link>
                </div>
                <p className="signup_service-paralogin">
                  Already a member of this website ?
                  <Link to="/servicelogin" className="signup_service-login">
                    &nbsp;Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="signup_service_right">
            <img
              src={service_signup}
              alt=""
              className="signup_service_banner"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ServiceSignUp;
