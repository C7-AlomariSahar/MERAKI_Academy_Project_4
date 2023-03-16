import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../App";

import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";

import axios from "axios";
import Cuisine from "../cuisines/Cuisine";
import "./userpanel.css"




const UserPanel = () => {

const [show, setshow] = useState(true)
const [showorder, setshoworder] = useState(false)
const [userorders, setuserorders] = useState([])

//  const showFun =()=>setshow(!show)
//  const showorderFun =()=>setshoworder(!showorder)
  

    const navigate =useNavigate();
    const {token , settoken ,isLoggedIn, setisLoggedIn ,loggedInUserName,
      loggedInUserAllData, setloggedInUserAllData, setloggedInUserName ,selectedResturant, setselectedResturant ,filtername, setfiltername,loggedInUserID ,userData, setuserData} =useContext(AppContext)
  

      useEffect(() => {
  
        axios.get(`http://localhost:5000/order/allorders/user/${loggedInUserID}`).then((response)=>{
            console.log("===",loggedInUserID,"***************orderpanel******************",response.data.orders)
            setuserorders(response.data.orders)
        
        
           }).catch((err)=>{
            console.log("dataResturantsAllerrXXXXXXX",err.response.data.message)
        
           })
    
      }, [showorder ])
      


  
  return (
     <div className="panelcontainer">
        <div className="panel1">
        
 <button className="userinfopanelshow but1" onClick={()=>{
    setshoworder(false)
    setshow(true)
    // showFun()
}}>
 Info </button> 
  <button className="uorderpanelshow but1" onClick={()=>{
    setshow(false)
    setshoworder(true)
    // showorderFun()
    }} >Orders </button> 

</div>

<div className={show? "userinfopanel activeuserinfopanel":"userinfopanel"}>
<div className="orderdivinfo2">First Name : {loggedInUserAllData.firstName}</div>
<div className="orderdivinfo2" >Last Name : {loggedInUserAllData.LastName}</div>
<div className="orderdivinfo2">User Name: {loggedInUserAllData.UserName}</div>
<div className="orderdivinfo2">Email : {loggedInUserAllData.email}</div>
<div className="orderdivinfo2">Phone : {loggedInUserAllData.phoneNumber}</div>
{/* <div className="orderdivinfo2">city : {loggedInUserAllData.city}</div> */}
</div>




<div className={ showorder ? "userinfopanel activeuserinfopanel":"userinfopanel"}>
    {

userorders.map((oneorder)=>{

    return(
<div key={oneorder._id} className="orderdiv">
 <div className="orderdivinfo">{oneorder.orderfrom.resturantName}</div>
<div className="orderdivinfo">{oneorder.totalPrice}</div>
{/* <div>{oneorder.deleviredTo}</div>
<div>{oneorder.paymentMethod}</div>

<div>{oneorder.orderItems}</div> */}
<div className="orderdivinfo">{oneorder.orderStatus}</div>
        </div>
   )
})

    }

</div>


<div><button className="b" onClick={()=>{
   setshoworder(false)

   setuserData(false)
   setisLoggedIn(false)
navigate("/home")

}} >Log out </button></div>
</div>
   
  )
}

export default UserPanel