import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../App";

import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";

import axios from "axios";

const Login = () => {

    const {token , settoken ,isLoggedIn, setisLoggedIn} =useContext(AppContext)
    const [password, setpassword] = useState("");
    const [email, setemail] = useState("");
    const [result, setresult] = useState("");

    const loginFun = () => {
        axios
            .post("http://localhost:5000/user/login", { email, password })
            .then((resultdata) => {
                console.log("login_________________", resultdata.data.message);
                settoken( resultdata.data.token)
                setisLoggedIn(true)
                setresult(resultdata.data.message)
            })
            .catch((err) => {
                console.log("error", err.response.data.message);
                setresult(err.response.data.message)
            });
    };

    return (
        <div className="login-div">
            <input
                type="email"
                placeholder="email"
                onChange={(e) => {
                    setemail(e.target.value);
                }}
            />
            <br />
            <br />
            <input
                type="password"
                placeholder="enter your email"
                onChange={(e) => {
                    setpassword(e.target.value);
                }}
            ></input>
            <br />
            <br />
            <button
                onClick={() => {
                    loginFun();
                }}
            >
                Login
            </button> <br />
            <br />
            <input
                style={{ color: "red" }}
                className="message"
                type="text"
                value={result}
                disabled
            />
            <br />
        </div>
    );
};

//   const {setisLoggedIn , settoken,token } = useContext(AppContext)
//   const navigate =useNavigate();
// // const role ="63fd11d301bd903c3518a069"
// const [color, setcolor] = useState("grey")

//     const RegisterFun =()=>{

//         axios.post("http://localhost:5000/users/login",{email, password}).then((dataRes)=>{
//             // setresult()
//             setresult(dataRes.data.message)
//             settoken(dataRes.data.token)
//             localStorage.setItem("token", JSON.stringify(dataRes.data.token) );
//             setisLoggedIn(true)
//             localStorage.setItem("isLoggedIn", JSON.stringify(true) );

//             setcolor("blue")
//             navigate("/dashboard")
//             console.log("token^^^^^^^^^^^^^^^^",token)
//         }).catch((error)=>{

//             setresult(error.response.data.message)})

//             setcolor("red")

//     }
// const [result, setresult] = useState("")
// const [email, setemail] = useState("")
// const [password, setpassword] = useState("")

//   return (
//     <div className='login'>
//     <h1>Login</h1>

//     <input  type="email" placeholder='email'onChange={(e)=>{ setemail(e.target.value)}} /><br/><br/>

//     <input type="password" placeholder='password'onChange={(e)=>{setpassword(e.target.value)}} /><br/><br/><br/>

// <button className='login-button' onClick={RegisterFun}>Login</button><br/><br/><br/>
// <input style={{"color": color  }}className='message' type="text" value={result} disabled /><br/>

//     </div>
//   )
// }

export default Login;