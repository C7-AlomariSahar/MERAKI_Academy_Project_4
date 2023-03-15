
import React ,{useState ,useEffect,useContext} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { AppContext } from '../../App'
import {MdOutlineFastfood} from "react-icons/md"
import "./search.css"




const Search = () => {
 


  const {token , settoken ,isLoggedIn, setisLoggedIn ,loggedInUserName,
  setloggedInUserName , radioValue, setradioValue ,searchresult, setsearchresult,
  keysearch ,setkeysearch} =useContext(AppContext)

  const navigate = useNavigate();


  console.log("^^^^^^^^^^^^^^search", searchresult)
  console.log("^^^^^^^^^^^^^^search",  searchresult.length)
  console.log("^^^^^^^^^^^^^^search", searchresult.length == 0 )
  console.log("^^^^^^^^^^^^^^search", keysearch)
  console.log("^^^^^^^^^^^^^^search", radioValue)

  if( searchresult.length == 0 ){
      <p>Your choice is not found you can try our suggestion </p>
  }else{
    
    if(radioValue == "meal"){

 
console.log("^^^^^^^^^^^^^^meal", searchresult)
    }else{
        console.log("^^^^^^^^^^^^^^^^resturant", searchresult)
    }
  


  }
  

  return (
    <div className='search-main'>
        <div></div>

    <div>
    <h1>We suggeste the best for you Try this <MdOutlineFastfood /> </h1>
    
    
     </div>
    </div>
  )
}

export default Search