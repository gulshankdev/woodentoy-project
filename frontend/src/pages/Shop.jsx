import "./Shop.css";
import { useState } from "react";

import SearchBar from "../components/SearchBar";

import FilterSidebar from "../components/FilterSidebar";
import SortBar from "../components/SortBar";
 import ProductGrid from "../components/ProductGrid";

function Shop() {
  const [search, setSearch] = useState("");

  return (
    <section className="shop-page">

      <div className="shop-header">

        <h1>Shop</h1>

        <p>Home / Shop</p>

      </div>

      <div className="shop-container">

        <FilterSidebar />

        <div className="shop-content">
          <SearchBar
    search={search}
    setSearch={setSearch}
/>

          <SortBar />

          <ProductGrid />

        </div>

      </div>

    </section>
  );
}

export default Shop;