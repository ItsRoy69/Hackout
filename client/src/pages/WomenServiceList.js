import React, { useState } from "react";

import "../styles/WomenServiceList.css";
import background1 from "../assets/workerslist1.png";
import background2 from "../assets/workerslist2.png";
import background3 from "../assets/workerslist3.png";
import workerman from "../assets/workerman.png";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Link } from "react-router-dom";

const WomenserviceList = () => {

 


  return (
    <>
      <Navbar />
      {/* ------------------------------womenservicelist----------------------------------- */}

      <div className="womenservicelist_section">
        <div className="womenservicelist_container">
          <div className="womenservicelist_head">
            <h1>List of womenservice you can checkout</h1>
            <div className="womenservicelist_filter">
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
                <option value="Plumbing womenservice">Plumbing womenservice</option>
                <option value="Electric womenservice">Electric womenservice</option>
                <option value="Mechanic womenservice">Mechanic womenservice</option>
              </select>
            </div>            
          </div> 
                 
          <div className="womenservicelist_lists">
            <div className="row">
              
              <div className="col-lg-3 mb-3">
                <div className="womenservicelist_card">
                  <div className="card womenserviceCard text-white card-has-bg click-col"
                    style={{  backgroundImage:`url(${background1})` }}
                  >
                    <div className="card-img-overlay d-flex flex-column">
                      <div className="card-body">
                        <h3>worker.name</h3>
                        <h5>worker.occupation</h5>
                        <h5>worker.city</h5>
                      </div>
                      <div className="card-footer">
                        <div className="media">
                          <img className="mr-3 rounded-circle" src={workerman} style={{ maxWidth: "50px" }} />
                          <div className="media-body">
                            <h6>Phone : worker.phoneNo</h6>
                            <h6>worker.address</h6>
                            <h5>worker.distance km</h5>
                            <h5>5<RiStarFill /></h5>
                            <button className="womenservicelist_btn"
                            
                            >Send location to worker.name
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>                  
                </div>
              </div>


            </div>            
          </div>
        </div>        
      </div>
      
      {/* -------------------------------FOOTER------------------------------------ */}

      <Footer />
    </>
  )
}

export default WomenserviceList

