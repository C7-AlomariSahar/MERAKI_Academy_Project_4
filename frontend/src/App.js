import "./App.css";

import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";

import React, { useState, useEffect, createContext } from "react";
import Login from "./components/login/Login";
import Restaurants from "./components/restaurants/Restaurants";
import Register from "./components/register/Register";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";
import Meal from "./components/Meal/Meal";
import Cart from "./components/cart/Cart";

import { BsStar } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import Container from "./components/Contanier/Container";
import Scroll from "./components/scroll/Scroll";

export const AppContext = createContext();

function App() {
  window.onbeforeunload=()=> window.scrollTo(0, 0);
 
  const navigate = useNavigate();

  const [token, settoken] = useState( JSON.parse(localStorage.getItem("token")) || "");
  const [isLoggedIn, setisLoggedIn] = useState(JSON.parse(localStorage.getItem("isLoggedIn") )|| false);
  
  const [loggedInUserName, setloggedInUserName] = useState( JSON.parse(localStorage.getItem("loggedInUserName") ) || "");

  const [orderitems, setorderitems] = useState( JSON.parse(localStorage.getItem("orderitems") )||  []);
  const [loggedInUserAllData, setloggedInUserAllData] = useState(JSON.parse(localStorage.getItem("loggedInUserAllData") )||{})

  const [loggedInUserID, setloggedInUserID] = useState(JSON.parse(localStorage.getItem("loggedInUserID") )||  "");

  const [cartitemsNum, setcartitemsNum] =useState(JSON.parse(localStorage.getItem("cartitemsNum") )||  0);

  const [selectedResturant, setselectedResturant] = useState("");
  const [selectedmeal, setselectedmeal] = useState([]);
  const [Popuptrigger, setPopuptrigger] = useState(false);

  const [isCheckOut, setisCheckOut] = useState(false);

  const [finalOrdarData, setfinalOrdarData] = useState({});
  const [filtername, setfiltername] = useState("all");
  const [allmenutypesID, setallmenutypesID] = useState([]);
  const [filterFunparam, setfilterFunparam] = useState("");
  const [radioValue, setradioValue] = useState("restaurant")
  const [searchresult, setsearchresult] = useState([])
  const [keysearch ,setkeysearch] = useState("")
  const [comefromSearch, setcomefromSearch] = useState(false)
  const [mealcomefromsearch, setmealcomefromsearch] = useState("")        

  const [userData, setuserData] = useState(false)

 

  const emailRegex =  /^\S+@\S+\.\S+$/;


                            
  const add = (i, x) => {
    setorderitems(
      orderitems.map((order, index) => {
        return index == i
          ? { ...order, quntiti: Number(order.quntiti) + 1 }
          : order;
      })
    );
  };
  const sub = (i, x) => {
    if (orderitems[i].quntiti == 1) {
      setorderitems(
        orderitems.filter((order, index) => {
          return index != i;
        })
      );
    } else {
      setorderitems(
        orderitems.map((order, index) => {
          return index == i
            ? { ...order, quntiti: Number(order.quntiti) - 1 }
            : order;
        })
      );
    }
  };




  useEffect(() => {

    navigate("/home");
  }, []);

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          token,
          settoken,
          isLoggedIn,
          setisLoggedIn,
          loggedInUserName,
          setloggedInUserName,
          selectedResturant,
          setselectedResturant,
          selectedmeal,
          setselectedmeal,
          setPopuptrigger,
          Popuptrigger,
          orderitems,
          setorderitems,
          add,
          sub,
          isCheckOut,
          setisCheckOut,
          loggedInUserID,
          setloggedInUserID,
          finalOrdarData,
          setfinalOrdarData,
          filtername,
          setfiltername,
          allmenutypesID,
          setallmenutypesID,
          filterFunparam,
          setfilterFunparam,
          radioValue, setradioValue,
          searchresult, setsearchresult,
          keysearch ,setkeysearch,
          comefromSearch, setcomefromSearch,
          mealcomefromsearch, setmealcomefromsearch
          ,loggedInUserAllData, setloggedInUserAllData
          , userData, setuserData ,emailRegex ,cartitemsNum, setcartitemsNum
        }}
      >
<Container />
      </AppContext.Provider>
    </div>
  );
}

export default App;
