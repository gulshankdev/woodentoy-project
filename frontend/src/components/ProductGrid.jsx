import "./ProductGrid.css";

import { getProducts } from "../services/productService";

import ProductCard from "./ProductCard";

function ProductGrid({

  search,

  selectedCategory,

}) {

  const products = getProducts();

  const filteredProducts = products.filter((product) => {

    const matchesSearch =

      product.name.toLowerCase().includes(search.toLowerCase()) ||

      product.category.toLowerCase().includes(search.toLowerCase()) ||

      product.age.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =

      selectedCategory === "All"

        ? true

        : product.category === selectedCategory;

    return matchesSearch && matchesCategory;

  });

  return (

    <div className="product-grid">

      {filteredProducts.length > 0 ? (

        filteredProducts.map((product) => (

          <ProductCard

            key={product.id}

            product={product}

          />

        ))

      ) : (

        <h2>No Products Found</h2>

      )}

    </div>

  );

}

export default ProductGrid;