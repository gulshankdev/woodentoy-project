import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company */}

        <div className="footer-col">

          <h2>TumbleWood</h2>

          <p>
            Premium handcrafted wooden toys designed to inspire
            creativity, imagination and joyful learning.
          </p>

        </div>

        {/* Quick Links */}

        <div className="footer-col">

          <h3>Quick Links</h3>

          <ul>

            <li>Home</li>
            <li>Shop</li>
            <li>Collections</li>
            <li>About Us</li>
            <li>Contact</li>

          </ul>

        </div>

        {/* Categories */}

        <div className="footer-col">

          <h3>Categories</h3>

          <ul>

            <li>Montessori Toys</li>
            <li>Balance Toys</li>
            <li>Learning Towers</li>
            <li>Playhouses</li>
            <li>Kids Furniture</li>

          </ul>

        </div>

        {/* Contact */}

        <div className="footer-col">

          <h3>Contact</h3>

          <p>📍 Unit No. 516, Vipul Business Park, Sector 48, Gurugram, Haryana, India 122018</p>

          <p>📞 +91  7310081002</p>

          <p>✉contact@tumblewood.in </p>

          <div className="social">

            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaYoutube />

          </div>

        </div>

      </div>

      <div className="copyright">

        © 2026 TumbleWood. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;