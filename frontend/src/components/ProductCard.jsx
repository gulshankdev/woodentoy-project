import "./ProductCard.css";
import { Link } from "react-router-dom";
console.log("THIS IS MY PRODUCT CARD");

function ProductCard({ product }) {
  console.log(product);
   console.log(product);
  console.log(product.images);
  console.log(product.images?.[0]);

  return (
    <div className="product-card">

      <div className="product-image">

        <Link to={`/product/${product.slug}`}>

           <img
  src={product.images[0]}
  alt={product.name}
/> 
{/* <img
  src="/images/products/rocking-horse.jpg"
  alt="Test"
/> */}
        </Link>

      </div>

      <div className="product-info">

        <p className="product-category">
          {product.category}
        </p>

        <Link
          to={`/product/${product.slug}`}
          className="product-title"
        >
          <h3>{product.name}</h3>
        </Link>

        <div className="rating">
          ⭐ {product.rating} ({product.reviews})
        </div>

        <div className="price">

          <span className="new-price">
            ₹{product.price.toLocaleString()}
          </span>

          <span className="old-price">
            ₹{product.oldPrice.toLocaleString()}
          </span>

        </div>

        <button className="cart-btn">
          Add to Cart
        </button>

      </div>

    </div>
  );
}

export default ProductCard;