import { faker } from '@faker-js/faker';
import { PAGE_SIZE } from '../constant';

interface Review {
  id: string;
  author: string;
  rating: string;
  comment: string;
  date: string;
}

export const getReviews = (limit = PAGE_SIZE): Review[] => {
  const reviews: Review[] = [];
  for (let index = 0; index < limit; index++) {
    const review = {
      id: faker.datatype.uuid(),
      author: faker.name.fullName(),
      rating: faker.random.numeric(),
      comment: faker.lorem.paragraph(),
      date: faker.date.past().toISOString(),
    };
    reviews.push(review);
  }

  return reviews;
};
