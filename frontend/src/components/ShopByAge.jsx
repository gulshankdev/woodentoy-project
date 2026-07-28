import "./ShopByAge.css";
import { Link } from "react-router-dom";
import ageData from "../data/ageData";

function ShopByAge() {
  return (
    <section className="shopAge">

      <div className="ageHeading">

        <p>SHOP BY AGE</p>

        <h2>
          Choose Toys According To Your Child's Age
        </h2>

      </div>

      <div className="ageGrid">

       {ageData.map((item) => (

  <Link
    key={item.id}
    to={`/shop?age=${encodeURIComponent(item.title)}`}
    className="ageCard"
  >

    <img
      src={item.image}
      alt={item.title}
    />

    <h3>{item.title}</h3>

  </Link>

))}
      </div>

    </section>
  );
}

export default ShopByAge;