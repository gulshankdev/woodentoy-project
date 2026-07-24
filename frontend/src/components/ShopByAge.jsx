// import "./ShopByAge.css";

// const ageGroups = [
//   {
//     id: 1,
//     title: "0 – 2 Years",
//     image: "/images/age/0-2.jpg",
//   },
//   {
//     id: 2,
//     title: "2 – 4 Years",
//     image: "/images/age/2-4.jpg",
//   },
//   {
//     id: 3,
//     title: "4 – 6 Years",
//     image: "/images/age/4-6.jpg",
//   },
//   {
//     id: 4,
//     title: "6+ Years",
//     image: "/images/age/6plus.jpg",
//   },
// ];

// function ShopByAge() {
//   return (
//     <section className="shop-age">

//       <div className="section-heading">
//         <span>SHOP BY AGE</span>
//         <h2>Find The Perfect Toy</h2>
//       </div>

//       <div className="age-grid">

//         {ageGroups.map((item) => (

//           <div className="age-card" key={item.id}>

//             <img src={item.image} alt={item.title} />

//             <div className="age-overlay">
//               <h3>{item.title}</h3>
//             </div>

//           </div>

//         ))}

//       </div>

//     </section>
//   );
// }

// export default ShopByAge;