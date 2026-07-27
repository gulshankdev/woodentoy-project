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
        />

        <div className="shop-content">

          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          <SortBar />

          <ProductGrid
            search={search}
            selectedCategory={selectedCategory}
          />

        </div>

      </div>

    </section>

  );

}

export default Shop;