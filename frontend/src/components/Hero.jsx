import "./Hero.css";
import heroImg from "../assets/hero.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="overlay">

        <div className="hero-content">

          <span>PREMIUM WOODEN TOYS</span>

          <h1>
            Discover The Joy <br />
            Of Learning Through Play
          </h1>

          <p>
            Eco-friendly handcrafted wooden toys designed to inspire
            creativity, imagination and child development.
          </p>

         <div className="hero-buttons">
            <Link to="/shop">
  <button className="primary-btn">
    Shop Collection
  </button>
</Link>
 <button
  className="secondary-btn"
  onClick={() => {
    document
      .getElementById("categories")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }}
>
  Explore More
</button>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;