import "./Checkout.css";
import { useCart } from "../context/CartContext";

function Checkout() {
  const { cart } = useCart();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section className="checkout-page">

      <h1>Checkout</h1>

      <div className="checkout-container">

        <div className="billing-details">

          <h2>Billing Details</h2>

          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone Number" />
          <input type="text" placeholder="Country" />
          <input type="text" placeholder="State" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Pincode" />

          <textarea
            placeholder="Full Address"
            rows="4"
          ></textarea>

        </div>

        <div className="order-summary">

          <h2>Order Summary</h2>

          {cart.map((item) => (
            <div
              key={item.id}
              className="summary-item"
            >
              <span>{item.name}</span>

              <span>
                ₹{(item.price * item.quantity).toLocaleString()}
              </span>
            </div>
          ))}

          <hr />

          <div className="summary-item">
            <strong>Subtotal</strong>
            <strong>₹{subtotal.toLocaleString()}</strong>
          </div>

          <div className="summary-item">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <hr />

          <div className="summary-item total">
            <strong>Total</strong>
            <strong>₹{subtotal.toLocaleString()}</strong>
          </div>

          <button className="place-order-btn">
            Place Order
          </button>

        </div>

      </div>

    </section>
  );
}

export default Checkout;