import "./ProductGrid.css";

import { getProducts } from "../services/productService";

import ProductCard from "./ProductCard";

function ProductGrid({

  search,

  selectedCategory,
    selectedAge,
     maxPrice,
      sortOption,

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
        const matchesAge =

  selectedAge === "All"

    ? true

    : product.age === selectedAge;
    const matchesPrice =
  product.price <= maxPrice;

    return matchesSearch && matchesCategory && matchesAge && matchesPrice;

  });
   const sortedProducts = [...filteredProducts];

  switch (sortOption) {

    case "low":
      sortedProducts.sort((a, b) => a.price - b.price);
      break;

    case "high":
      sortedProducts.sort((a, b) => b.price - a.price);
      break;

    case "rating":
      sortedProducts.sort((a, b) => b.rating - a.rating);
      break;

    case "name":
      sortedProducts.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      break;

    default:
      break;
  }

  return (

    <div className="product-grid">

      {sortedProducts.length > 0 ? (

      sortedProducts.map((product) => (

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