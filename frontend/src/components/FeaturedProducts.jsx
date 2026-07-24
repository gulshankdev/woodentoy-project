import "./FeaturedProducts.css";
import products from "../data/products";

function FeaturedProducts() {
  return (
    <section className="featured">

      <div className="featured-title">

        <p>BEST SELLERS</p>

        <h2>Featured Products</h2>

      </div>

      <div className="product-grid">

        {products.map((item) => (

          <div className="product-card" key={item.id}>

            <div className="product-image">

              <img src={item.image} alt={item.name} />

            </div>

            <div className="product-info">

              <h3>{item.name}</h3>

              <p className="price">
                ₹ {item.price}
              </p>

              <button>
                Add to Cart
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default FeaturedProducts;