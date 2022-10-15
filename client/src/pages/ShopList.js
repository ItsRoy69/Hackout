import React, { useEffect, useState } from "react";

import "../styles/ShopList.css";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import shoplist from "../assets/blogs.jpg";

const ShopList = () => {
  


  return (
    <>
      <Navbar />
      {/* ------------------------------ShopList----------------------------------- */}
    <>
      <div className="shoplist_section">
        <div className="shoplist_container">
          <div className="shoplist_head">
            <h1>List of shops you can checkout</h1>
            <div className="shoplist_filter">
              <div
                type="button"
                className="btn btn-primary distclass"
                
              >
                Sort By Distance
              </div>
              <select
                className="btn btn-secondary dropdown-toggle"
                name="Occupation"
                id="selectOccupation"
                
              >
                <option value="All">All</option>
                <option value="Plumbing Shop">Plumbing Shop</option>
                <option value="Electric Shop">Electric Shop</option>
                <option value="Mechanic Shop">Mechanic Shop</option>
              </select>
            </div>            
          </div> 
                 
          <div className="shoplist_lists">
            <div className="row">
              <div className="col-lg-3 mb-3">
                <div className="shoplist_card">
                  <img src={shoplist} alt="" className="shoplist_image" />
                  <div className="shoplist_carddetails">
                    <h1 className="shoplist_para">
                      store.sname
                    </h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <h5>City : Lorem Ipsum city</h5>
                    <h5>Address : store.address</h5>
                    <h5>Owner : store.admin</h5>
                    <h5>Phone : 9876543210</h5>
                    <h5>Mail : store.email</h5>                    
                        <button className="signup_service_button"
                         
                        >Message
                        </button> 
                      
                        <button className="signup_service_button">Buy</button>
                    
                  </div>                  
                </div>            
              </div>
                          
              
            </div>
            
          </div>
        </div>        
      </div>
      </>
      
      {/* -------------------------------FOOTER------------------------------------ */}

      <Footer />
    </>
  )
}

export default ShopList

