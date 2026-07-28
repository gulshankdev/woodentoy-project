import "./Shop.css";
import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import SearchBar from "../components/SearchBar";
import FilterSidebar from "../components/FilterSidebar";
import SortBar from "../components/SortBar";
import ProductGrid from "../components/ProductGrid";

function Shop() {
  const [searchParams] = useSearchParams();
  const ageFromURL = searchParams.get("age") || "All";

  const categoryFromURL =
    searchParams.get("category") || "All";


  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState(categoryFromURL);

  const [selectedAge, setSelectedAge] =
    useState(ageFromURL);
  const [maxPrice, setMaxPrice] = useState(30000);
  const [sortOption, setSortOption] = useState("default");
  const [totalProducts, setTotalProducts] = useState(0);
  useEffect(() => {
    setSelectedCategory(categoryFromURL);
    setSelectedAge(ageFromURL);
  }, [categoryFromURL, ageFromURL]);

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
          setSearch={setSearch}

        />

        <div className="shop-content">

          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          <SortBar
            sortOption={sortOption}
            setSortOption={setSortOption}
            totalProducts={totalProducts}
          />

          <ProductGrid
            search={search}
            selectedCategory={selectedCategory}
            selectedAge={selectedAge}
            maxPrice={maxPrice}
            sortOption={sortOption}
            setTotalProducts={setTotalProducts}
          />

        </div>

      </div>

    </section>

  );

}

export default Shop;