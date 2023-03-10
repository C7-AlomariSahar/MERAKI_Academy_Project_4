import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../App";

import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";

import axios from "axios";

import "./cart.css"


const Cart = () => {


    const navigate =useNavigate();
   
    const {token , settoken ,isLoggedIn, setisLoggedIn ,loggedInUserName, setloggedInUserName ,selectedResturant, setselectedResturant ,selectedmeal, setselectedmeal ,setPopuptrigger ,Popuptrigger ,orderitems, setorderitems, add ,sub} =useContext(AppContext)

     console.log("------------orderitems-----------",orderitems)
     let quntitichange;
 const [totalPrice, settotalPrice] = useState(0)
 const [Quintitynew, setQuintitynew] = useState(0)
 const [sumorsub, setsumorsub] = useState(0)
    //  itemName:theMeal.mealName,            
    //  _id:selectedmeal ,
    //   quntiti:orderQuntiti,
    //   price :theMeal.price
const [cart, setcart] = useState([orderitems])
const [totalquntity, settotalquntity] = useState(0)
const [totalpricetopay, settotalpricetopay] = useState(0)


    let total;



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
                   <span> <button onClick={()=>{
                     add(i, orderitem);
                   }}>+</button></span> 
                   <span> { orderitem.quntiti}</span> 
                   <span>  <button onClick={()=>{
                     sub(i,orderitem)
                   }} >-</button></span> 
                    
                    </td>
                  <td>      {orderitem.quntiti * orderitem.price}  AED </td>
                </tr>
              })}
            </tbody>
          </table>
         


          <div className="child">
     
              
             

             <div> Number Of Items in Your Cart :{orderitems.reduce((acc,orderitem,i)=>{
           return acc+ Number(orderitem.quntiti) 
       },0)} </div>
               <div> Total Amount to pay :{orderitems.reduce((acc,orderitem,i)=>{
           return acc+(Number(orderitem.quntiti) * Number(orderitem.price) )
       },0) } AED</div>
              <div>
                   <div>Payment Method : </div>
              
                <input type="checkbox" id="label1" name="label1" value="Cash On Delivery"/>
                 <label for="label1"> Cash On Delivery</label>
             <div>
             </div>
    </div>
          </div>
           </div>
    </div>
  )
}

export default Cart



