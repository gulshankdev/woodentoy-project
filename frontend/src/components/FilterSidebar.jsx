import "./FilterSidebar.css";

function FilterSidebar() {
  return (
    <aside className="filter-sidebar">

      <h2>Filters</h2>

      {/* Categories */}

      <div className="filter-box">

        <h3>Categories</h3>

        <label>
          <input type="checkbox" />
          Montessori
        </label>

        <label>
          <input type="checkbox" />
          Ride On Toys
        </label>

        <label>
          <input type="checkbox" />
          Balance Toys
        </label>

        <label>
          <input type="checkbox" />
          Furniture
        </label>

      </div>

      {/* Age */}

      <div className="filter-box">

        <h3>Age</h3>

        <label>
          <input type="checkbox" />
          0–12 Months
        </label>

        <label>
          <input type="checkbox" />
          12–24 Months
        </label>

        <label>
          <input type="checkbox" />
          24–60 Months
        </label>

      </div>

      {/* Price */}

      <div className="filter-box">

        <h3>Price</h3>

        <input
          type="range"
          min="1000"
          max="30000"
        />

        <p>₹1,000 – ₹30,000</p>

      </div>

    </aside>
  );
}

export default FilterSidebar;