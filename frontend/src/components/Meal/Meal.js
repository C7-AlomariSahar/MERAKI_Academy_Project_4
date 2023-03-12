import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../App";

import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";

import axios from "axios";

import "./meal.css"



const Meal = () => {

    const navigate =useNavigate();
   
    const {token , settoken ,isLoggedIn, setisLoggedIn ,loggedInUserName, setloggedInUserName ,selectedResturant, setselectedResturant ,selectedmeal, setselectedmeal ,setPopuptrigger ,Popuptrigger ,orderitems, setorderitems} =useContext(AppContext)


 const [theMeal, settheMeal] = useState("")
 const [orderQuntiti, setorderQuntiti] = useState(1)



    useEffect(() => {

       
        console.log("one meal-------------",selectedmeal)
    
      axios.get(`http://localhost:5000/meal/${selectedmeal}`).then((response)=>{
        console.log("one meal ******************",response.data.meal[0])
        
        settheMeal(response.data.meal[0])
    
       }).catch((err)=>{
        console.log("dataResturantsAllerrXXXXXXX",err.response.data.message)
    
       })
    
    }, [])



  return (

    <div className="outer-meal-container">
     <div className="inner-meal-container">

        <div className="meal"style={{
        background:`linear-gradient(to bottom ,rgba(0,255,255,0),rgba(0,0,0,0.8)) ,url(${theMeal.image} ) no-repeat bottom` ,backgroundSize:"cover" 
          }}>
        
         <div className="mealinfo"> 
        <h2>{theMeal.mealName}</h2>
       
          </div>
     </div>
   
  <div className="mealinfoextra">
  <p>{theMeal.description}</p>
      <div><span>{theMeal.price} AED</span></div>
  </div>
   
  {/* _id:selectedmeal , */}
    
     <div> <span><input min={1} max={10} defaultValue={1} onChange={(e)=>{setorderQuntiti(e.target.value)}} type={"number"}/></span> 
        <button
         onClick={()=>{
           console.log("----------orderQuntit------------",orderQuntiti)
          
          const found =orderitems.find((elem,i)=>{
            return elem.itemId == theMeal._id
          })
         

           if(found){

         
            setorderitems(orderitems.map((order,index)=>{
                console.log("?????????????????",order.quntiti,"??????????????????",found.quntiti)
                if(order.itemId == theMeal._id && ( Number(order.quntiti)+
                Number(orderQuntiti) >10 ) ){
                    return  order
                }
                return order.itemId == theMeal._id ?  Number(order.quntiti)+
                Number(orderQuntiti) >10 ? {...order , quntiti: 10 } :{...order , quntiti:(Number(order.quntiti)+
                Number(orderQuntiti))} : order
           
             }) )
              
        
        }else{
            
            setorderitems([...orderitems ,{
             itemName:theMeal.mealName,            
             itemId :theMeal._id,
             quntiti:orderQuntiti,
             price :theMeal.price
             }])
           }
           setPopuptrigger(false)
          
     
         }} >ADD TO CART</button> 
         
     </div>
     
      </div>
      

    </div>
  )
}

export default Meal



/***
 * 
 * 
 * 
//  const ingrediantsToAdd = theMeal.ingrediantsToAdd.map((add ,i)=>{

//     return (
//       <>
      
//       <input key={i} type={"checkbox"} id={i}  value={add}/>
//        <label for={i}> {add} </label><br/>

//        </>
//       )

//  } )

//  const ingrediantsToRemove = theMeal.ingrediantsToRemove.map((add ,i)=>{
 
//     consol.log("adddddddddddddddddd",add)
//     return (
//       <>
      
//       <input key={i} type={"checkbox"} id={i}  value={add}/>
//        <label for={i}> {add} </label><br/>

//        </>
//       )

//  } )
 * 
 *   {/* <div> 
        <h2>ingrediantsToAdd</h2>
     { ingrediantsToAdd}
      </div> 
    
     <div> 
        <h2>ingrediantsToRemove</h2>
     {ingrediantsToRemove}
      </div> 
     */
  
 