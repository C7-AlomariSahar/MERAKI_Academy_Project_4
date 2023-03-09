

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


export const AppContext = createContext()


function App() {

  const navigate =useNavigate();

  const [token, settoken] = useState("")
  const [loggedInUserName, setloggedInUserName] = useState("")
const [isLoggedIn, setisLoggedIn] = useState(false)
const [selectedResturant, setselectedResturant] = useState("")
const [selectedmeal, setselectedmeal] = useState([])
const [Popuptrigger, setPopuptrigger] = useState(false)
useEffect(() => {
  
navigate("/home")
 
}, [])


  return (
    <div className="App">
      <AppContext.Provider value={{token , settoken ,isLoggedIn, setisLoggedIn , loggedInUserName, setloggedInUserName , selectedResturant, setselectedResturant ,selectedmeal, setselectedmeal ,setPopuptrigger ,Popuptrigger}}>
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
       {/* <Route path="/meal" element={<Meal/>}></Route> */}
       
      </Routes>
 </div>

      <div className="footer">


      </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
