import React, { useEffect, useState } from 'react'

import "../styles/WorkerLogin.css";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import wokerbanner from "../assets/workerlogin.png";

const WorkerLogin = () => {

  return (
    <>
      <Navbar />

      {/* --------------------------------LOGIN OF WORKERS------------------------------------ */}

      <div className="worker_login">
        <div className="worker_login_left">
          <h1>Login to the website & work with us.</h1>
          <h4>Join 30,000+ partners across India</h4>
        </div>
        <div className="worker_login_right">
            <img src={wokerbanner} alt="" className="worker_register_banner" />
        </div>
      </div>
      <div className="worker_login_mid">
        <div className="worker_login_box">
          <h2>Let's get connected and help people by providing services</h2>
          <div className="worker_login_inputs">
            <div className="worker_login_mail">
              <input type="text" className="worker_login_mail_input" placeholder="Mail ID" name="email" />
            </div>
            <div className="worker_registration_password">
              <input type="password" className="worker_registration_password_input" placeholder="Password" name="password"  />
            </div>
          </div>

          <p className="worker_login-paralogin">Not a member of this website ? 
            <Link to="/workerregistration" className="worker_login-login">
            &nbsp;Signup
            </Link>
          </p>
          <Link to="/userdashboard" className="worker_login-button">
            <button className="worker_register_btn" type="submit">Login</button>
          </Link>
        </div>
      </div>  

      {/* -------------------------------FOOTER------------------------------------ */}

      <Footer />
    </>
  )
}

export default WorkerLogin
