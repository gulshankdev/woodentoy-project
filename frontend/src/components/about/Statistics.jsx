import "./Statistics.css";

function Statistics() {
  const stats = [
    {
      number: "15+",
      title: "Premium Products",
    },
    {
      number: "5000+",
      title: "Happy Families",
    },
    {
      number: "100%",
      title: "Natural Wood",
    },
    {
      number: "4.9★",
      title: "Customer Rating",
    },
  ];

  return (
    <section className="statistics">

      <div className="statistics-container">

        {stats.map((item, index) => (

          <div
            className="stat-card"
            key={index}
          >

            <h2>{item.number}</h2>

            <p>{item.title}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Statistics;