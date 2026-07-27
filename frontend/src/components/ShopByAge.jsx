import "./ShopByAge.css";
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

          <div className="ageCard" key={item.id}>

            <img src={item.image} alt={item.title} />

            <h3>{item.title}</h3>

          </div>

        ))}

      </div>

    </section>
  );
}

export default ShopByAge;