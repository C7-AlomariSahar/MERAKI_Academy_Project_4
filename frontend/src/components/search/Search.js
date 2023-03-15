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
    setfilterFunparam
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
      //   theresult =  searchresult.map((meal)=>{
      //         return(
      //             <div key={meal._id} className="menu"style={{
      //                 // background:`linear-gradient(to bottom ,rgba(0,255,255,0),rgba(0,0,0,0.8)) ,url(${meal.image} ) no-repeat bottom` ,backgroundSize:"cover"
      //                 // background:`url(${meal.image} ) no-repeat bottom` ,backgroundSize:"cover"
      //             }} onClick={()=>{
      //                   console.log("_navigate _____",meal._id)
      //                 setselectedmeal(meal._id)
      //               setPopuptrigger(true)

      //               }}>

      //                 <div className="mealimg"><img src={`${meal.image}`} /></div>

      //                 <div className="mealinfo">

      //                 <h3>{meal.mealName}</h3>
      //                 <p> <span>{meal.price}</span>  </p>

      //                 </div>

      //               </div>
      //         )
      //     })

      console.log("^^^^^^^^^^^^^^meal", searchresult);
    } else {
      theresult = searchresult.map((restaurant) => {
        return (
          <div
            key={restaurant._id}
            className="restaurant"
            style={{
              background: `linear-gradient(to bottom ,rgba(0,255,255,0),rgba(0,0,0,0.8)) ,url(${restaurant.image} ) no-repeat bottom`,
              backgroundSize: "cover",
            }}
            onClick={() => {
                setfilterFunparam("")
              setselectedResturant(restaurant._id);
              navigate("/menu");
            }}
          >
            <div className="info">
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
      {searchresult.length == 0 ? (
        <p>Your choice is not found you can try our suggestion </p>
      ) : (
        <div>
          <div>{theresult}</div>
          <div>
            <h1>
              We suggeste the best for you Try this <MdOutlineFastfood />{" "}
            </h1>
          </div>{" "}
        </div>
      )}
    </div>
  );
};

export default Search;
