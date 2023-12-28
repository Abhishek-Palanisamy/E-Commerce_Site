// getFruitById.jsx

import ProductDataVege from './ProductDataPE';

const getPEById = (id) => {
  const pe = ProductDataVege.find((pe) => pe.id === id);

  if (!pe) {
    return null;
  }

  return {
    ...pe,
    images: pe.imgs || [], // Corrected from 'fruitDetails.images'
  };
};

export default getPEById;
