import "./SortBar.css";

function SortBar({
  sortOption,
  setSortOption,
  totalProducts,
}) {

  return (

    <div className="sort-bar">

      <div className="results">

        Showing <strong>{totalProducts}</strong> Products

      </div>

      <div className="sort-box">

        <label>Sort By</label>

        <select
          value={sortOption}
          onChange={(e) =>
            setSortOption(e.target.value)
          }
        >

          <option value="default">
            Featured
          </option>

          <option value="name">
            Name: A-Z
          </option>

          <option value="low">
            Price: Low to High
          </option>

          <option value="high">
            Price: High to Low
          </option>

          <option value="rating">
            Highest Rated
          </option>

        </select>

      </div>

    </div>

  );

}

export default SortBar;