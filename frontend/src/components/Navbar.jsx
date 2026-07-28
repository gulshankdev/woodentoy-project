import "./Navbar.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { FaHeart } from "react-icons/fa";
import { useWishlist } from "../context/WishlistContext";
// import { FiSearch } from "react-icons/fi";
// import SearchModal from "./SearchModal";


function Navbar() {
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const [menuOpen, setMenuOpen] = useState(false);
  // const [searchOpen, setSearchOpen] = useState(false);
  return (
    <>
    <header className="navbar">
      <div className="container">

        <div className="logo">
          <img
            src="/tumblewood_logo.png"
            alt="TumbleWood"
          />
        </div>

        <div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <nav className={menuOpen ? "nav active" : "nav"}>
          <ul>
            <li>
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                onClick={() => setMenuOpen(false)}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/collections"
                onClick={() => setMenuOpen(false)}
              >
                Collections
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="nav-right">
          {/* <button
            className="search-btn"
            onClick={() => setSearchOpen(true)}
          >
            <FiSearch />
          </button> */}

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

          <Link to="/shop">

            <button className="shop-btn">

              Shop Now

            </button>

          </Link>

        </div>

      </div>
    </header>
     {/* <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      /> */}

    </>
  );
}

export default Navbar;