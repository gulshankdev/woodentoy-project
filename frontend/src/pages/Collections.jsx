import "./Collections.css";
import collections from "../data/collections";
import CollectionCard from "../components/CollectionCard";

function Collections() {
  return (
    <section className="collections-page">

      <div className="collections-hero">

        <div className="hero-content">

          <h1>Our Collections</h1>

          <p>
            Discover handcrafted wooden toys designed to inspire
            creativity, imagination, and joyful learning for every child.
          </p>

        </div>

      </div>

      <div className="collections-container">

        <div className="collections-grid">

          {collections.map((collection) => (

            <CollectionCard
              key={collection.id}
              collection={collection}
            />

          ))}

        </div>

      </div>

    </section>
  );
}

export default Collections;