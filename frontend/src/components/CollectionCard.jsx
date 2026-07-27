import "./CollectionCard.css";
import { Link } from "react-router-dom";

function CollectionCard({ collection }) {
  return (
    <div className="collection-card">

      <img
        src={collection.image}
        alt={collection.title}
      />

      <div className="collection-content">

        <h2>{collection.title}</h2>

        <p>{collection.description}</p>

        <Link
          to={`/collections/${collection.slug}`}
          className="collection-btn"
        >
          Explore Collection →
        </Link>

      </div>

    </div>
  );
}

export default CollectionCard;