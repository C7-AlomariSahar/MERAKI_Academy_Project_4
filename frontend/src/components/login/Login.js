import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../App";
import "./login.css"
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";

import axios from "axios";

const Login = () => {
    const navigate =useNavigate();
    const {token , settoken ,isLoggedIn, setisLoggedIn ,loggedInUserName, setloggedInUserName  ,loggedInUserID ,setloggedInUserID ,setloggedInUserAllData ,emailRegex} =useContext(AppContext)
    const [password, setpassword] = useState("123456789");
    const [email, setemail] = useState("guestuser@gmail.com");
    const [result, setresult] = useState(false);
    const [isValidemail, setisValidemail] = useState(true);
  const [isValidpass, setisValidpass] = useState(true)

    const loginFun = () => {
        axios
            .post("https://resturantswebsite.onrender.com/user/login", { email , password })
            .then((resultdata) => {
                console.log("login_________________", resultdata.data);


                
                setloggedInUserAllData(resultdata.data.user[0])
                localStorage.setItem("loggedInUserAllData", JSON.stringify(resultdata.data.user[0]) );


                settoken( resultdata.data.token)
                localStorage.setItem("token", JSON.stringify(resultdata.data.token) );

                setloggedInUserName(resultdata.data.user[0].UserName)
                localStorage.setItem("loggedInUserName", JSON.stringify(resultdata.data.user[0].UserName) );

                setloggedInUserID(resultdata.data.user[0]._id )
                localStorage.setItem("loggedInUserID", JSON.stringify(resultdata.data.user[0]._id) );

                setisLoggedIn(true)
                localStorage.setItem("isLoggedIn", JSON.stringify(true) );
               
              
               

                console.log(".user.UserName_________________",resultdata.data.user[0].UserName);
               
                setresult(false)
            }).then(()=>{navigate("/home")})
            .catch((err) => {
                console.log("error", err.response.data.message);
                 setresult(true)
            });
    };

    return (
      <div  className="loginregister">     
        <div className="login-div">
           
            <h2> login your detail</h2>
            <br />
            <input
            // value={"guestuser@gmail.com"}
                type="email"
                placeholder="email"
                onChange={(e) => {
                    setemail(e.target.value);
                }}
            />
            {!isValidemail && <span className="error">Please enter a valid email</span>}
            <br />
            <br />
            <input
            // value={"123456789"}
                type="password"
                placeholder="enter your email"
                onChange={(e) => {
                    setpassword(e.target.value);
                }}
            ></input>
              {!isValidpass && <span className="error"> password shoud be at least 8 characters</span>}
            <br />
            <br />
            <button
                onClick={() => {

                   if( emailRegex.test(email)){
                      setisValidemail(true)}
                    else{setisValidemail(false) }; 

                    if(password.length >= 8){
                        setisValidpass(true)
                        }
                        else{
                            setisValidpass(false)
                        }

                        isValidpass && isValidemail && loginFun() ;
                   console.log("regex------------------",emailRegex.test(email))
                }}
            >
                Login
            </button> <br /> <br />

            <button
                onClick={() => {
                 
                    loginFun() ;
                
                }}
            >
                Login as a GUEST
            </button> <br />
           { result && <span className="error" > Your details are not correct </span>}
            <br />
            <br />
            <div>Forgot your password?</div>
         
            <br />
        </div>

 <div className="changeLoginRegister">
           
    <div>   
        <h3>Don't have an account? </h3>             
        <button onClick={()=>{
            navigate("/register")
        }}> Creat Account </button><br/>
        <p><span>*
Terms & conditions.</span>
Your privacy and security are important to us. For more information on how we use your data read ourprivacy policy</p>
      </div>     
    </div>

    <div className="imgcorner"> <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"></img></div>
    {/* <div className="imgcorner2"> <img src="https://media.istockphoto.com/id/937016542/photo/quinoa-salad-with-beet-root-and-spinach.jpg?s=612x612&w=0&k=20&c=hI7X9AzPWGtiusK8NZs7qF1rmJTjHrsmKilFkQgkZs8="></img></div> */}
    {/* <div className="imgcorner3"> <img src="https://media.istockphoto.com/id/673909238/photo/grilled-beef-steak.jpg?s=612x612&w=0&k=20&c=QpQzHAbx7jaUUl9WzSrWpmgcwwF9aC-2kkE5tEunUp8="></img></div> */}

        </div>
    );
};



export default Login;
