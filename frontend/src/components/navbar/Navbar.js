
import React ,{useState,useEffect,useContext} from 'react'
import {Routes,Route,Link,NavLink , useNavigate}  from "react-router-dom"
import {BsFillCartFill} from "react-icons/bs"
import {VscAccount} from "react-icons/vsc"
import {BiHomeSmile} from "react-icons/bi"
import {GiKnifeFork} from "react-icons/gi"
import {AiOutlineMenu} from "react-icons/ai"
import{FaRegWindowClose} from "react-icons/fa"
import {BiSearchAlt} from "react-icons/bi"
import {TbUserCheck}from "react-icons/tb"

import "./navbar.css"

 import { AppContext } from "../../App";
import axios from 'axios'
import UserPanel from '../userloggedinpanel/UserPanel'


const Navbar = () => {
  const navigate = useNavigate();

 const [click, setclick] = useState(false)
const [validation, setvalidation] = useState(false)
const [searsch, setsearsch] = useState(true)

 const clickfun =()=>setclick(!click)
 const userDatafun =()=>setuserData(!userData)

  const {token , settoken ,isLoggedIn, setisLoggedIn ,loggedInUserName,
     setloggedInUserName , radioValue, setradioValue ,searchresult, setsearchresult ,cartitemsNum, setcartitemsNum
   , keysearch ,setkeysearch ,userData, setuserData,orderitems} =useContext(AppContext)
  
  // const searchFun = ()=>{
   
useEffect(() => {

    console.log("setradioValue+++++++++++++++++++++++++++++++",radioValue)
      if(radioValue == "meal"){
        axios.get(`http://localhost:5000/meal/search/${keysearch}`)
        .then(( result )=>{ 
           setsearchresult(result.data.meal)
           console.log("+++++++++++++++meal++++++++++++++++",result.data.meal);
           navigate("/search")
          }).then(()=>{
            navigate("/search")}).catch((err)=>{
              console.log("error", err.response.data.message);
          })

        }else{
          axios.get(`http://localhost:5000/restaurant/search/${keysearch}`)
          .then(( result )=>{ 
             setsearchresult(result.data.resturant)
             console.log("++++++++++++++++++ resturant +++++++++++++",result.data.resturant);
             
            }).then(()=>{
              navigate("/search")
            }).catch((err)=>{
                console.log("error", err.response.data.message);
            })
  
          }

    
}, [searsch ,radioValue])

  // }
  
  
  
  
  
  return (
  <div className='navbar'>
<div className='applogo'>

 <span ><GiKnifeFork className='forklogo'/></span><span  className='fork'>Speedy</span><span>Fork</span>
</div>

<div className= { validation ?'inputsearcherror search' :'search'}>
  <div className='inputsearch' >
    <input type={"text"} onChange={(e)=>{
      setkeysearch(e.target.value)
      
    }} placeholder="Enter Keyword..."/>

  </div>
<div className='radiosearch'>
  <input type="radio"  onClick={()=>{
  if(keysearch != ""){
    setvalidation(false)
    // searchFun()
    setsearchresult("")
    setsearsch(!searsch)
    setradioValue("restaurant")
  }else{
    setvalidation(true)

  }
  
 
   
  
  }} name='search' defaultChecked value={"restaurant"}/>
  <label>Restaurant</label>
  <input type="radio" name='search'  onClick={()=>{
    
    if(keysearch != ""){
      setvalidation(false)
      // searchFun()
      setsearchresult("")
      setsearsch(!searsch)
      setradioValue("meal")
    }else{
      setvalidation(true)
    
    }
   
  
   
  }}   value={"meal"} />
  <label>Meal</label>
<button onClick={()=>{
   if(keysearch != ""){
    setvalidation(false)
    // searchFun()
    setsearsch(!searsch)
  }else{
    setvalidation(true)
  }



}}><BiSearchAlt/></button>
</div>
</div>
<div className='navbar_links-outer' > 
<div  className={click ?' navbar_links active':'navbar_links'}>
  

<NavLink to="/Home" className={"navlink"}  onClick= {()=>{setclick(false)}}  style={({ isActive }) => ({ color: isActive ? "green" : "white" })}><BiHomeSmile className='icons' /> </NavLink>  


<span className='cart-icon'>

{ <NavLink className={"navlink"} to="/cart"  onClick= {()=>{
  setclick(false)

}} style={({ isActive }) => ({ color: isActive ? "green" : "white" })}>
 <BsFillCartFill  className='icons ' /> 
    </NavLink>  }
    <span className='cart-icon-count' >{cartitemsNum}</span>
    </span>

{isLoggedIn ? "":<NavLink   to="/login" className={"navlink"}  onClick= {(e)=>{
  

    setclick(false)
  
  }}   style={({ isActive }) => ({ color: isActive ? "green" : "white" })} >
 <VscAccount  className='icons' />
 </NavLink> }

 {isLoggedIn ? <button className='afterlogin-but' onClick= {()=>{
  
  setclick(false)
  userDatafun() //to show user panel
  
  
  }}  >< TbUserCheck className='after-login-icon'/> {loggedInUserName} </button> :""}

<div   className=  {userData ?'userData activeuserData':'userData'}>

<UserPanel/>


</div>

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