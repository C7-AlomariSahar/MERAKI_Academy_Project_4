import React, {useEffect , useState,useContext } from 'react'
import axios from 'axios'

import {SlArrowLeft} from "react-icons/sl"
import {SlArrowRight} from "react-icons/sl"
import { AppContext } from "../../App";

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

    // if(start == 0){
//     axios.get(`http://localhost:5000/menuType/MeunType/all`).then((result)=>{

// console.log("!!!!!!!!!!!!!!!!!!!!!___________!!!",result.data.meunType)
// const resltArray = result.data.meunType
// setmenuTypeNumber(resltArray.length) 
// setallmenutypesID(result.data.meunType)
// setstart(1)
// }).catch((err) => {
//     console.log("error", err.response.data.message);
//     setresult(err.response.data.message)
// })
  
    // }

   
axios.get(`http://localhost:5000/meal/Resturant/${selectedResturant}/allMenuType?skipnumber=${skipnumber}&&limitnumber=${limitnumber}`).then((result)=>{

console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^",result.data)
setmenuTypes(result.data.menutype)
}).catch((err) => {
    console.log("error", err.response.data.message);
    setresult(err.response.data.message)
})
  

}, [skipnumber])

const Menutype = menuTypes.map((menuType,i)=>{
    return (   <div key={menuType._id}  className=  {`cuisine-same `}  onClick={()=>{
       
        setfilterFunparam(menuType._id)
// const element = document.getElementById(`${menuType._id}`);
// element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }
    
    }>
    <br/>
    <span>{menuType.meunTypeName}</span>
    
    </div>)
  
  
    
    
    })

  return (
    <>
      <button className='arrow' disabled={skipnumber == 0} onClick={()=>{
        
        setskipnumber(skipnumber-10)

      }}><SlArrowLeft  size={60}/></button>
     <div className='slider' >
      
   
    { Menutype }
 
   </div>
   <button className='arrow'  disabled={skipnumber+10 >= menuTypeNumber}onClick={()=>{
        setskipnumber(skipnumber+10)
      }}  ><SlArrowRight size={60}/></button>
   </>
    )
}

export default MenuType



