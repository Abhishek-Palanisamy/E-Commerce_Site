// getFruitById.jsx

import ProductDataVege from './ProductDataVege';

const getVegetableById = (id) => {
  const vegetable = ProductDataVege.find((vegetable) => vegetable.id === id);

  if (!vegetable) {
    return null;
  }

  return {
    ...vegetable,
    images: vegetable.imgs || [], // Corrected from 'fruitDetails.images'
  };
};

export default getVegetableById;
