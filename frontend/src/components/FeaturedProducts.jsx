import "./FeaturedProducts.css";
import products from "../data/products";
import ProductCard from "./ProductCard";

function FeaturedProducts() {
  return (
    <section className="featured">

      <div className="featured-title">
        <p>BEST SELLERS</p>
        <h2>Featured Products</h2>
      </div>

      <div className="product-grid">

        {products.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
          />
        ))}

      </div>

    </section>
  );
}

export default FeaturedProducts;