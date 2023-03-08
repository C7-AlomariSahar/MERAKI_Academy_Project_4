import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../App";

import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";

import axios from "axios";



const Restaurants = () => {
    const [allRestaurants, setallRestaurants] = useState([])
useEffect(() => {
   axios.get("http://localhost:5000/restaurant/allResturant/Resturants").then((response)=>{
    console.log("dataResturantsAll******************",response.data.resturant)
    setallRestaurants(response.data.resturant)


   }).catch((err)=>{
    console.log("dataResturantsAllerrXXXXXXX",err.response.data.message)

   })

 
}, [])


allRestaurants.map((restaurant,i)=>{
  return <>
  
      <div key={restaurant._id} className="resturant">
        
        
        <h3>restaurant.resturantName</h3>
        <p>restaurant.cuisine </p>
        <span>resturant.rate</span>
        
        
        
      </div>
  
  </>
})

  return (
    <div></div>
  )

}

export default Restaurants