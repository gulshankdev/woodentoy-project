import "./AboutCTA.css";
import { Link } from "react-router-dom";

function AboutCTA() {
  return (
    <section className="about-cta">

      <div className="cta-overlay">

        <p className="cta-subtitle">
          LET'S BUILD HAPPY CHILDHOODS
        </p>

        <h2>
          Ready To Inspire <br />
          Your Child's Learning Journey?
        </h2>

        <p className="cta-text">
          Explore our thoughtfully handcrafted wooden toys designed
          to encourage creativity, imagination, and joyful learning.
        </p>

        <Link to="/shop">
          <button className="cta-btn">
            Shop Collection
          </button>
        </Link>

      </div>

    </section>
  );
}

export default AboutCTA;