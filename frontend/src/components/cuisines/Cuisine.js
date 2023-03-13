import React, {useEffect , useState,useContext  ,useRef} from 'react'
import axios from 'axios'
import "./cuisine.css"
import {SlArrowLeft} from "react-icons/sl"
import {SlArrowRight} from "react-icons/sl"
import { AppContext } from "../../App";

import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";



 

const Cuisine = () => {
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    const [cuisinetnames, setcuisinetnames] = useState([])
    const [result, setresult] = useState("")
    const [skipnumber, setskipnumber] = useState(0)
    const [limitnumber, setlimitnumber] = useState((windowSize.current[0]<= 600)? 2: 10  )
    const [cisuinNumber, setcisuinNumber] = useState(0)
    const [start, setstart] = useState(0)
    const navigate =useNavigate();
    const {  filtername, setfiltername  } =useContext(AppContext)

    
useEffect(() => {
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",windowSize)
    if(start == 0){
    axios.get(`http://localhost:5000/cuisine/cuisines/all`).then((result)=>{

console.log("%%%%%%",result)
const resltArray = result.data.cuisine
setcisuinNumber(resltArray.length) 
setstart(1)
}).catch((err) => {
    console.log("error", err.response.data.message);
    setresult(err.response.data.message)
})
  
    }


axios.get(`http://localhost:5000/cuisine/cuisines?skipnumber=${skipnumber}&&limitnumber=${limitnumber}`).then((result)=>{

console.log("%%%%%%",result)
setcuisinetnames(result.data.cuisine)
}).catch((err) => {
    console.log("error", err.response.data.message);
    setresult(err.response.data.message)
})
  

}, [skipnumber])

const Cuisinetype = cuisinetnames.map((cuisinetName,i)=>{
    return (   <div key={cuisinetName._id}  className=  {`cuisine-same ${cuisinetName.cuisineName}`}  onClick={()=>{
       
        navigate("/restaurants")
     
        setfiltername(`${cuisinetName._id}`)
        
    }
    
    }>
    <br/>
    <span>{cuisinetName.cuisineName}</span>
    
    </div>)
  
  
    
    
    })

  return (
    <>
      <button className='arrow' disabled={skipnumber == 0} onClick={()=>{
        
        setskipnumber(skipnumber-10)

      }}><SlArrowLeft  size={60}/></button>
     <div className='slider' >
      
     <div className="cuisine-same"  onClick={()=>{
       
       navigate("/restaurants")
    
       setfiltername(`All Restaurants`)
       
   }
   
   }>
   <br/>
   <span>All Restaurants</span>
   
   </div>
    { Cuisinetype }
 
   </div>
   <button className='arrow'  disabled={skipnumber+limitnumber >= cisuinNumber}onClick={()=>{
        setskipnumber(skipnumber+10)
      }}  ><SlArrowRight size={60}/></button>
   </>
    )
}

export default Cuisine