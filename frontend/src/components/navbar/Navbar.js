
import React ,{useState,useEffect,useContext} from 'react'
import {Routes,Route,Link,NavLink} from "react-router-dom"
import {BsFillCartFill} from "react-icons/bs"
import {VscAccount} from "react-icons/vsc"
import {BiHomeSmile} from "react-icons/bi"
import {GiKnifeFork} from "react-icons/gi"
import {AiOutlineMenu} from "react-icons/ai"
import{FaRegWindowClose} from "react-icons/fa"
import {BiSearchAlt} from "react-icons/bi"


import "./navbar.css"

 import { AppContext } from "../../App";

const Navbar = () => {
 const [click, setclick] = useState(false)
 const clickfun =()=>setclick(!click)
  const {token , settoken ,isLoggedIn, setisLoggedIn ,loggedInUserName, setloggedInUserName} =useContext(AppContext)
  return (
  <div className='navbar'>
<div className='applogo'>

 <span ><GiKnifeFork className='forklogo'/></span><span  className='fork'>Speedy</span><span>Fork</span>
</div>

<div className='search'>
  <div className='inputsearch'>
    <input type={"text"} placeholder="Enter Keyword..."/>

  </div>
<div className='radiosearch'>
  <input type="radio" name='search' checked value={"restaurant"}/>
  <label>Restaurant</label>
  <input type="radio" name='search'  value={"meal"} />
  <label>Meal</label>
<button><BiSearchAlt/></button>
</div>
</div>
<div className='navbar_links-outer' > 
<div  className={click ?' navbar_links active':'navbar_links'}>
  

<NavLink to="/Home" className={"navlink"}  onClick= {clickfun}  style={({ isActive }) => ({ color: isActive ? "green" : "white" })}><BiHomeSmile className='icons' /> </NavLink>  

{ <NavLink className={"navlink"} to="/cart" onClick= {clickfun} style={({ isActive }) => ({ color: isActive ? "green" : "white" })}>
    <BsFillCartFill  className='icons' />
    </NavLink>  }
{isLoggedIn ? "":<NavLink to="/login" className={"navlink"}  onClick= {clickfun}  style={({ isActive }) => ({ color: isActive ? "green" : "white" })} >
 <VscAccount  className='icons' />
 </NavLink> }

 {isLoggedIn ? <button onClick= {clickfun}  > Welcom {loggedInUserName} </button> :""}



</div>
<div onClick= {clickfun}  className='nav-bar-small-screen'>{ !click ?<  AiOutlineMenu  /> :< FaRegWindowClose/>} </div>
</div>
    </div>
  )
}

export default Navbar



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