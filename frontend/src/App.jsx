import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Wishlist from "./pages/Wishlist";
import Collections from "./pages/Collections";
import CollectionProducts from "./pages/CollectionProducts";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/shop" element={<Shop />} />
         <Route
    path="/product/:slug"
    element={<ProductDetails />}
  />
  <Route
  path="/cart"
  element={<Cart />}
/>

<Route path="/checkout" element={<Checkout />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route
  path="/collections"
  element={<Collections />}
/>
<Route path="/about" element={<About />} />
<Route
  path="/collections/:slug"
  element={<CollectionProducts />}
/>
<Route
  path="/login"
  element={<Login />}
/>
<Route
  path="/register"
  element={<Register />}
/>
      </Routes>
    </>
  );
}

export default App;