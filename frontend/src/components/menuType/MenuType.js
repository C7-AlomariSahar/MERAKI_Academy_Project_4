import React, {useEffect , useState,useContext } from 'react'
import axios from 'axios'

import {SlArrowLeft} from "react-icons/sl"
import {SlArrowRight} from "react-icons/sl"
import { AppContext } from "../../App";
import "./menuType.css"
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";


const MenuType = () => {
    const [menuTypes, setmenuTypes] = useState([])
    const [result, setresult] = useState("")
    const [skipnumber, setskipnumber] = useState(0)
    const [limitnumber, setlimitnumber] = useState(10)
    const [menuTypeNumber, setmenuTypeNumber] = useState(0)
    const [start, setstart] = useState(0)


    const navigate =useNavigate();
    const {  filtername, setfiltername ,setallmenutypesID  ,filterFunparam, setfilterFunparam ,selectedResturant} =useContext(AppContext)

  
useEffect(() => {

    if(start == 0){
    axios.get(`http://localhost:5000/menuType/MeunType/all`).then((result)=>{

console.log("!!!!!!!!!!!!!!!!!!!!!___________!!!",result.data.meunType)
const resltArray = result.data.meunType
setmenuTypeNumber(resltArray.length) 
setallmenutypesID(result.data.meunType)
setstart(1)
}).catch((err) => {
    console.log("error", err.response.data.message);
    setresult(err.response.data.message)
})
  
    }

   
axios.get(`http://localhost:5000/meal/Resturant/${selectedResturant}/allMenuType?skipnumber=${skipnumber}&&limitnumber=${limitnumber}`).then((result)=>{

console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^",result.data)
setmenuTypes(result.data.menutype)
}).catch((err) => {
    console.log("error", err.response.data.message);
    setresult(err.response.data.message)
})
  

}, [skipnumber])

const Menutype = menuTypes.map((menuType,i)=>{
    return (   <div key={menuType._id}  className=  {`menu-same `}  onClick={()=>{
       
        setfilterFunparam(menuType._id)

    }
    
    }>
    <br/>
    <span>{menuType.meunTypeName}</span>
    
    </div>)
  
  
    
    
    })

  return (
    <div className='mainSlider'>
      <button className='arrowmenu' disabled={skipnumber == 0} onClick={()=>{
        
        setskipnumber(skipnumber-limitnumber)

      }}><SlArrowLeft  size={60}/></button>
     <div className='slider-menu-type' >
      
     <div className="menu-same"  onClick={()=>{
       
      
    
       setfilterFunparam("")
       
   }
   
   }>
   <br/>
   <span>All </span>
   </div>
    { Menutype }
 
   </div>
   <button className='arrowmenu'  disabled={skipnumber+limitnumber >= menuTypeNumber}onClick={()=>{
        setskipnumber(skipnumber+limitnumber)
      }}  ><SlArrowRight size={60}/></button>
   </div>
    )
}

export default MenuType



// const element = document.getElementById(`${menuType._id}`);
// element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });