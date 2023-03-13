import React ,{useState ,useEffect,useContext} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../../App'
import { AppContext } from '../../App'

import "./register.css"

const Register = () => {

const {token , settoken ,isLoggedIn, setisLoggedIn ,loggedInUserName, setloggedInUserName} =useContext(AppContext)

const [color, setcolor] = useState("grey")
const role ="6404c1347a1a16e002d52192"

   const navigate = useNavigate();

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
            
            axios
            .post("http://localhost:5000/user/login", { email ,password  })
            .then((resultdata) => {
                console.log("login_________________", resultdata.data.message);
                settoken( resultdata.data.token)
                setloggedInUserName(resultdata.data.user[0].UserName)
                setisLoggedIn(true)
                setresult(resultdata.data.message)
                
            }).then(()=>{navigate("/home")})
            .catch((err) => {
                console.log("error", err.response.data.message);
                setresult(err.response.data.message)
            });



          
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
    <div className="loginregister">
    <div className='register'>
    <h1>Register</h1>
   <input  type="text" placeholder='First Name' onChange={(e)=>{setfirstName(e.target.value)}}/><br/><br/>
   <input  type="text" placeholder='Last Name' onChange={(e)=>{setLastName(e.target.value)}}/><br/><br/>
   <input  type="text" placeholder='User Name' onChange={(e)=>{setUserName(e.target.value)}}/><br/><br/>
   
   <input type="number" placeholder='PhoneNumber' onChange={(e)=>{setphoneNumber(e.target.value)}}/><br/>
   <br/>
    <input  type="email" placeholder='Email'onChange={(e)=>{ setemail(e.target.value)}} /><br/><br/>
    <input type="password" placeholder='password'onChange={(e)=>{setpassword(e.target.value)}} /><br/><br/>
  
    <input type="text" placeholder='City' onChange={(e)=>{setcity(e.target.value)}}/><br/><br/>
    <input  type="text" placeholder='building' onChange={(e)=>{setbuilding(e.target.value)}}/><br/><br/>
   <input  type="text" placeholder='Street' onChange={(e)=>{setstreet(e.target.value)}}/><br/><br/>
   <input type="number" placeholder='flat Number' onChange={(e)=>{setflatNumber(e.target.value)}}/><br/>
   
   <br/>
<button className='register-button' onClick={RegisterFun}>Register</button><br/>



    </div>


    <div className="changeLoginRegister">
        <div>   
        <h3> Already An Account Holder</h3>             
        <button onClick={()=>{
            navigate("/login")
        }} > Login  </button> 
        <p><span>*
Terms & conditions.</span>
Your privacy and security are important to us. For more information on how we use your data read ourprivacy policy</p>
      </div>
       
    </div>
    </div>
  )
}

export default  Register 
