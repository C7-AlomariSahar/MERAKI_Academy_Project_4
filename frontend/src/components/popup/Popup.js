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
      <button onClick={()=>{
        setPopuptrigger(false)
      }}>X</button>
       <Meal/>       
 
   </div>

    </div>
  )
}

export default Popup