import "./WhyChoose.css";
import {
  FaLeaf,
  FaShieldAlt,
  FaPuzzlePiece,
  FaHeart,
} from "react-icons/fa";

function WhyChoose() {
  const features = [
    {
      icon: <FaLeaf />,
      title: "Eco Friendly",
      desc: "Made from sustainable natural wood with non-toxic finishes.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Child Safe",
      desc: "Smooth edges and premium quality materials for safe play.",
    },
    {
      icon: <FaPuzzlePiece />,
      title: "Montessori Learning",
      desc: "Encourages creativity, imagination and independent learning.",
    },
    {
      icon: <FaHeart />,
      title: "Handcrafted",
      desc: "Every toy is crafted carefully with love and attention.",
    },
  ];

  return (
    <section className="why">

      <div className="section-heading">
        <span>WHY CHOOSE US</span>
        <h2>Why Parents Love TumbleWood</h2>
      </div>

      <div className="why-grid">

        {features.map((item, index) => (

          <div className="why-card" key={index}>

            <div className="icon">
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