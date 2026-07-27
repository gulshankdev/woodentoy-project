import { useParams } from "react-router-dom";
import { getProducts } from "../services/productService";
import ProductCard from "../components/ProductCard";
import "./CollectionProducts.css";

function CollectionProducts() {

  const { slug } = useParams();

  const categoryMap = {
    montessori: "Montessori",
    "ride-on": "Ride On Toys",
    balance: "Balance Toys",
    furniture: "Furniture",
  };

  const selectedCategory = categoryMap[slug];

  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  return (

    <section className="collection-products">

      <div className="collection-header">

        <h1>{selectedCategory}</h1>

        <p>
          Discover our handcrafted wooden toys for this collection.
        </p>

      </div>

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

    </section>

  );

}

export default CollectionProducts;