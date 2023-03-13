

import "./App.css";

import {Routes, Route, Link, useParams, useNavigate} from "react-router-dom"

import React ,{ useState ,useEffect, createContext} from "react";
import Login from "./components/login/Login";
import Restaurants from "./components/restaurants/Restaurants"
import Register from "./components/register/Register";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home"
import Menu from "./components/menu/Menu";
import Meal from "./components/Meal/Meal";
import Cart from "./components/cart/Cart";
import {BsWhatsapp} from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"
import {BsYoutube} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {BsPinterest} from "react-icons/bs"







export const AppContext = createContext()


function App() {

  const navigate =useNavigate();

  const [token, settoken] = useState("")
  const [loggedInUserName, setloggedInUserName] = useState("")
const [isLoggedIn, setisLoggedIn] = useState(false)
const [selectedResturant, setselectedResturant] = useState("")
const [selectedmeal, setselectedmeal] = useState([])
const [Popuptrigger, setPopuptrigger] = useState(false)
const [orderitems, setorderitems] = useState([])
const [isCheckOut, setisCheckOut] = useState(false)
const [loggedInUserID, setloggedInUserID] = useState("")
const [finalOrdarData, setfinalOrdarData] = useState({})
const [filtername, setfiltername] = useState("all")
const [allmenutypesID, setallmenutypesID] = useState([])
const [filterFunparam, setfilterFunparam] = useState("")

const add =(i,x)=>{
  setorderitems(orderitems.map((order,index)=>{
     return index == i ?  {...order , quntiti:Number(order.quntiti)+1} : order

  }) )
 
}
const sub= (i,x)=>{
 
  if( orderitems[i].quntiti == 1 ){
    setorderitems( orderitems.filter((order,index)=>{
      return index != i  }))
  }else{
  setorderitems(orderitems.map((order,index)=>{
    return index == i  ?  {...order , quntiti:Number(order.quntiti)-1} : order
   
 }))}
 
}
useEffect(() => {
  
navigate("/home")
 
}, [])


  return (
    <div className="App">
      <AppContext.Provider value={{token , settoken ,isLoggedIn, setisLoggedIn , loggedInUserName, setloggedInUserName , selectedResturant, setselectedResturant ,selectedmeal, setselectedmeal ,setPopuptrigger ,Popuptrigger,orderitems, setorderitems ,add, sub , isCheckOut, setisCheckOut ,loggedInUserID ,setloggedInUserID , finalOrdarData, setfinalOrdarData ,filtername, setfiltername,allmenutypesID, setallmenutypesID , filterFunparam, setfilterFunparam}}>
    <div className="navbar">

    <Navbar />

        </div>

     <div className="main">
   
    
        <Routes>
      
      
        <Route  path="/home" element={<Home /> }></Route>
             <Route  path="/restaurants" element={  <Restaurants/> }></Route>
              <Route  path="/login" element={  <Login /> }></Route>
       <Route  path="/register" element={  <Register /> }></Route>
       <Route  path="/restaurants" element={  <Restaurants /> }></Route>
       <Route path="/menu" element={<Menu />}></Route>
       <Route path="/cart" element={<Cart />}></Route>
       
      </Routes>
 </div>

      <div className="footer">
         <div>
               <div></div>
               <div></div>
               <div></div>
        </div>
                <div  className="footer-navbar"> 
 <div className="social-icon">
 <div><a href="https://www.whatsapp.com"><BsWhatsapp className="icon"/></a></div>       
    
 <div><a href="https://web.facebook.com"><BsFacebook className="icon"/></a></div>       
       
 <div><a href="https://twitter.com"><BsTwitter className="icon" /></a></div>       
  
   <div><a href="https://www.instagram.com"><BsInstagram className="icon"/></a></div>       
    
 <div><a href="https://pinterest.com"><BsPinterest className="icon"/></a></div>       
    
 <div><a href="https://www.youtube.com"><BsYoutube className="icon" /></a></div>         
</div>
                  
                  
                  
                  </div> 



     </div>

 
        
    
   
    

     
       
      </AppContext.Provider>
    </div>
  );
}

export default App;
