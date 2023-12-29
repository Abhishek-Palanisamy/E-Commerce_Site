// getFruitById.jsx

import ProductDataAmul from './ProductDataAmul';

const getAmulById = (id) => {
  const Amul = ProductDataAmul.find((Amul) => Amul.id === id);

  if (!Amul) {
    return null;
  }

  return {
    ...Amul,
    images: Amul.imgs || [], // Corrected from 'fruitDetails.images'
  };
};

export default getAmulById;
