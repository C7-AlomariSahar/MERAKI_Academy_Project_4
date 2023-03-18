import React ,{useContext} from 'react'
import Meal from '../Meal/Meal'
import "./Popup.css"
import { AppContext } from '../../App'
import { useNavigate } from 'react-router-dom'
import {BsFillCartCheckFill} from "react-icons/bs"
import CheckOut from '../checkout/CheckOut'
const Popup = () => {
 const{setPopuptrigger , isCheckOut, setisCheckOut ,setloggedInUserName,  setcomefromSearch, setorderitems } =useContext(AppContext)
    const navigate  = useNavigate();
  return (
    <div className='outer-popup'>
    <div className='inner-popup'>
      <div className='button'><button className='close' onClick={()=>{
       if(isCheckOut){
        setPopuptrigger(false)
        navigate("/home")
        setorderitems([])
       } else{
        setPopuptrigger(false)
        setcomefromSearch(false)
       }

      }}>X</button></div>
     { !isCheckOut  && <Meal/>       }
     { isCheckOut  &&  <CheckOut/>}
   </div>

    </div>
  )
}

export default Popup