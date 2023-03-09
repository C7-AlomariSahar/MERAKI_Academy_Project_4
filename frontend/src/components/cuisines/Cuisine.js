import React, {useEffect , useState } from 'react'
import axios from 'axios'
const Cuisine = () => {
    const [cuisinetnames, setcuisinetnames] = useState([])
    const [result, setresult] = useState("")

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
    return (   <div key={cuisinetName._id} >
    
    <span>{cuisinetName.cuisineName}</span>
    
    </div>)
  
  
    
    
    })

  return (
    <>
    { Cuisinetype }
    </>
    )
}

export default Cuisine