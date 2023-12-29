// getFruitById.jsx

import ProductDataBeve from './ProductDataBeve';

const getBEVEById = (id) => {
  const beve = ProductDataBeve.find((beve) => beve.id === id);

  if (!beve) {
    return null;
  }

  return {
    ...beve,
    images: beve.imgs || [], // Corrected from 'fruitDetails.images'
  };
};

export default getBEVEById;
