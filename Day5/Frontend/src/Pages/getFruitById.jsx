// getFruitById.jsx

import ProductData from './ProductData';

const getFruitById = (id) => {
  const fruit = ProductData.find((fruit) => fruit.id === id);

  if (!fruit) {
    return null;
  }

  return {
    ...fruit,
    images: fruit.imgs || [], // Corrected from 'fruitDetails.images'
  };
};

export default getFruitById;
