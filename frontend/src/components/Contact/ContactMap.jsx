import "./ContactMap.css";

function ContactMap() {
  return (
    <section className="contact-map">

      <div className="map-heading">

        <p>OUR LOCATION</p>

        <h2>Visit Our Store</h2>

      </div>

      <div className="map-container">

        <iframe
          title="Google Map"
          src="https://www.google.com/maps?q=Mohali%20Punjab&output=embed"
          loading="lazy"
          allowFullScreen
        ></iframe>

      </div>

    </section>
  );
}

export default ContactMap;