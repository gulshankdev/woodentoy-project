import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container">

        <div className="logo">
          <img
            src="/logo.png"
            alt="TumbleWood"
          />
        </div>

        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/collections">Collections</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <div className="nav-right">
          <button className="shop-btn">
            Shop Now
          </button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;