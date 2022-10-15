import React, { useEffect, useState } from 'react';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import service_login from "../assets/service_login.png";

import { Link, useNavigate } from "react-router-dom";

import "../styles/ServiceLogin.css";

const ServiceLogin = () => {


  const [loguser, setLogUser] = useState({
    email: "",
    password: "",
  });

  
  return (
    <>
      <Navbar />
      <div className="login_service">
        <div className="login_service_header">
          <div className="login_service_right">
            <img src={service_login} alt="" className="login_service_banner" />
          </div>
          <div className="login_service_left">
            <h1>Login to the website</h1>
            <h4>Join 30,000+ partners across India</h4>
            <div className="login_service_inputs">              
              <div className="login_service_mail">
                <input type="text" className="login_service_mail_input" placeholder="Mail ID"  style={{width: "416px"}} name = "email" />
              </div>
              <div className="login_service_password">
                <input type="password" className="login_service_password_input" placeholder="Password"  style={{width: "416px"}} name = "password"  />
              </div>
              <div className="login_service_buttons">
                <Link to="sign-up">
                  <button className="login_service_button" type="submit" >Login</button>
                </Link>
                <p className="shop_registration-paralogin">Not a member of this website ? 
                  <Link to="/servicesignup" className="shop_registration-login">
                  &nbsp;Register
                  </Link>
                </p> 
              </div>
            </div>
          </div>
        </div>               
      </div>     

      <Footer />
    </>
  )
}

export default ServiceLogin
