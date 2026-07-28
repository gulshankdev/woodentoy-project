import "./ContactSection.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

function ContactSection() {
  return (
    <section className="contact-section">

      <div className="contact-container">

        {/* Left Side */}

        <div className="contact-info">

          <h2>Get In Touch</h2>

          <p>
            We'd love to answer your questions about our handcrafted
            wooden toys and Montessori collections.
          </p>

          <div className="info-item">
            <FaMapMarkerAlt />
            <div>
              <h4>Address</h4>
              <p> Unit No. 516, Vipul Business Park, Sector 48, Gurugram, Haryana, India 122018</p>
            </div>
          </div>

          <div className="info-item">
            <FaPhoneAlt />
            <div>
              <h4>Phone</h4>
              <p>+91  7310081002</p>
            </div>
          </div>

          <div className="info-item">
            <FaEnvelope />
            <div>
              <h4>Email</h4>
              <p>contact@tumblewood.in</p>
            </div>
          </div>

          <div className="info-item">
            <FaClock />
            <div>
              <h4>Working Hours</h4>
              <p>Mon – Sat : 9 AM – 6 PM</p>
            </div>
          </div>

        </div>

        {/* Right Side */}

        <div className="contact-form">

          <h2>Send Message</h2>

          <form>

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default ContactSection;