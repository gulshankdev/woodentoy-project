import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import WhyChoose from "../components/WhyChoose";
import BestSeller from "../components/BestSeller";
// import ShopByAge from "../components/ShopByAge";

function Home() {
  return (
    <>
      <Hero />
      <Categories />
       <FeaturedProducts />
        <WhyChoose />
        <BestSeller />
         {/* <ShopByAge /> */}
    </>
  );
}

export default Home;