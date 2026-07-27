import "./OurPromise.css";

import {
  FaLeaf,
  FaShieldAlt,
  FaTruck,
  FaCreditCard,
  FaUndoAlt,
} from "react-icons/fa";

const promise = [
  {
    icon: <FaLeaf />,
    title: "Eco-Friendly",
    text: "Made from sustainably sourced natural wood.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Child Safe",
    text: "Smooth finish with non-toxic child-safe paints.",
  },
  {
    icon: <FaTruck />,
    title: "Fast Delivery",
    text: "Quick shipping across India.",
  },
  {
    icon: <FaCreditCard />,
    title: "Secure Payments",
    text: "100% safe online payment gateway.",
  },
  {
    icon: <FaUndoAlt />,
    title: "Easy Returns",
    text: "Simple and hassle-free return policy.",
  },
];

function OurPromise() {
  return (
    <section className="promise">

      <div className="section-heading">

        <p>WHY CHOOSE US</p>

        <h2>Our Promise To Every Family</h2>

      </div>

      <div className="promiseGrid">

        {promise.map((item, index) => (

          <div className="promiseCard" key={index}>

            <div className="promiseIcon">

              {item.icon}

            </div>

            <h3>{item.title}</h3>

            <p>{item.text}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default OurPromise;