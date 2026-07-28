import "./MissionVision.css";
import { FaBullseye, FaEye } from "react-icons/fa";

function MissionVision() {
  return (
    <section className="mission">

      <div className="mission-container">

        <div className="mission-card">

          <div className="mission-icon">
            <FaBullseye />
          </div>

          <h2>Our Mission</h2>

          <p>
            To create beautifully handcrafted wooden toys that inspire
            creativity, confidence, and joyful learning while ensuring
            every child plays safely.
          </p>

        </div>

        <div className="mission-card">

          <div className="mission-icon">
            <FaEye />
          </div>

          <h2>Our Vision</h2>

          <p>
            To become a trusted destination for sustainable,
            educational toys that nurture imagination and build
            lifelong childhood memories.
          </p>

        </div>

      </div>

    </section>
  );
}

export default MissionVision;