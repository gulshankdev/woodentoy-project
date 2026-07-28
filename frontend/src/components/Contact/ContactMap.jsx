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
          src="https://www.google.com/maps?q=Unit+No.+516,+Vipul+Business+Park,+Sector+48,+Gurugram,+Haryana+122018,+India&output=embed"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default ContactMap;