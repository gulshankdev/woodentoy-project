import "./FilterSidebar.css";

function FilterSidebar({
  selectedCategory,
  setSelectedCategory,
}) {

  const categories = [
    "All",
    "Montessori",
    "Ride On Toys",
    "Balance Toys",
    "Furniture",
  ];

  return (

    <aside className="filter-sidebar">

      <h2>Filters</h2>

      {/* Category */}

      <div className="filter-box">

        <h3>Categories</h3>

        {categories.map((category) => (

          <label key={category}>

            <input
              type="radio"
              name="category"
              checked={selectedCategory === category}
              onChange={() =>
                setSelectedCategory(category)
              }
            />

            {category}

          </label>

        ))}

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