import "./FilterSidebar.css";

function FilterSidebar({
  selectedCategory,
  setSelectedCategory,
  selectedAge,
  setSelectedAge,
   maxPrice,
  setMaxPrice,
   setSearch,
}) {
 const categories = [
  "All",
  "Learning Toys",
  "Activity Toys",
  "Montessori",
  "Balance Toys",
  "Outdoor Activities",
  "Kids Furniture",
];

const ageOptions = [
  "All",
  "0-3 Months",
  "3-6 Months",
  "6-9 Months",
  "9-12 Months",
  "12-15 Months",
  "15-18 Months",
  "18-21 Months",
  "21-24 Months",
  "24-30 Months+",
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

{ageOptions.map((age) => (

    <label key={age}>

      <input
        type="radio"
        name="age"
        checked={selectedAge === age}
        onChange={() => setSelectedAge(age)}
      />

      {age}

    </label>

  ))}

</div>

      {/* Price */}

     <div className="filter-box">

  <h3>Maximum Price</h3>

  <input
    type="range"
    min="1000"
    max="30000"
    step="500"
    value={maxPrice}
    onChange={(e) =>
      setMaxPrice(Number(e.target.value))
    }
  />

  <p>

    ₹1,000 – ₹{maxPrice.toLocaleString()}

  </p>

</div>
<button
  className="clear-filter-btn"
  onClick={() => {
    setSelectedCategory("All");
    setSelectedAge("All");
    setMaxPrice(30000);

    if (setSearch) {
      setSearch("");
    }
  }}
>
  Clear Filters
</button>
    </aside>

  );

}

export default FilterSidebar;