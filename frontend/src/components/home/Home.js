
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
 const [topmeal, settopmeal] = useState([])
 const [populer, setpopuler] = useState([])
useEffect(() => {


  axios.get(`https://resturantswebsite.onrender.com/restaurant/topRated/top?skipnumber=0`).then((response)=>{
  

  settop(response.data.resturant )

 }).catch((err)=>{
  console.log("dataResturantsAllerrXXXXXXX",err.response.data.message)

 })
 axios.get(`https://resturantswebsite.onrender.com/restaurant/topRated/top?skipnumber=4`).then((response)=>{
  

 setpopuler(response.data.resturant )

}).catch((err)=>{
 console.log("dataResturantsAllerrXXXXXXX",err.response.data.message)

})


axios.get(`https://resturantswebsite.onrender.com/meal/topRated/top`).then((response)=>{
  
console.log("::::::::::::::::::::::::::::::::::::;",response.data.meals)
settopmeal(response.data.meals)

}).catch((err)=>{
console.log("dataResturantsAllerrXXXXXXX",err.response.data.message)

})



 
}, [])


   return (
     <div className='home'>
      
      <div   className='start-home-img'> 
   
       <h4><span className="h1">Your</span><span className="h2"> Favourite</span><span className="h3"> Restaurant</span><span className="h4"> At</span><span className="h5"> Your</span> <span className="h6"> Home </span></h4>

          <button onClick={()=>{
            console.log("????????????????????????????????????????????", isLoggedIn)
           if( isLoggedIn ){ 
            setfiltername("All Restaurants")
            navigate("/restaurants")
          }else{
            navigate("/login") 
      
         
        }
          }}>Order Now</button>
        <div className="pizza">   </div>
        <div className="burger">   </div>
        <div className="sushi">   </div>
        <div className="salad">   </div>
        <div className="lamb">   </div>
        <div className="sandwish">   </div>
        <div className="pie">   </div>
        <div className="doughnut">   </div>

        


      </div>
    
 
       <Cuisine />




        <h1>Top Restaurants</h1>
      <div className='rated'>
        
     
         {
         top.map((topone,i)=>{

          return(
         
         <div key={topone._id} className="restauranttop"style={{
        background:`url(${topone.image} ) no-repeat bottom` ,backgroundSize:"cover" 
      }} onClick={()=>{

        if( isLoggedIn ){ 
          settop(topone._id)
          setfiltername("All Restaurants")
           navigate("/restaurants") 
        }else{
          navigate("/login") 
        }
        
          
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


      <h1>Top Meals</h1>
      <div className='rated' >  
      {
         topmeal.map((toponemeal,i)=>{

          return(
         
         <div key={toponemeal._id} className="restauranttop"style={{
        background:`url(${toponemeal.image} ) no-repeat bottom` ,backgroundSize:"cover" 
      }} onClick={()=>{

        
        // settop(toponemeal._id)
        // setfiltername("All Restaurants")
        //  navigate("/restaurants") 
          
      }}>
        
        
        
        <div className="infotop">
          
        <h3> {toponemeal.mealName}</h3>
        <p>{toponemeal.resturantId.resturantName}  <span>{toponemeal.price}</span>  </p>
        
          
        </div>
        
      
  </div>
          )
         })
         }


      </div>
      
   <div className="video">
  
   {/* <div>
    <img src=""></img>
   </div> */}
   <iframe width="97%" height="315" src="https://www.youtube.com/embed/X-EX6SzV3D0?controls=0&loop=1&showinfo=0&autoplay=1&mute=1&&playlist=X-EX6SzV3D0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>
      </div>
      {/* <iframe src="https://www.youtube.com/watch?v=X-EX6SzV3D0" width="100% "height="400"  allow="accelerometer" autoplay >


     </iframe> */}
      
     </div>
   )
 }
 
 export default Home