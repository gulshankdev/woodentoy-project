import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import WhyChoose from "../components/WhyChoose";
import BestSeller from "../components/BestSeller";
 import ShopByAge from "../components/ShopByAge";
 import Testimonials from "../components/Testimonials";
 import OurPromise from "../components/OurPromise";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <Categories />
       <FeaturedProducts />
        <WhyChoose />
        <BestSeller />
          <ShopByAge /> 
          <Testimonials />
          <OurPromise />
            <Newsletter />
             <Footer />
    </>
  );
}

export default Home;