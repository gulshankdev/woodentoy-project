import "./Newsletter.css";

function Newsletter() {
  return (
    <section className="newsletter">

      <div className="newsletter-content">

        <h2>Stay Connected With TumbleWood</h2>

        <p>
          Be the first to know about new launches, exclusive offers,
          parenting tips, and Montessori learning ideas.
        </p>

        <form className="newsletter-form">

          <input
            type="email"
            placeholder="Enter your email"
          />

          <button type="submit">
            Subscribe
          </button>

        </form>

      </div>

    </section>
  );
}

export default Newsletter;