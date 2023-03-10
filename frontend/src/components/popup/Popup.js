import React ,{useContext} from 'react'
import Meal from '../Meal/Meal'
import "./Popup.css"
import { AppContext } from '../../App'
import { useNavigate } from 'react-router-dom'

const Popup = () => {
 const{setPopuptrigger} =useContext(AppContext)
    const navigate  = useNavigate();
  return (
    <div className='outer-popup'>
    <div className='inner-popup'>
      <div className='button'><button className='close' onClick={()=>{
        setPopuptrigger(false)
      }}>X</button></div>
       <Meal/>       
 
   </div>

    </div>
  )
}

export default Popup