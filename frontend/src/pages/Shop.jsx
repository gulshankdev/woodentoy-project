import "./Shop.css";
import { useState } from "react";

import SearchBar from "../components/SearchBar";
import FilterSidebar from "../components/FilterSidebar";
import SortBar from "../components/SortBar";
import ProductGrid from "../components/ProductGrid";

function Shop() {

  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("All");

const [selectedAge, setSelectedAge] = useState("All");
const [maxPrice, setMaxPrice] = useState(30000);
const [sortOption, setSortOption] = useState("default");

  return (

    <section className="shop-page">

      <div className="shop-header">

        <h1>Shop</h1>

        <p>Home / Shop</p>

      </div>

      <div className="shop-container">

      <FilterSidebar
  selectedCategory={selectedCategory}
  setSelectedCategory={setSelectedCategory}
  selectedAge={selectedAge}
  setSelectedAge={setSelectedAge}
   maxPrice={maxPrice}
  setMaxPrice={setMaxPrice}
/>

        <div className="shop-content">

          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          <SortBar
  sortOption={sortOption}
  setSortOption={setSortOption}
  totalProducts={15}
/>

          <ProductGrid
  search={search}
  selectedCategory={selectedCategory}
  selectedAge={selectedAge}
    maxPrice={maxPrice}
    sortOption={sortOption}
/>

        </div>

      </div>

    </section>

  );

}

export default Shop;