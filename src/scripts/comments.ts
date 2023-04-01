import { faker } from '@faker-js/faker';
import { PAGE_SIZE } from '../constant';

interface Comment {
  id: string;
  createdAt: string;
  updatedAt: string;
  author: string;
  content: string;
}

export const getComments = (limit = PAGE_SIZE): Comment[] => {
  const comments: Comment[] = [];
  for (let index = 0; index < limit; index++) {
    const comment = {
      id: faker.datatype.uuid(),
      author: faker.name.fullName(),
      content: faker.lorem.paragraphs(2),
      createdAt: faker.date.past().toISOString(),
      updatedAt: faker.date.recent().toISOString(),
    };
    comments.push(comment);
  }

  return comments;
};
