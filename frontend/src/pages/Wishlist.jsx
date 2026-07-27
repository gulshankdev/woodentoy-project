import "./Wishlist.css";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

function Wishlist() {

  const {
    wishlist,
    toggleWishlist
  } = useWishlist();

  const { addToCart } = useCart();

  return (

    <section className="wishlist-page">

      <h1>My Wishlist</h1>

      {wishlist.length === 0 ? (

        <h2>Your Wishlist is Empty</h2>

      ) : (

        <div className="wishlist-grid">

          {wishlist.map((product) => (

            <div
              className="wishlist-card"
              key={product.id}
            >

              <img
                src={product.images[0]}
                alt={product.name}
              />

              <h3>{product.name}</h3>

              <p>
                ₹{product.price.toLocaleString()}
              </p>

              <button
                onClick={() =>
                  addToCart(product)
                }
              >
                Add To Cart
              </button>

              <button
                className="remove"
                onClick={() =>
                  toggleWishlist(product)
                }
              >
                Remove
              </button>

            </div>

          ))}

        </div>

      )}

    </section>

  );

}

export default Wishlist;