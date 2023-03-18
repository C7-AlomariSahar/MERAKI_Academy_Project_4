import React, {useEffect , useState,useContext ,useRef } from 'react'
import axios from 'axios'

import {SlArrowLeft} from "react-icons/sl"
import {SlArrowRight} from "react-icons/sl"
import { AppContext } from "../../App";
import "./menuType.css"
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";


const MenuType = () => {
    const windowSize = useRef([window.innerWidth, window.innerHeight]);

    const [menuTypes, setmenuTypes] = useState([])
    const [result, setresult] = useState("")
    const [skipnumber, setskipnumber] = useState(0)
    // const [limitnumber, setlimitnumber] = useState(10)
    const [limitnumber, setlimitnumber] = useState((windowSize.current[0]<= 600)? 2: 10  )
    const [menuTypeNumber, setmenuTypeNumber] = useState(0)
    const [start, setstart] = useState(0)


    const navigate =useNavigate();
    const {  filtername, setfiltername ,setallmenutypesID  ,filterFunparam, setfilterFunparam ,selectedResturant} =useContext(AppContext)
   
    window.addEventListener("resize",(e)=>{
        setlimitnumber( window.innerWidth > 600 ?  window.innerWidth > 940 ? 10:5:2 )
        
    })
  
useEffect(() => {

    if(start == 0){
    axios.get(`http://localhost:5000/menuType/MeunType/all`).then((result)=>{

console.log("!!!!!!!!!!!!!!!!!!!!!___________!!!",result.data.meunType)


setallmenutypesID(result.data.meunType)
setstart(1)
}).catch((err) => {
    console.log("error", err.response.data.message);
    setresult(err.response.data.message)
})
  
    }

   
axios.get(`http://localhost:5000/meal/Resturant/${selectedResturant}/allMenuType?skipnumber=${skipnumber}&&limitnumber=${limitnumber}`).then((result)=>{

console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^",result.data)
const resltArray = result.data.meunType
setmenuTypes(result.data.menutype)
setmenuTypeNumber(resltArray.length) 
}).catch((err) => {
    console.log("error", err.response.data.message);
    setresult(err.response.data.message)
})
  

}, [skipnumber,limitnumber])

const Menutype = menuTypes.map((menuType,i)=>{
    return ( 
        
        <div key={menuType._id}  className=  {`menu-same `}  onClick={()=>{
       
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