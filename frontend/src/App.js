

import "./App.css";

import {Routes, Route, Link, useParams, useNavigate} from "react-router-dom"

import React ,{ useState , createContext} from "react";
import Login from "./components/login/Login";
import Restaurants from "./components/restaurants/Restaurants"
import Register from "./components/register/Register";
import Navbar from "./components/navbar/Navbar";
export const AppContext = createContext()


function App() {
  const [token, settoken] = useState("")
const [isLoggedIn, setisLoggedIn] = useState(false)
  return (
    <div className="App">
      <AppContext.Provider value={{token , settoken ,isLoggedIn, setisLoggedIn}}>
    <div className="navbar">
   
    <Navbar />
     </div>

     <div className="main">
        <Routes>
      
      
        <Route  path="/login" element={  <Login /> }></Route>
        <Route  path="/register" element={  <Register /> }></Route>
        {/* <Route  path="/home " element={  <Home /> }></Route> */}
        <Route  path="/restaurants" element={  <Restaurants/> }></Route>
      
        
       
      </Routes>
 </div>

      <div className="footer">

      </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
