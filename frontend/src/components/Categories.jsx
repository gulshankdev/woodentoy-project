 import "./Categories.css";
import categories from "../data/categories";
import { Link } from "react-router-dom";

function Categories() {
  return (
   <section
  id="categories"
  className="categories"
>

      <div className="section-title">
        <h2>Shop By Categories</h2>
        <p>Explore our handcrafted wooden collections</p>
      </div>

      <div className="category-grid">

       {categories.map((item) => (

  <Link
    key={item.id}
    to={`/shop?category=${encodeURIComponent(item.title)}`}
    className="category-link"
  >

    <div className="category-card">

      <img
        src={item.image}
        alt={item.title}
      />

      <h3>{item.title}</h3>

    </div>

  </Link>

))}

      </div>

    </section>
  );
}

export default Categories;