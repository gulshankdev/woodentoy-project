import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { FaHeart } from "react-icons/fa";
import { useWishlist } from "../context/WishlistContext";


function Navbar() {
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  return (
    <header className="navbar">
      <div className="container">

        <div className="logo">
          <img
            src="/tumblewood_logo.png"
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

  <Link
    to="/wishlist"
    className="nav-icon"
  >

    <FaHeart />

    {wishlist.length > 0 && (

      <span className="count">

        {wishlist.length}

      </span>

    )}

  </Link>

  <Link
    to="/cart"
    className="nav-icon"
  >

    <FaShoppingCart />

    {cart.length > 0 && (

      <span className="count">

        {cart.length}

      </span>

    )}

  </Link>

  <Link
    to="/login"
    className="login-btn"
  >

    Login

  </Link>

  <button>

    Shop Now

  </button>

</div>

      </div>
    </header>
  );
}

export default Navbar;