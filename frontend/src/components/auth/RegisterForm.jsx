import {useState} from "react";
import {useNavigate,Link} from "react-router-dom";
import "./LoginForm.css";

function RegisterForm(){

const navigate=useNavigate();

const [user,setUser]=useState({

first_name:"",
email:"",
phone:"",
password:"",
confirmPassword:""

});

const handleChange=(e)=>{

setUser({...user,[e.target.name]:e.target.value});

}

const register=async(e)=>{

e.preventDefault();

if(user.password!==user.confirmPassword){

alert("Passwords do not match");

return;

}

const res=await fetch("http://127.0.0.1:8000/api/accounts/register/",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

first_name:user.first_name,
email:user.email,
phone:user.phone,
password:user.password

})

});

if(res.ok){

alert("Registration Successful");

navigate("/login");

}else{

const err=await res.json();

alert(JSON.stringify(err));

}

}

return(

<form onSubmit={register}>

<input
name="first_name"
placeholder="Name"
onChange={handleChange}
/>

<input
name="email"
placeholder="Email"
onChange={handleChange}
/>

<input
name="phone"
placeholder="Phone"
onChange={handleChange}
/>

<input
name="password"
type="password"
placeholder="Password"
onChange={handleChange}
/>

<input
name="confirmPassword"
type="password"
placeholder="Confirm Password"
onChange={handleChange}
/>

<button type="submit">

Create Account

</button>

</form>

)

}

export default RegisterForm;