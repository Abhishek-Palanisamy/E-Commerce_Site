// getFruitById.jsx

import ProductDataVege from './ProductDataOF';

const getOFById = (id) => {
  const of = ProductDataVege.find((of) => of.id === id);

  if (!of) {
    return null;
  }

  return {
    ...of,
    images: of.imgs || [], // Corrected from 'fruitDetails.images'
  };
};

export default getOFById;
