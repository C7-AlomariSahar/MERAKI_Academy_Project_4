import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../App";

import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";

import axios from "axios";
import Cuisine from "../cuisines/Cuisine";
import "./menu.css"
import Popup from "../popup/Popup";


const Menu = () => {
   const [menu, setmenu] = useState([])
  

    const navigate =useNavigate();
    const {token , settoken ,isLoggedIn, setisLoggedIn ,loggedInUserName, setloggedInUserName ,selectedResturant, setselectedResturant ,selectedmeal, setselectedmeal ,setPopuptrigger ,Popuptrigger ,orderitems, setorderitems} =useContext(AppContext)

useEffect(() => {
    console.log("menu-----selectedResturant-------------",selectedResturant)

  axios.get(`http://localhost:5000/meal/Resturant/${selectedResturant}`).then((response)=>{
    console.log("mealsfor one Resturant ******************",response.data.meals)
    setmenu(response.data.meals)


   }).catch((err)=>{
    console.log("dataResturantsAllerrXXXXXXX",err.response.data.message)

   })
  
}, [])


const allmenu = menu.map((meal,i)=>{
    console.log("meal._id_____________________________",meal._id)
    return( 
  
        <div key={meal._id} className="menu"style={{
          background:`linear-gradient(to bottom ,rgba(0,255,255,0),rgba(0,0,0,0.8)) ,url(${meal.image} ) no-repeat bottom` ,backgroundSize:"cover" 
        }} onClick={()=>{
            console.log("_navigate _____",meal._id)
          setselectedmeal(meal._id)
        //    navigate("/meal") 
        setPopuptrigger(true)
            
        }}>
          
          
          
          <div className="mealinfo">
            
          <h3>{meal.mealName}</h3>
          <p> <span>{meal.price}</span>  </p>
          
            
          </div>
          
        </div>
    
    )
  })

  return (
    <>
    <div className="meals-main-div">
  
    <div className="cuisine-div-inrestaurants">
      <Cuisine /> 
     </div>
 
    
    <div className="meal-div-for-all">

        {allmenu}
     
      </div>
 
 
   
 
     </div>
     {Popuptrigger && <Popup/>}
     </>
  )
}

export default Menu



  
    