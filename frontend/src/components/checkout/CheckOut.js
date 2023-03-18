
import React ,{useContext}  from 'react'
import { AppContext } from '../../App'
import { useNavigate } from 'react-router-dom'
import {BsFillCartCheckFill} from "react-icons/bs"
import axios from 'axios'
import "./checkout.css"

const CheckOut = () => {
    const{token , settoken ,isLoggedIn, setisLoggedIn , loggedInUserName, setloggedInUserName , selectedResturant, setselectedResturant ,selectedmeal, setselectedmeal ,setPopuptrigger ,Popuptrigger,orderitems, setorderitems ,add, sub , isCheckOut, setisCheckOut ,loggedInUserID ,setloggedInUserID , finalOrdarData, setfinalOrdarData} =useContext(AppContext)
  
   
   
    const navigate  = useNavigate();
  

  return (
    <div className='maincheckout'> 
    <BsFillCartCheckFill className='cartfull'/>
<h1> Thank You {setloggedInUserName} </h1>
<h2> Your food will be on your table shortly </h2>
<button onClick={()=>{
   setPopuptrigger(false)
   setisCheckOut(false)
   navigate("/home")
   setorderitems([])
}}> Continue Shopping </button>

<div></div>
<div className="driver"> <img src="https://media.istockphoto.com/id/1314333578/photo/delivery-man-riding-a-motorcycle-with-delivery-box-3d-rendering.jpg?b=1&s=170667a&w=0&k=20&c=uzi7J5VGB9RhlgwHj-ZeGl7X7IpYbAgF4u_NHL_nRFs=
"></img></div>

  </div>      
  )
}

export default CheckOut