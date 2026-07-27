import "./FilterSidebar.css";

function FilterSidebar({
  selectedCategory,
  setSelectedCategory,
  selectedAge,
  setSelectedAge,
   maxPrice,
  setMaxPrice,
}) {
  const categories = [
    "All",
    "Montessori",
    "Ride On Toys",
    "Balance Toys",
    "Furniture",
  ];

  const ages = [
  "All",
  "12-36 Months",
  "18-48 Months",
  "18-60 Months",
  "24-60 Months",
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

  {ages.map((age) => (

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
    </aside>

  );

}

export default FilterSidebar;