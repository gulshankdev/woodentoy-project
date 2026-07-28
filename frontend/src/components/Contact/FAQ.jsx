import { useState } from "react";
import "./FAQ.css";

function FAQ() {

  const faqs = [

    {
      question: "How long does delivery take?",
      answer:
        "Orders are typically delivered within 3–7 business days depending on your location.",
    },

    {
      question: "Are your toys child-safe?",
      answer:
        "Yes. All our toys are made using natural wood and non-toxic child-safe finishes.",
    },

    {
      question: "Do you ship across India?",
      answer:
        "Yes, we deliver our handcrafted wooden toys across India.",
    },

    {
      question: "What material is used?",
      answer:
        "We use premium quality natural wood sourced responsibly with eco-friendly finishes.",
    },

    {
      question: "Can I return a product?",
      answer:
        "Yes. Returns are accepted within 7 days if the product is unused and in its original packaging.",
    },

  ];

  const [active, setActive] = useState(null);

  return (

    <section className="faq">

      <div className="faq-heading">

        <p>HELP CENTER</p>

        <h2>Frequently Asked Questions</h2>

      </div>

      <div className="faq-container">

        {faqs.map((item, index) => (

          <div
            className="faq-item"
            key={index}
          >

            <div
              className="faq-question"
              onClick={() =>
                setActive(active === index ? null : index)
              }
            >

              <h3>{item.question}</h3>

              <span>
                {active === index ? "−" : "+"}
              </span>

            </div>

            {active === index && (

              <div className="faq-answer">

                <p>{item.answer}</p>

              </div>

            )}

          </div>

        ))}

      </div>

    </section>

  );
}

export default FAQ;