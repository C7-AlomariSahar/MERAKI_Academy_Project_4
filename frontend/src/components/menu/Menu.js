import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../App";

import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";

import axios from "axios";
import Cuisine from "../cuisines/Cuisine";
import "./menu.css"
import Popup from "../popup/Popup";
import MenuType from "../menuType/MenuType";
import { BsStarHalf } from "react-icons/bs";
import {GiKnifeFork} from "react-icons/gi"
import { BsStar } from "react-icons/bs";

import { BsStarFill } from "react-icons/bs"
const Menu = () => {
   const [menu, setmenu] = useState([])
  const [menuDivs, setmenuDivs] = useState([])
  const [restaurantinfo, setrestaurantinfo] = useState([])

    const navigate =useNavigate();
    const {token , settoken ,isLoggedIn, setisLoggedIn ,loggedInUserName, setloggedInUserName ,selectedResturant, setselectedResturant ,selectedmeal, setselectedmeal ,setPopuptrigger ,Popuptrigger ,orderitems, setorderitems ,allmenutypesID ,filterFunparam, setfilterFunparam ,comefromSearch ,setcomefromSearch,mealcomefromsearch, setmealcomefromsearch } =useContext(AppContext)

useEffect(() => {
  if(comefromSearch){

    setselectedmeal(mealcomefromsearch)
    setPopuptrigger(true)

  }

//=======get resturant info by id==========================================

axios.get(`https://resturantswebsite.onrender.com/restaurant/${selectedResturant}`).then((response)=>{
  console.log("dataResturantsAll******************",response.data.resturant)
  setrestaurantinfo(response.data.resturant[0])
  console.log("````````````````````````````````````````````````````",response.data.resturant)
  console.log("````````````````````````image````````````````````````",response.data.resturant.image)


 }).catch((err)=>{
  console.log("dataResturantsAllerrXXXXXXX",err.response.data.message)
  setrestaurantinfo([])
 })

//==========================================================================

    console.log("menu-----selectedResturant-------------",selectedResturant)
    console.log("___________________$$$$$$$$$$$$$$________",filterFunparam)
   if( filterFunparam == "" ){
  axios.get(`https://resturantswebsite.onrender.com/meal/Resturant/${selectedResturant}`).then((response)=>{
//axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast`).then((response)=>{
    console.log("mealsfor one Resturant ******************",response.data)
    setmenu(response.data.meals)


   }).catch((err)=>{
    console.log("dataResturantsAllerrXXXXXXX",err.response.data.message)

   })

  }else{
    ///__________________________
    console.log("___________________$$$$$$$$$$$$$$________",filterFunparam)
    axios.get(`https://resturantswebsite.onrender.com/meal/Resturant/${selectedResturant}/menu/${filterFunparam}`).then((response)=>{
  
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
              <p>Price <span>{meal.price}</span> AED  </p>
              
                
              </div>
              
            </div>
        
        )
      })
  

  return (
    <>
    <div className="meals-main-div">
      <div className="resturant-info-menu">
 
       <div className="restaurantimg"><img src={restaurantinfo.image} /></div>
       <div className="restaurant-all-info">

         <div className="restaurant-all-info-1" > 
           <h1> <span className="details2"> <GiKnifeFork /> </span>{restaurantinfo.resturantName} </h1>
           <h3 className="details">
         <BsStarFill/> <BsStarFill/>  <BsStarFill/>  <BsStarFill/>  <BsStarHalf/> : { restaurantinfo.rate}</h3>  
             </div>
<div className="line"></div>
         <div className="restaurant-all-info-2">   
           <div>location :  <span className="details"> {restaurantinfo.city} </span></div> 
           <div>Delivery Fees : <span className="details"> 7 AED </span> </div>  
             <div>Delivery Time :<span className="details"> 30 min </span></div> 
              <div> Min Order :  <span className="details"> 50 AED </span> </div>  </div>
       </div>
      </div>
     
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



  
    