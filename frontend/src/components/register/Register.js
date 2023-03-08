import React ,{useState ,useEffect,useContext} from 'react'
import axios from 'axios'
import '../../App'
import { AppContext } from '../../App'
const Register = () => {
const {token , settoken ,isLoggedIn, setisLoggedIn} =useContext(AppContext)
const [color, setcolor] = useState("grey")
const role ="6404c1347a1a16e002d52192"

    const RegisterFun =()=>{
   

         

        axios.post("http://localhost:5000/user/register",{firstName,
        LastName,
        UserName,
        email,
        password,
        phoneNumber,
        city,
        building,
        street,
        flatNumber,
        role,}).then((dataRes)=>{
            // setresult()
            setresult(dataRes.data.message)
          console.log("!!!!!!!!!!!!!!!!!",dataRes)
            setcolor("blue")
        }).catch((error)=>{
            
            setresult(error.response.data.message)})
          
            setcolor("red")


    }
const [result, setresult] = useState("")
const [firstName, setfirstName] = useState("")
const [LastName, setLastName] = useState("")
const [UserName, setUserName] = useState("")
const [phoneNumber, setphoneNumber] = useState(0)
const [building, setbuilding] = useState("")
const [street, setstreet] = useState("")
const [flatNumber, setflatNumber] = useState(0)
const [email, setemail] = useState("")
const [city, setcity] = useState("")
const [password, setpassword] = useState("")

  return (
    <div className='register'>
    <h1>Register</h1>
   <input  type="text" placeholder='First Name' onChange={(e)=>{setfirstName(e.target.value)}}/><br/><br/>
   <input  type="text" placeholder='Last Name' onChange={(e)=>{setLastName(e.target.value)}}/><br/><br/>
   <input  type="text" placeholder='User Name' onChange={(e)=>{setUserName(e.target.value)}}/><br/><br/>
   
   <input type="number" placeholder='PhoneNumber' onChange={(e)=>{setphoneNumber(e.target.value)}}/><br/>
   <br/>
    <input  type="email" placeholder='Email'onChange={(e)=>{ setemail(e.target.value)}} /><br/><br/>
    <input type="password" placeholder='password'onChange={(e)=>{setpassword(e.target.value)}} /><br/><br/><br/>
  
    <input type="text" placeholder='City' onChange={(e)=>{setcity(e.target.value)}}/><br/><br/>
    <input  type="text" placeholder='building' onChange={(e)=>{setbuilding(e.target.value)}}/><br/><br/>
   <input  type="text" placeholder='Street' onChange={(e)=>{setstreet(e.target.value)}}/><br/><br/>
   <input type="number" placeholder='flat Number' onChange={(e)=>{setflatNumber(e.target.value)}}/><br/>
   
    
<button className='register-button' onClick={RegisterFun}>Register</button><br/><br/><br/>
<input style={{"color": color  }}className='message' type="text" value={result} disabled /><br/>


    </div>
  )
}

export default  Register 
