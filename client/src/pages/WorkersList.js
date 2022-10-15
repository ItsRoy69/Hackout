import React, { useEffect, useState } from "react";

import "../styles/WorkersList.css";
import background1 from "../assets/workerslist1.png";
import background2 from "../assets/workerslist2.png";
import background3 from "../assets/workerslist3.png";
import workerman from "../assets/workerman.png";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Link, useNavigate } from "react-router-dom";


const WorkersList = ({ customer }) => {

 
  return (
    <>
      <Navbar />
      {/* ------------------------------WorkersList----------------------------------- */}
    {allWorkers? 
      <div className="workerslist_section">
        <div className="workerslist_container">
          <div className="workerslist_head">
            <h1>List of workers you can checkout</h1>
            <div className="workerslist_filter">
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
                <option value="Plumbing workers">Plumbing workers</option>
                <option value="Electric workers">Electric workers</option>
                <option value="Mechanic workers">Mechanic workers</option>
              </select>
            </div>            
          </div> 
                 
          <div className="workerslist_lists">
            <div className="row">
            {allWorkers.map((worker,index) => {
                return(
                <>
              <div className="col-lg-3 mb-3">
               
                <div className="workerslist_card" key={index}>
                  <div className="card workersCard text-white card-has-bg click-col"
                    style={{  backgroundImage:`url(${background1})` }}
                  >
                    <div className="card-img-overlay d-flex flex-column">
                      <div className="card-body">
                        <h3>{worker.name}</h3>
                        <h5>{worker.profession}</h5>
                        <h5>{worker.address}</h5>
                      </div>
                      <div className="card-footer">
                        <div className="media">
                          <img className="mr-3 rounded-circle" src={workerman} style={{ maxWidth: "50px" }} />
                          <div className="media-body">
                            <h6>Phone : worker.phone</h6>
                            <h6>worker.address</h6>
                            <h5>worker.distance km</h5>
                            <h5>5<RiStarFill /></h5>                           

                            {type == 0?
                                    <>                          
                                    <button className="workerlist_btn"
                                        
                                      >Message
                                      </button>  
                                                         
                                </>
                                    : 
                                    <>
                                      <button className="workerlist_btn"
                                       
                                      >Send location to {worker.name}
                                      </button>
                                    </>
                                }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>                  
                </div>
                
              </div>
              </>
                );
                })}     


            </div>            
          </div>
        </div>        
      </div>
      :null
}
      
      {/* -------------------------------FOOTER------------------------------------ */}

      <Footer />
    </>
  )
}

export default WorkersList

