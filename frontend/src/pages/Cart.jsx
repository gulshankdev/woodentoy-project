import { useCart } from "../context/CartContext";
import "./Cart.css";
import { Link } from "react-router-dom";

function Cart() {

  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (

    <section className="cart-page">

      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (

        <h2>Your Cart is Empty</h2>

      ) : (

        <div className="cart-layout">

          <div className="cart-items">

            {cart.map((item) => (

              <div className="cart-item" key={item.id}>

                <img
                  src={item.images[0]}
                  alt={item.name}
                />

                <div className="cart-info">

                  <h3>{item.name}</h3>

                  <p>₹{item.price.toLocaleString()}</p>

                  <div className="cart-quantity">

                    <button
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                    >
                      +
                    </button>

                  </div>

                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeItem(item.id)
                    }
                  >
                    Remove
                  </button>

                </div>

              </div>

            ))}

          </div>

          <div className="cart-summary">

            <h2>Order Summary</h2>

            <div className="summary-row">

              <span>Subtotal</span>

              <span>
                ₹{total.toLocaleString()}
              </span>

            </div>

            <div className="summary-row">

              <span>Shipping</span>

              <span>Free</span>

            </div>

            <hr />

            <div className="summary-row total">

              <span>Total</span>

              <span>
                ₹{total.toLocaleString()}
              </span>

            </div>

         <Link to="/checkout">
  <button className="checkout-btn">
    Proceed to Checkout
  </button>
</Link>

          </div>

        </div>

      )}

    </section>

  );
}

export default Cart;