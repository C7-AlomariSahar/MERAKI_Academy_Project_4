
import React ,{useContext}  from 'react'
import { AppContext } from '../../App'
import { useNavigate } from 'react-router-dom'
import {BsFillCartCheckFill} from "react-icons/bs"
import axios from 'axios'

const CheckOut = () => {
    const{token , settoken ,isLoggedIn, setisLoggedIn , loggedInUserName, setloggedInUserName , selectedResturant, setselectedResturant ,selectedmeal, setselectedmeal ,setPopuptrigger ,Popuptrigger,orderitems, setorderitems ,add, sub , isCheckOut, setisCheckOut ,loggedInUserID ,setloggedInUserID , finalOrdarData, setfinalOrdarData} =useContext(AppContext)
  
   
   
    const navigate  = useNavigate();
  

  return (
    <div> 
    <BsFillCartCheckFill/>
<h1> Thank You {setloggedInUserName} </h1>
<h2> Your food will be on your table shortly </h2>
<button onClick={()=>{
   setPopuptrigger(false)
   setisCheckOut(false)
   navigate("/home")
   setorderitems([])
}}> Continue Shopping </button>
  </div>      
  )
}

export default CheckOut