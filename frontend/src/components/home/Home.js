
import React, { useState, useEffect, useContext } from "react";
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import Cuisine from '../cuisines/Cuisine'
 import "./home.css"
import { AppContext } from "../../App";



import axios from "axios";

 const Home = () => {


  const {token , settoken ,isLoggedIn, setisLoggedIn ,loggedInUserName, setloggedInUserName  ,loggedInUserID ,setloggedInUserID ,setfiltername } =useContext(AppContext)

  const navigate =useNavigate();
   const [top, settop] = useState([])


useEffect(() => {


  axios.get(`http://localhost:5000/restaurant/topRated/top`).then((response)=>{
  
  console.log("mealsfor one Resturant ******************",response.data.meals)
  settop(response.data.resturant )

 }).catch((err)=>{
  console.log("dataResturantsAllerrXXXXXXX",err.response.data.message)

 })

 


 
}, [])


   return (
     <div className='home'>
      
      <div   className='start-home-img'> 
   
       <h4>Your Favourite Restaurant At Your Home</h4>

          <button onClick={()=>{
           if( isLoggedIn ){ 
            setfiltername("All Restaurants")
            navigate("/restaurants")
          }else{
            navigate("/login") 
      
         
        }
          }}>Order Now</button>
      </div>


      {/* <div className='cuisine-div-inhome'>  */}
 
       <Cuisine />

      {/* </div> */}

{/* .limit( 5 )
 */}
        <h1>Top Rated</h1>
      <div className='rated'>
        
     
         {
         top.map((topone,i)=>{

          return(
         
         <div key={topone._id} className="restauranttop"style={{
        background:`url(${topone.image} ) no-repeat bottom` ,backgroundSize:"cover" 
      }} onClick={()=>{
        settop(topone._id)
        setfiltername("All Restaurants")
         navigate("/restaurants") 
          
      }}>
        
        
        
        <div className="infotop">
          
        <h3>{topone.resturantName}</h3>
        <p>{topone.cuisine.cuisineName} <span>{topone.rate}</span>  </p>
        
          
        </div>
        
      
  </div>
          )
         })

         }
      </div>
     </div>
   )
 }
 
 export default Home