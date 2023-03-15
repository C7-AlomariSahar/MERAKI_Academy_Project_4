import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../App";

import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";

import axios from "axios";
import Cuisine from "../cuisines/Cuisine";
import "./menu.css"
import Popup from "../popup/Popup";
import MenuType from "../menuType/MenuType";


const Menu = () => {
   const [menu, setmenu] = useState([])
  const [menuDivs, setmenuDivs] = useState([])

    const navigate =useNavigate();
    const {token , settoken ,isLoggedIn, setisLoggedIn ,loggedInUserName, setloggedInUserName ,selectedResturant, setselectedResturant ,selectedmeal, setselectedmeal ,setPopuptrigger ,Popuptrigger ,orderitems, setorderitems ,allmenutypesID ,filterFunparam, setfilterFunparam} =useContext(AppContext)

useEffect(() => {
    console.log("menu-----selectedResturant-------------",selectedResturant)
    console.log("___________________$$$$$$$$$$$$$$________",filterFunparam)
   if( filterFunparam == "" ){
  axios.get(`http://localhost:5000/meal/Resturant/${selectedResturant}`).then((response)=>{
//axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast`).then((response)=>{
    console.log("mealsfor one Resturant ******************",response.data)
    setmenu(response.data.meals)


   }).catch((err)=>{
    console.log("dataResturantsAllerrXXXXXXX",err.response.data.message)

   })

  }else{
    ///__________________________
    console.log("___________________$$$$$$$$$$$$$$________",filterFunparam)
    axios.get(`http://localhost:5000/meal/Resturant/${selectedResturant}/menu/${filterFunparam}`).then((response)=>{
  
        console.log("mealsfor one Resturant ******************",response.data.meals)
        setmenu(response.data.meals )
    
       }).catch((err)=>{
        console.log("dataResturantsAllerrXXXXXXX",err.response.data.message)
    
       })
      }
   
}, [filterFunparam])



 
 const outerrDiv = menu.map((meal,i)=>{
        console.log("meal._id_____________________________",meal._id)
        return( 
      
            <div key={meal._id} className="menu"style={{
              // background:`linear-gradient(to bottom ,rgba(0,255,255,0),rgba(0,0,0,0.8)) ,url(${meal.image} ) no-repeat bottom` ,backgroundSize:"cover" 
              // background:`url(${meal.image} ) no-repeat bottom` ,backgroundSize:"cover" 
          }} onClick={()=>{
                console.log("_navigate _____",meal._id)
              setselectedmeal(meal._id)
            setPopuptrigger(true)
                
            }}>
              
              <div className="mealimg"><img src={`${meal.image}`} /></div>
              
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
  
    {/* <div className="cuisine-div-inrestaurants"> */}
      <MenuType />
     {/* </div> */}
   
    
    <div className="meal-div-for-all">
      {/* <div className="divContaner"> */}
   { outerrDiv }
   {/* </div> */}
      </div>
 

   
    
     </div>
     {Popuptrigger && <Popup/>}

 
     </>
  )
}

export default Menu



  
    