import "./WhyChoose.css";
import {
  FaLeaf,
  FaShieldAlt,
  FaPuzzlePiece,
  FaHandsHelping,
  FaTruck,
  FaStar,
} from "react-icons/fa";

function WhyChoose() {
  const features = [
    {
      icon: <FaLeaf />,
      title: "Sustainable Wood",
      desc: "Responsibly sourced premium natural wood for eco-friendly play.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Child Safe",
      desc: "Non-toxic paints, smooth edges, and safety-tested materials.",
    },
    {
      icon: <FaPuzzlePiece />,
      title: "Montessori Inspired",
      desc: "Designed to encourage creativity and independent learning.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Handcrafted",
      desc: "Every toy is carefully crafted with love and attention to detail.",
    },
    {
      icon: <FaTruck />,
      title: "Fast Delivery",
      desc: "Reliable delivery across India with secure packaging.",
    },
    {
      icon: <FaStar />,
      title: "Premium Quality",
      desc: "Built to last for years and become treasured childhood memories.",
    },
  ];

  return (
    <section className="why">

      <div className="why-heading">

        <p>WHY CHOOSE US</p>

        <h2>Why Families Love TumbleWood</h2>

      </div>

      <div className="why-grid">

        {features.map((item, index) => (

          <div className="why-card" key={index}>

            <div className="why-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default WhyChoose;