import "./SortBar.css";

function SortBar() {
  return (
    <div className="sort-bar">

      <div className="results">
        Showing <strong>4</strong> Products
      </div>

      <div className="sort-box">

        <label>Sort By</label>

        <select>

          <option>Featured</option>

          <option>Newest</option>

          <option>Price: Low to High</option>

          <option>Price: High to Low</option>

          <option>Best Selling</option>

        </select>

      </div>

    </div>
  );
}

export default SortBar;