import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../App";

import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";

import axios from "axios";
import Cuisine from "../cuisines/Cuisine";
import "./Restaurant.css"


const Restaurants = () => {
    const [allRestaurants, setallRestaurants] = useState([])
    const [filtername, setfiltername] = useState("")
useEffect(() => {


   axios.get("http://localhost:5000/restaurant/allResturant/Resturants").then((response)=>{
    console.log("dataResturantsAll******************",response.data.resturant)
    setallRestaurants(response.data.resturant)


   }).catch((err)=>{
    console.log("dataResturantsAllerrXXXXXXX",err.response.data.message)

   })

 
}, [filtername])


const allrestaurants = allRestaurants.map((restaurant,i)=>{
  console.log("restaurant._id_____________________________",restaurant._id)
  return( 
 
      <div key={restaurant._id} className="restaurant"style={{backgroundColor: "rgb(212, 237, 249)",
    backgroundImage: `url(${restaurant.image})`}} >
        
        
        <h3>{restaurant.resturantName}</h3>
        <p>{restaurant.cuisine.cuisineName} </p>
        <span>{restaurant.rate}</span>
        
        
        
      </div>
  
  )
})

  return (

    <div className="restaurant-main-div">

   <div className="cuisine-div-inrestaurants">
     <Cuisine /> 
    </div>

   
   <div className="restaurants-div-for-all">
       {allrestaurants}
    
     </div>


  

    </div>
  )

}

export default Restaurants