import "./Navbar.css";

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
            <li><a href="/">Home</a></li>
            <li><a href="/">Shop</a></li>
            <li><a href="/">Collections</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
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