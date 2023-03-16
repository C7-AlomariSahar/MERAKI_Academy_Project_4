
import "./container.css";

import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";

import React, { useState, useEffect, createContext } from "react";
import Login from "../login/Login";
import Restaurants from "../restaurants/Restaurants";
import Register from "../register/Register";
import Navbar from "../navbar/Navbar";
import Home from "../home/Home";
import Menu from "../menu/Menu";
import Meal from "../Meal/Meal";
import Cart from "../cart/Cart";
import { BsWhatsapp } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import Search from "../search/Search";
import ScrollToTop from "../scroll/Scroll"
const Container = () => {
  return (

        



        <div className="container">
          <div className="navbar">
            <Navbar />
          </div>

          <div className="main">
            <Routes>
        
              <Route path="/home" element={ <Home />}></Route>
              <Route path="/restaurants" element={<Restaurants />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/restaurants" element={<Restaurants />}></Route>
              <Route path="/menu" element={<Menu />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/search" element={<Search />}></Route>
              
            </Routes>
          </div>

          <div className="footer">
            {/* <div>
              <div></div>
              <div></div>
              <div></div>
            </div> */}
            <div className="footer-navbar">
              <div className="social-icon">
                <div>
                  <a href="https://www.whatsapp.com">
                    <BsWhatsapp className="icon" />
                  </a>
                </div>

                <div>
                  <a href="https://web.facebook.com">
                    <BsFacebook className="icon" />
                  </a>
                </div>

                <div>
                  <a href="https://twitter.com">
                    <BsTwitter className="icon" />
                  </a>
                </div>

                <div>
                  <a href="https://www.instagram.com">
                    <BsInstagram className="icon" />
                  </a>
                </div>

                <div>
                  <a href="https://pinterest.com">
                    <BsPinterest className="icon" />
                  </a>
                </div>

                <div>
                  <a href="https://www.youtube.com">
                    <BsYoutube className="icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

  )
}

export default Container