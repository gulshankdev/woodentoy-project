import "./LoginForm.css";
import { Link } from "react-router-dom";

function LoginForm() {

  return (

    <div className="login-container">

      <div className="login-left">

        <img
          src="/images/auth/login-banner.jpg"
          alt="Wooden Toys"
        />

      </div>

      <div className="login-right">

        <h1>Welcome Back</h1>

        <p>
          Login to continue shopping.
        </p>

        <form>

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button>

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

  );

}

export default LoginForm;