import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../App";

import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";

import axios from "axios";
import Cuisine from "../cuisines/Cuisine";
import "./Restaurant.css"


const Restaurants = () => {

  const navigate =useNavigate();
  const {token , settoken ,isLoggedIn, setisLoggedIn ,loggedInUserName, setloggedInUserName ,selectedResturant, setselectedResturant ,filtername, setfiltername} =useContext(AppContext)


    const [allRestaurants, setallRestaurants] = useState([])
    


useEffect(() => {
console.log("************************************************",filtername)
  if(filtername == "All Restaurants"){
   axios.get("http://localhost:5000/restaurant/allResturant/Resturants").then((response)=>{
    console.log("dataResturantsAll******************",response.data.resturant)
    setallRestaurants(response.data.resturant)


   }).catch((err)=>{
    console.log("dataResturantsAllerrXXXXXXX",err.response.data.message)

   })
  }else{
    axios.get(`http://localhost:5000/restaurant/ResturantbyCuisine/${filtername}`).then((response)=>{
      console.log("dataResturantsAll******************",response.data.resturant)
      setallRestaurants(response.data.resturant)
  
  
     }).catch((err)=>{
      console.log("dataResturantsAllerrXXXXXXX",err.response.data.message)
      setallRestaurants([])
     })

  }

 
}, [filtername])

// {backgroundColor: "rgb(212, 237, 249)",
//     backgroundImage: `url(${restaurant.image})`}
const allrestaurants = allRestaurants.map((restaurant,i)=>{
  console.log("restaurant._id_____________________________",restaurant._id)
  return( 

      <div key={restaurant._id} className="restaurant"style={{
        background:`linear-gradient(to bottom ,rgba(0,255,255,0),rgba(0,0,0,0.8)) ,url(${restaurant.image} ) no-repeat bottom` ,backgroundSize:"cover" 
      }} onClick={()=>{
        setselectedResturant(restaurant._id)
         navigate("/menu") 
          
      }}>
        
        
        
        <div className="info">
          
        <h3>{restaurant.resturantName}</h3>
        <p>{restaurant.cuisine.cuisineName} <span>{restaurant.rate}</span>  </p>
        
          
        </div>
        
      </div>
  
  )
})

  return (

    <div className="restaurant-main-div">

   <div className="cuisine-div-inrestaurants">
     <Cuisine /> 
    </div>

   
   <div className="restaurants-div-for-all">
       {allRestaurants.length !=0 ? allrestaurants : "No Resturants in this Kitchen"
       }
     
     </div>


  

    </div>
  )

}

export default Restaurants