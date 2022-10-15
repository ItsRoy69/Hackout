import React, { useEffect, useState } from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";
import shopregister from "../assets/registershop.png";

import { IoMdAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import "../styles/ShopRegister.css";

const ShopRegister = () => {
  

  return (
    <>
      <Navbar />
      <div className="register_shop">
        <div className="register_shop_header">


          <div className="register_shop_left">
            <h1>Register your shop with us</h1>
            <h4>Join 30,000+ partners across India</h4>

            <div className="register_shop_inputs">
              <div className="register_shop_smallbox">
                <div className="register_shopkeep_name">
                  <input
                    type="text"
                    className="register_shopkeep_name_input"
                    placeholder="Name"
                    name="admin"
                    
                  />
                </div>
                <div className="register_shop_mail">
                  <input
                    type="text"
                    className="register_shop_mail_input"
                    placeholder="Mail ID"
                    name="email"
                    
                  />
                </div>
              </div>
              <div className="register_shop_smallbox">
                <div className="register_shop_type">
                  <input
                    type="text"
                    className="register_shop_type_input"
                    placeholder="Shop type"
                    name="stype"
                    
                    list="browsers"
                  />
                </div>
                <datalist id="browsers">
                  <option value="Mechanical Shops" />
                  <option value="Electrical Shops" />
                  <option value="Plumbing Shops" />
                </datalist>
                <div className="register_shop_name">
                  <input
                    type="text"
                    className="register_shop_name_input"
                    placeholder="Shop name"
                    name="sname"
                    
                  />
                </div>
              </div>
              <div className="register_shop_address">
                <textarea
                  type="text"
                  className="register_shop_address_input"
                  placeholder="Shop address"
                  name="address"
                  
                  style={{ width: "416px" }}
                />
              </div>
              <div className="register_shop_password">
                <input
                  type="password"
                  className="register_shop_password_input"
                  placeholder="Password"
                  name="password"
                  
                  style={{ width: "416px" }}
                />
              </div>
              <div className="register_shop_wallet">
                <input
                  type="text"
                  className="register_shop_wallet_input"
                  placeholder="Wallet Address"
                  name="walletAddress"
                  
                  style={{ width: "416px" }}
                />
              </div>
            </div>

          </div>


          <div className="register_shop_right">
            <img src={shopregister} alt="" className="register_shop_banner" />
          </div>
        </div>

        <div className="register_shop_mid">
          <h4 className="register_shop_mid_list_heading">
            List of items in your shop
          </h4>
          <div className="register_shop_midbox">
            <div className="register_shop_smallbox">
              <div className="register_shop_items">
                {arr.map((item, i) => {
                  return (
                    <input
                      placeholder="Items"
                    />
                  );
                })}
              </div>
              <IoMdAddCircle
                className="register_shop_btn"
                size="30px"
              />
            </div>
          </div>
          <div className="register_shop_buttons">
            <p className="shop_registration-paralogin">
              Already a member of this website ?
              <Link to="/shoplogin" className="shop_registration-login">
                &nbsp;Login
              </Link>
            </p>
            <Link to="sign-up">
              <button
                className="register_shop_button"
                type="submit"
              >
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ShopRegister;
