import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../App";

import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";

import axios from "axios";

import "./meal.css"



const Meal = () => {

    const navigate =useNavigate();
   
    const {token , settoken ,isLoggedIn, setisLoggedIn ,loggedInUserName, setloggedInUserName ,selectedResturant, setselectedResturant ,selectedmeal, setselectedmeal ,setPopuptrigger ,Popuptrigger ,orderitems, setorderitems
    ,setcartitemsNum,cartitemsNum ,setcomefromSearch , addfun,
    adds,} =useContext(AppContext)


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
    
    }, [selectedmeal])




  return (

    <div className="outer-meal-container">
     <div className="inner-meal-container">

        <div className="mealpopup"style={{
        // background:`linear-gradient(to bottom ,rgba(0,255,255,0),rgba(0,0,0,0.8)) ,url(${theMeal.image} ) no-repeat bottom` ,backgroundSize:"cover" 
        // background:`url(${theMeal.image} ) no-repeat center  ` 

         }}>
         <div className="mealimginsidepopup"><img src={`${theMeal.image}`} /></div>
         <div className="mealinfoinsidepopup"> 
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
                console.log("?????????????????",order.quntiti,"??????????????????",orderQuntiti)
            
                console.log("?????????????????",theMeal._id,"??????????????????",order.itemId)

                return order.itemId == theMeal._id ?   Number(order.quntiti)+
                Number(orderQuntiti) >10 ? {...order , quntiti: 10 } :{...order , quntiti:(Number(order.quntiti)+
                Number(orderQuntiti))} : order
           
                //  if(order.itemId == theMeal._id ){
                //   if( Number(order.quntiti)+ Number(orderQuntiti) >10){

                //     return {...order , quntiti: 10 }
                //   }else{
                //       return  {...order , quntiti:(Number(order.quntiti)+ Number(orderQuntiti))}        
                //   }
                // }else{
                //   return order
                // }   
                 
      

             }) )
              
             let newitem = JSON.parse(localStorage.getItem("orderitems")) 
             let newitemupdate = (newitem.map((order,index)=>{
              console.log("?????????????????",theMeal._id ,"??????????????????", order.itemId)

             return order.itemId == theMeal._id ?   Number(order.quntiti)+
             Number(orderQuntiti) >10 ? {...order , quntiti: 10 } :{...order , quntiti:(Number(order.quntiti)+
             Number(orderQuntiti))} : order
             }))
             localStorage.setItem("orderitems", JSON.stringify([...newitemupdate ]))
             
             let totalquntiti =  newitemupdate.reduce((acc,orderitem,i)=>{
              return acc+ Number(orderitem.quntiti) },0)

              localStorage.setItem("cartitemsNum",totalquntiti );
              setcartitemsNum(totalquntiti )
        }else{
            
            setorderitems([...orderitems ,{
             itemName:theMeal.mealName,            
             itemId :theMeal._id,
             quntiti:orderQuntiti,
             price :theMeal.price
             }])
             localStorage.setItem("orderitems", JSON.stringify([...orderitems ,{
              itemName:theMeal.mealName,            
              itemId :theMeal._id,
              quntiti:orderQuntiti,
              price :theMeal.price
              }]) );
                localStorage.setItem("cartitemsNum",cartitemsNum+Number(orderQuntiti) );
            setcartitemsNum(cartitemsNum+Number(orderQuntiti) )
           }
           setPopuptrigger(false)
        
         
            // localStorage.setItem("orderitems", JSON.stringify([...orderitems ,{
            //   itemName:theMeal.mealName,            
            //   itemId :theMeal._id,
            //   quntiti:orderQuntiti,
            //   price :theMeal.price
            //   }]) );
            setcomefromSearch(false)
           
         }} >ADD TO CART</button> 
         
     </div>
     
      </div>
      

    </div>
  )
}

export default Meal



 