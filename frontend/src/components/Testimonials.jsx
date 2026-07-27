import "./Testimonials.css";
import testimonials from "../data/testimonials";
import { FaStar } from "react-icons/fa";

function Testimonials() {
  return (
    <section className="testimonials">

      <div className="section-heading">
        <p>HAPPY PARENTS</p>
        <h2>What Our Customers Say</h2>
      </div>

      <div className="testimonialGrid">

        {testimonials.map((item) => (

          <div className="testimonialCard" key={item.id}>

            <img src={item.image} alt={item.name} />

            <div className="stars">
              {[...Array(item.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <p className="review">
              "{item.review}"
            </p>

            <h3>{item.name}</h3>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Testimonials;