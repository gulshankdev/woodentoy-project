import products from "../data/products";

export const getProducts = () => {
  return products;
};

export const getProductBySlug = (slug) => {
  return products.find(
    (item) => item.slug === slug
  );
};

export const getProductsByCategory = (category) => {
  return products.filter(
    (item) => item.category === category
  );
};

export const getProductsByAge = (age) => {
  return products.filter(
    (item) => item.age === age
  );
};

export const getRelatedProducts = (category, currentId) => {
  return products.filter(
    (item) =>
      item.category === category &&
      item.id !== currentId
  );
};