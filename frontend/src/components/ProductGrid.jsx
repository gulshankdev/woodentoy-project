import "./ProductGrid.css";

import products from "../data/products";
import ProductCard from "./ProductCard";

function ProductGrid() {
  return (
    <div className="product-grid">

      {products.map((product) => (

        <ProductCard
          key={product.id}
          product={product}
        />

      ))}

    </div>
  );
}

export default ProductGrid;