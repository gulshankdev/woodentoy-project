import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./LoginForm.css";

function LoginForm() {

  const navigate = useNavigate();

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const loginUser=async(e)=>{

    e.preventDefault();

    const res=await fetch("http://127.0.0.1:8000/api/accounts/login/",{

      method:"POST",

      headers:{
        "Content-Type":"application/json"
      },

      body:JSON.stringify({
        email,
        password
      })

    });

    const data=await res.json();

    if(res.ok){

      localStorage.setItem("access",data.access);
      localStorage.setItem("refresh",data.refresh);
      localStorage.setItem("user",JSON.stringify(data.user));

      navigate("/");

    }else{

      alert(data.message);

    }

  }

  return(

<div className="login-container">

<div className="login-left">

<img src="/images/auth/login-banner.jpg" alt="" />

</div>

<div className="login-right">

<h1>Welcome Back</h1>

<p>Login to continue shopping.</p>

<form onSubmit={loginUser}>

<input

type="email"

placeholder="Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

/>

<input

type="password"

placeholder="Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

/>

<button type="submit">

Login

</button>

</form>

<p>

Don't have an account?

<Link to="/register">

Register

</Link>

</p>

</div>

</div>

)

}

export default LoginForm;