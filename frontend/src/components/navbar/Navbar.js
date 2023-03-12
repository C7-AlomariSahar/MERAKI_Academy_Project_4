
import React ,{useState,useEffect,useContext} from 'react'
import {Routes,Route,Link,NavLink} from "react-router-dom"
import {BsFillCartFill} from "react-icons/bs"
import {VscAccount} from "react-icons/vsc"
import {BiHomeSmile} from "react-icons/bi"
import "./navbar.css"
 import { AppContext } from "../../App";

const Navbar = () => {

  const {token , settoken ,isLoggedIn, setisLoggedIn ,loggedInUserName, setloggedInUserName} =useContext(AppContext)
  return (
  <div className='navbar'>
<div className='applogo'>

<span>Speedy Fork</span>
</div>
<div className='navbar_links'>
  
{ <NavLink className={"navlink"} to="/cart"  style={({ isActive }) => ({ color: isActive ? "red" : "white" })}>
    <BsFillCartFill  className='icons' />
    </NavLink>  }
{isLoggedIn ? "":<NavLink to="/login" className={"navlink"}   style={({ isActive }) => ({ color: isActive ? "red" : "white" })} >
 <VscAccount  className='icons' />
 </NavLink> }

 {isLoggedIn ? <button> Welcom {loggedInUserName} </button> :""}

 <NavLink to="/Home" className={"navlink"}  style={({ isActive }) => ({ color: isActive ? "red" : "white" })}><BiHomeSmile className='icons' /> </NavLink>  



</div>

    </div>
  )
}

export default Navbar


// import React ,{useContext}from 'react'
// import {Link, useNavigate ,NavLink} from "react-router-dom"
// import { AppContext } from '../../App'
// import "../App"





//   const {isLoggedIn , settoken ,setisLoggedIn} = useContext(AppContext)
//   const navigate =useNavigate()
//   return (
//     <div className='navbar'>
//       {isLoggedIn ? "":<NavLink to="/register"   style={({ isActive }) => ({ color: isActive ? "red" : "black" })} >Register</NavLink> }
//       {isLoggedIn ? "": <NavLink to="/login"  style={({ isActive }) => ({ color: isActive ? "red" : "black" })}>Login</NavLink>  }
//       {isLoggedIn ?  <Link to="/dashboard">Dashboard</Link> :"" }
//       {isLoggedIn ?  <Link to="/newArticle">Add New Article</Link> :"" }
//       {isLoggedIn ?  <button className='logout' onClick={()=>{ setisLoggedIn(false)
//          settoken("")

//          localStorage.setItem("token", JSON.stringify("") );
        
//          localStorage.setItem("isLoggedIn", JSON.stringify(false) );
//          navigate("/login")
//       }}><a href="">logout</a></button> :"" }

      
// {console.log("logg",isLoggedIn)}

//     </div>
//   )
// }




/***
 * 
 * <Link to="../">Back</Link>   goes up one level from /books/3 to /books
 * 
 * <Link to="edit">Edit</Link> relative link will ad /edit to the current link 
 * navigate(-1) // Go back one page in history
navigate(-3) // Go back three pages in history
navigate(1) // Go forward one page in history
 * 
 * replace=true will replace last url that you visit so if you pressed back you will no bake to it
*/