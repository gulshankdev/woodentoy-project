import "./BestSeller.css";

function BestSeller() {
  return (
    <section className="best-seller">

      <div className="best-left">

        <img
          src="/images/bestseller-banner.jpg"
          alt="Best Seller"
        />

      </div>

      <div className="best-right">

        <span>BEST SELLERS</span>

        <h2>
          Crafted With Love <br />
          For Every Child
        </h2>

        <p>
          Discover our most loved wooden toys designed to inspire
          creativity, confidence and joyful learning.
        </p>

        <div className="best-products">

          <div className="item">
            <h3>Traditional Rocking Horse</h3>
            <p>₹ 6,999</p>
            <button>View Product</button>
          </div>

          <div className="item">
            <h3>Learning Tower</h3>
            <p>₹ 7,499</p>
            <button>View Product</button>
          </div>

        </div>

      </div>

    </section>
  );
}

export default BestSeller;