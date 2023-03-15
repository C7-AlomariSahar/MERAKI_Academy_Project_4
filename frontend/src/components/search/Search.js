import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { AppContext } from "../../App";
import { MdOutlineFastfood } from "react-icons/md";
import "./search.css";

const Search = () => {
  const {
    token,
    settoken,
    isLoggedIn,
    setisLoggedIn,
    loggedInUserName,
    setloggedInUserName,
    radioValue,
    setradioValue,
    searchresult,
    setsearchresult,
    keysearch,
    setkeysearch,
    setselectedResturant,
    setfilterFunparam ,
    comefromSearch,
    setcomefromSearch,
    setmealcomefromsearch
  } = useContext(AppContext);

  const navigate = useNavigate();

  let theresult;

  console.log("^^^^^^^^^^^^^^search", searchresult);
  console.log("^^^^^^^^^^^^^^search", searchresult.length);
  console.log("^^^^^^^^^^^^^^search", searchresult.length == 0);
  console.log("^^^^^^^^^^^^^^search", keysearch);
  console.log("^^^^^^^^^^^^^^search", radioValue);

  if (searchresult.length != 0) {
    if (radioValue == "meal") {
        theresult =  searchresult.map((meal)=>{
              return(
                  <div key={meal._id} className="restauranttonediv"style={{
                      // background:`linear-gradient(to bottom ,rgba(0,255,255,0),rgba(0,0,0,0.8)) ,url(${meal.image} ) no-repeat bottom` ,backgroundSize:"cover"
                    
                    //   background: `url(${meal.image}} ) no-repeat bottom`,
                    //   backgroundSize: "cover",
          background:`url(${meal.image} ) no-repeat center` ,backgroundSize:"contain cover"
                  }} onClick={()=>{
                        console.log("_navigate _____",meal._id)
                        setcomefromSearch(true)
                        setfilterFunparam("")
                        setmealcomefromsearch(meal._id)
                        setselectedResturant(meal.resturantId._id);
                        console.log("======================",meal.resturantId._id)
                        navigate("/menu");
                    }}>

                      {/* <div className="mealimg"><img src={`${meal.image}`} /></div> */}

                      <div className="infotopresult">

                      <h3>{meal.mealName}</h3>
                      <p> <span>{meal.price}</span>  </p>

                      </div>

                    </div>
              )
          })

      console.log("^^^^^^^^^^^^^^meal", searchresult);
    } else {
      theresult = searchresult.map((restaurant) => {
        return (
          <div
            key={restaurant._id}
            className="restauranttonediv"
            style={{
              background: `url(${restaurant.image} ) no-repeat bottom`,
              backgroundSize: "cover",

            }}
            onClick={() => {
                setfilterFunparam("")
              setselectedResturant(restaurant._id);
              navigate("/menu");
             
            }}
          >
            <div className="infotopresult">
              <h3>{restaurant.resturantName}</h3>
              <p>
                {restaurant.cuisine.cuisineName} <span>{restaurant.rate}</span>{" "}
              </p>
            </div>
          </div>
        );
      });

      console.log("^^^^^^^^^^^^^^^^resturant", searchresult);
    }
  }

  return (
    <div className="search-main">
      {searchresult.length == 0 ? 
        <p>Your choice is not found you can try our suggestion <MdOutlineFastfood /></p>
      : 
        <div>
          <div  className="result-div">{theresult}</div>
          <div>
            <h1>
              We suggeste the best for you Try this <MdOutlineFastfood />
            </h1>
            <div>
                
                
           </div>
          </div>
        </div>
        
        }
   </div>
    
  );
};

export default Search;
