import React, { useEffect, useState } from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import shoplogin from "../assets/loginshop.png";

import { Link, useNavigate } from "react-router-dom";

import "../styles/ShopLogin.css";
import axios from "axios";

const ShopLogin = () => {
  

  return (
    <>
      <Navbar />
      <div className="login_shop">
        <div className="login_shop_header">
          <div className="login_shop_right">
            <img src={shoplogin} alt="" className="login_shop_banner" />
          </div>
          <div className="login_shop_left">
            <h1>Login to your shop</h1>
            <h4>Join 30,000+ partners across India</h4>
            <div className="login_shop_inputs">
              <div className="login_shopkeep_name">
                <input
                  type="text"
                  className="login_shopkeep_name_input"
                  placeholder="Email"
                  name="email"
                />
              </div>
              <div className="login_shop_password">
                <input
                  type="password"
                  className="login_shop_password_input"
                  placeholder="Password"
                  name="password"
                  style={{ width: "416px" }}
                />
              </div>
              <div className="login_shop_buttons">
                <Link to="sign-up">
                  <button
                    className="login_shop_button"
                    type="submit"
                  >
                    Login
                  </button>
                </Link>
                <p className="shop_registration-paralogin">
                  Not a member of this website ?
                  <Link to="/shopregister" className="shop_registration-login">
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
  );
};

export default ShopLogin;
