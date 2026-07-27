import "./ProductDetails.css";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import products from "../data/products";

function ProductDetails() {

  const { slug } = useParams();

  const product = products.find(
    (item) => item.slug === slug
  );
  const [quantity, setQuantity] = useState(1);

const increaseQuantity = () => {
  setQuantity(quantity + 1);
};

const decreaseQuantity = () => {
  if (quantity > 1) {
    setQuantity(quantity - 1);
  }
};
const [selectedImage, setSelectedImage] = useState("");

useEffect(() => {

  if (product) {
    setSelectedImage(product.images[0]);
  }

}, [product]);

  if (!product) {

    return <h2>Product Not Found</h2>;

  }

  return (

    <section className="product-details">

      <div className="product-container">
<div className="product-image-section">

  <div className="thumbnails">

    {product.images.map((img, index) => (

      <img
        key={index}
        src={img}
        alt={product.name}
        onClick={() => setSelectedImage(img)}
        className={
          selectedImage === img
            ? "active-thumb"
            : ""
        }
      />

    ))}

  </div>

  <div className="product-image">

    <img
      src={selectedImage}
      alt={product.name}
    />

  </div>

</div>

        <div className="product-info">

          <p className="category">
            {product.category}
          </p>

          <h1>{product.name}</h1>

          <div className="rating">

            ⭐ {product.rating}

            ({product.reviews} Reviews)

          </div>

          <div className="price">

            <span className="new-price">

              ₹{product.price.toLocaleString()}

            </span>

            <span className="old-price">

              ₹{product.oldPrice.toLocaleString()}

            </span>

          </div>

          <p>

            <strong>Age :</strong>

            {product.age}

          </p>

          <p>

            <strong>Stock :</strong>

            {product.stock} Available

          </p>

          <p className="description">

            {product.description}

          </p>

         <div className="purchase-section">

  <div className="quantity-selector">

    <button onClick={decreaseQuantity}>
      -
    </button>

    <span>{quantity}</span>

    <button onClick={increaseQuantity}>
      +
    </button>

  </div>

  <button className="cart-btn">
    Add To Cart
  </button>

</div>

        </div>

      </div>

    </section>

  );
}

export default ProductDetails;