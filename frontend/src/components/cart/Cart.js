import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../App";

import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";

import axios from "axios";

import "./cart.css"
import Popup from "../popup/Popup";
import {MdOutlineDeleteForever} from "react-icons/md"
import {IoMdArrowDropdown} from "react-icons/io"
import {IoMdArrowDropup} from "react-icons/io"
 

const Cart = () => {
    
    const navigate =useNavigate();
   
    const {token , settoken ,isLoggedIn, setisLoggedIn ,loggedInUserName, setloggedInUserName ,selectedResturant, setselectedResturant ,selectedmeal, setselectedmeal ,setPopuptrigger ,Popuptrigger ,orderitems, setorderitems, add ,sub , isCheckOut, setisCheckOut ,loggedInUserID ,setfiltername,
      cartitemsNum, setcartitemsNum } =useContext(AppContext)

 const [totalPrice, settotalPrice] = useState(0)
 const [Quintitynew, setQuintitynew] = useState(0)
 const [sumorsub, setsumorsub] = useState(0)
const [cart, setcart] = useState([orderitems])
const [totalquntity, settotalquntity] = useState(0)
const [totalpricetopay, settotalpricetopay] = useState(0)
const [paymentMethod, setpaymentMethod] = useState("Cash On Delivery")

   
let totalquntiti =  orderitems.reduce((acc,orderitem,i)=>{
        return acc+ Number(orderitem.quntiti) },0)
let finalPrice =orderitems.reduce((acc,orderitem,i)=>{
    return acc+(Number(orderitem.quntiti) * Number(orderitem.price) )
},0) 

useEffect(() => {
  
  setcartitemsNum(totalquntiti)
  localStorage.setItem("cartitemsNum",totalquntiti);
}, [totalquntiti])


const CheckOutFun =()=>{

console.log("final Data_______________" ,{userId:loggedInUserID ,totalPrice:finalPrice ,paymentMethod  :  paymentMethod   ,  orderfrom: selectedResturant , orderItems:   orderitems ,     orderStatus:"Pending" ,deleviredTo:"JVC"  } )
    axios.post("http://localhost:5000/order/",{userId:loggedInUserID ,totalPrice:finalPrice ,paymentMethod  :  paymentMethod   ,  orderfrom: selectedResturant , orderItems:   orderitems ,     orderStatus:"Pending" ,deleviredTo:"JVC "  }).then((result)=>{
        console.log("OK Order Saved")
        setisCheckOut(true)
        localStorage.removeItem("orderitems")
        setcartitemsNum(0)
        
        localStorage.removeItem("cartitemsNum")
        setPopuptrigger(true)
    }).catch((err)=>{ throw err})
    
    
   


}



  return (
    <>
    { orderitems.length !=0 ? 
    <div className="cart-container">
  
      
        <div className="parint">
           <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quintity</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>


              {orderitems.map((orderitem ,i)=>{
                {console.log("######",orderitem)}
                
               return <tr >
                  <td>{ orderitem.itemName}</td>
                  <td>{orderitem.price} AED </td>
                 
                  <td>
                   <span> < button   disabled={orderitem.quntiti == 10 } onClick={()=>{
                     add(i, orderitem);

                    //----

                    let newitem = JSON.parse(localStorage.getItem("orderitems")) 
                    let newitemupdate = (newitem.map((order,index)=>{
                    return order.itemId == orderitem.itemId ?{...order , quntiti:(Number(order.quntiti)+1 )} : order
                    }))
                    localStorage.setItem("orderitems", JSON.stringify([...newitemupdate ]))
                    
                    // let totalquntiti =  newitemupdate.reduce((acc,orderitem,i)=>{
                    //  return acc+ Number(orderitem.quntiti) },0)
       
               
                  localStorage.setItem("cartitemsNum",cartitemsNum+1 );
                   setcartitemsNum(cartitemsNum+1 )

                    //---


                   }}><IoMdArrowDropup /> </button></span> 
                   <span> { orderitem.quntiti}</span> 
                   <span>  <button onClick={()=>{
                     sub(i,orderitem)
                   }} > {  orderitem.quntiti != 1 ?  < IoMdArrowDropdown/> : <MdOutlineDeleteForever /> } </button> </span> 
                
                    
                    </td>
                  <td>      {orderitem.quntiti * orderitem.price}  AED </td>
                </tr>
              })}
            </tbody>
          </table>
         


          <div className="child">
     
              
             

             <div className="check-out-final-data-divs"> Number Of Items in Your Cart  :  <span className="finaldata">{ totalquntiti
      }  items </span></div>
               <div className="check-out-final-data-divs"> Total Amount to pay : <span className="finaldata">{ finalPrice  } AED</span></div>
              <div className="check-out-final-data-divs2">
                   <div>Payment Method : 
                   <input type="radio" checked onChange={(e)=>{setpaymentMethod(e.target.value) }} id="label1" name="label1" value="Cash On Delivery"/>
                 <label for="label1"> Cash On Delivery</label>

                   </div>
                 
               
                 <br/>
                 <button on onClick={()=>{
                         CheckOutFun();

                 }}> Check Out </button>
             <div>
             </div>
    </div>
          </div>
           </div>
           <button className="backbut" onClick={()=>{   navigate(-1)}}>Back to the Menu</button>
           {Popuptrigger && <Popup/>}

         
    </div>
    :  
    <div className="cart-container-empty">

<div className="img"><img src="./images/cart.jpg" /> </div>
   <p className=" empty-cart">Your Cart Is Empty </p>
   <button className=" empty-cart" onClick={()=>{
 if( isLoggedIn ){ 
  setfiltername("All Restaurants")
  navigate("/restaurants")
}else{
  navigate("/login") }

   }} > Start Shopping </button>
    </div>
    }
    </>
  )
}

export default Cart



