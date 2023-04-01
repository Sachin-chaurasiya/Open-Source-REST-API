import { faker } from '@faker-js/faker';
import { PAGE_SIZE } from '../constant';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export const getProducts = (limit = PAGE_SIZE): Product[] => {
  const products: Product[] = [];
  for (let index = 0; index < limit; index++) {
    const product = {
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: parseFloat(faker.commerce.price()),
      image: faker.image.imageUrl(),
    };
    products.push(product);
  }

  return products;
};
