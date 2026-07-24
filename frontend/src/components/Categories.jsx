 import "./Categories.css";
import categories from "../data/categories";

function Categories() {
  return (
    <section className="categories">

      <div className="section-title">
        <h2>Shop By Categories</h2>
        <p>Explore our handcrafted wooden collections</p>
      </div>

      <div className="category-grid">

        {categories.map((item) => (

          <div className="category-card" key={item.id}>

            <img src={item.image} alt={item.title} />

            <h3>{item.title}</h3>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Categories;