import React, { useEffect, useState } from "react";
import "../styles/ChatBox.css";
import { IoMdSend } from "react-icons/io";
import { io } from "socket.io-client";

import chatPic from "../assets/workerman.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

let socket;

const ChatBox = () => {

  return (
    <>
    <Navbar />
    <div className="dashboard-con">
      <div className="chat-main">
        <div className="welcome-con">
          
          <h1>Let's chat, </h1>
        
        </div> 
          <div className="chat-box">
            <div className="chat-box-1">
              <div className="search-box">
                  <input
                    type="text"
                    id=""
                    className="search"
                  />
                  {/* <input type="text" placeholder='Type something' className='inp' /> */}
                  <div className="btn">
                    Search
                  </div>
                </div>
                <div className="name-box">
                       
                          <div
                            className="names"                    
                          >
                            <img src={chatPic} alt="..." />
                       
                            <h6>user.nam</h6>

                        
                          </div>
                      
                      
                </div>
              </div>
            <div className="chat-box-2">
             
                <h2>Select a user to chat!</h2>
               <>
                <div className="uid">
                  <h4>
                    Continue your chat with,</h4>
              <div className="sender-message">
                    <div className="message-container">
                    
                          
                                  <div  className="message">
                                    <div>
                                      <div className="message-content">
                                        <p>{messages.message}</p>
                                      </div>
                                      <div className="message-meta">
                                        <p id="time">2:30</p>
                                        <p id="author">messages.username</p>
                                      </div>
                                    </div>
                                  </div>
                    </div>
                  </div>
                </div>
             </>

              <div className="chat-section">
                <input
                  type="text"
                  placeholder="Hey..."
                />
                <button type="button" className="chat_button">
                  <IoMdSend className="chat_btn"/>
                </button>
              </div>
            </div>
          </div>
      </div>
    </div>

    <Footer />
    </>
  );
};

export default ChatBox;