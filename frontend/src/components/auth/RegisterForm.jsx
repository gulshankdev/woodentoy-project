import "./LoginForm.css";
import { Link } from "react-router-dom";

function RegisterForm() {

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

        <p>

          Join TumbleWood and start shopping.

        </p>

        <form>

          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="tel"
            placeholder="Phone Number"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <input
            type="password"
            placeholder="Confirm Password"
          />

          <button>

            Create Account

          </button>

        </form>

        <p className="register-link">

          Already have an account?

          <Link to="/login">

            Login

          </Link>

        </p>

      </div>

    </div>

  );

}

export default RegisterForm;