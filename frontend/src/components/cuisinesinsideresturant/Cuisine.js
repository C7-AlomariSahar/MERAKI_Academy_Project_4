import React, {useEffect , useState } from 'react'
import axios from 'axios'
import "./cuisine.css"
// import Slider from '../slider/Slider'

import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";


const Cuisine = () => {
    const [cuisinetnames, setcuisinetnames] = useState([])
    const [result, setresult] = useState("")
    const navigate =useNavigate();
useEffect(() => {

axios.get("http://localhost:5000/cuisine/cuisines").then((result)=>{

console.log("%%%%%%",result)
setcuisinetnames(result.data.cuisine)
}).catch((err) => {
    console.log("error", err.response.data.message);
    setresult(err.response.data.message)
})
  

}, [])

const Cuisinetype = cuisinetnames.map((cuisinetName,i)=>{
    return (   <div key={cuisinetName._id}  className=  {`cuisine-same ${cuisinetName.cuisineName}`}  onClick={()=>{navigate("/restaurants")}}>
    <br/>
    <span>{cuisinetName.cuisineName}</span>
    
    </div>)
  
  
    
    
    })

  return (
    < >
    { Cuisinetype }
    {/* <Slider slid={}/> */}
    </>
    )
}

export default Cuisine