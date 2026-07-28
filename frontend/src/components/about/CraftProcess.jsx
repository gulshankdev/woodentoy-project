import "./CraftProcess.css";
import {
  FaPencilRuler,
  FaTree,
  FaHammer,
  FaCheckCircle,
} from "react-icons/fa";

function CraftProcess() {
  const steps = [
    {
      icon: <FaPencilRuler />,
      title: "Design",
      desc: "Every toy begins with thoughtful child-centered design inspired by Montessori learning.",
    },
    {
      icon: <FaTree />,
      title: "Natural Wood",
      desc: "We carefully select responsibly sourced premium wood for every handcrafted toy.",
    },
    {
      icon: <FaHammer />,
      title: "Handcrafted",
      desc: "Experienced artisans shape, polish, and assemble every product with precision.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Quality Check",
      desc: "Each toy undergoes rigorous inspection before reaching your child's hands.",
    },
  ];

  return (
    <section className="craft">

      <div className="craft-heading">

        <p>OUR PROCESS</p>

        <h2>
          Crafted With Love
        </h2>

      </div>

      <div className="craft-grid">

        {steps.map((step, index) => (

          <div className="craft-card" key={index}>

            <div className="craft-number">
              {index + 1}
            </div>

            <div className="craft-icon">
              {step.icon}
            </div>

            <h3>{step.title}</h3>

            <p>{step.desc}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default CraftProcess;