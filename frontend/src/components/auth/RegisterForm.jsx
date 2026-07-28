import "./LoginForm.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function RegisterForm() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    first_name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const register = async (e) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/accounts/register/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name: user.first_name,
            email: user.email,
            phone: user.phone,
            password: user.password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Registration Successful");
        navigate("/login");
      } else {
        alert(JSON.stringify(data));
      }
  } catch (error) {
  console.error("Full Error:", error);
  alert("Cannot connect to Django backend");
}
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img
          src="/images/auth/login-banner.jpg"
          alt="Wooden Toys"
        />
      </div>

      <div className="login-right">
        <h1>Create Account</h1>

        <p>Join TumbleWood and start shopping.</p>

        <form onSubmit={register}>
          <input
            type="text"
            name="first_name"
            placeholder="Full Name"
            value={user.first_name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={user.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={user.phone}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={user.confirmPassword}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Create Account
          </button>
        </form>

        <p className="register-link">
          Already have an account?
          <Link to="/login"> Login </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterForm;