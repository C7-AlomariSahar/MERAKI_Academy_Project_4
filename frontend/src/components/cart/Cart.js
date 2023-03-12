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
   
    const {token , settoken ,isLoggedIn, setisLoggedIn ,loggedInUserName, setloggedInUserName ,selectedResturant, setselectedResturant ,selectedmeal, setselectedmeal ,setPopuptrigger ,Popuptrigger ,orderitems, setorderitems, add ,sub , isCheckOut, setisCheckOut ,loggedInUserID  } =useContext(AppContext)

 const [totalPrice, settotalPrice] = useState(0)
 const [Quintitynew, setQuintitynew] = useState(0)
 const [sumorsub, setsumorsub] = useState(0)
const [cart, setcart] = useState([orderitems])
const [totalquntity, settotalquntity] = useState(0)
const [totalpricetopay, settotalpricetopay] = useState(0)
const [paymentMethod, setpaymentMethod] = useState("")

   
let totalquntiti =  orderitems.reduce((acc,orderitem,i)=>{
        return acc+ Number(orderitem.quntiti) },0)
let finalPrice =orderitems.reduce((acc,orderitem,i)=>{
    return acc+(Number(orderitem.quntiti) * Number(orderitem.price) )
},0) 


const CheckOutFun =()=>{

console.log("final Data_______________" ,{userId:loggedInUserID ,totalPrice:finalPrice ,paymentMethod  :  paymentMethod   ,  orderfrom: selectedResturant , orderItems:   orderitems ,     orderStatus:"Pending" ,deleviredTo:"JVC"  } )
    axios.post("http://localhost:5000/order/",{userId:loggedInUserID ,totalPrice:finalPrice ,paymentMethod  :  paymentMethod   ,  orderfrom: selectedResturant , orderItems:   orderitems ,     orderStatus:"Pending" ,deleviredTo:"JVC "  }).then((result)=>{
        console.log("OK Order Saved")
        setisCheckOut(true)
        setPopuptrigger(true)
    }).catch((err)=>{ throw err})
    
    
   


}



  return (
    <div>
  
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
     
              
             

             <div> Number Of Items in Your Cart :{ totalquntiti
      } </div>
               <div> Total Amount to pay :{ finalPrice  } AED</div>
              <div>
                   <div>Payment Method : </div>
              <br/>
                <input type="radio"  onChange={(e)=>{setpaymentMethod(e.target.value) }} id="label1" name="label1" value="Cash On Delivery"/>
                 <label for="label1"> Cash On Delivery</label>
                 <br/>
                 <button on onClick={()=>{
                         CheckOutFun();

                 }}> Check Out </button>
             <div>
             </div>
    </div>
          </div>
           </div>
           <button onClick={()=>{   navigate(-1)}}>Back to the Menu</button>
           {Popuptrigger && <Popup/>}
    </div>
  )
}

export default Cart



