
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
import axios from 'axios'


const Navbar = () => {

  const [radioValue, setradioValue] = useState("restaurant")
 const [click, setclick] = useState(false)
 const [searchresult, setsearchresult] = useState([])
 const clickfun =()=>setclick(!click)
  const {token , settoken ,isLoggedIn, setisLoggedIn ,loggedInUserName, setloggedInUserName} =useContext(AppContext)
  
  const searchFun = ()=>{


    console.log("setradioValue+++++++++++++++++++++++++++++++",radioValue)
      if(radioValue == "meal"){
        axios.get(`http://localhost:5000/meal/search/${radioValue}`)
        .then(( result )=>{ 
           setsearchresult(result.data.meal)
           console.log("+++++++++++++++meal++++++++++++++++",result.data.meal);
          }).catch((err)=>{
              console.log("error", err.response.data.message);
          })

        }else{
          axios.get(`http://localhost:5000/restaurant/search/${radioValue}`)
          .then(( result )=>{ 
             setsearchresult(result.data.resturant)
             console.log("++++++++++++++++++ resturant +++++++++++++",result.data.resturant);
            }).catch((err)=>{
                console.log("error", err.response.data.message);
            })
  
          }

  }
  
  
  
  
  
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
  <input type="radio"  onClick={()=>{
    setradioValue("restaurant")
  }} name='search' defaultChecked value={"restaurant"}/>
  <label>Restaurant</label>
  <input type="radio" name='search'  onClick={()=>{
    setradioValue("meal")
  }}   value={"meal"} />
  <label>Meal</label>
<button onClick={()=>{
searchFun()


}}><BiSearchAlt/></button>
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