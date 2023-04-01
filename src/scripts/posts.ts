import { faker } from '@faker-js/faker';
import { PAGE_SIZE } from '../constant';

interface Post {
  id: string;
  title: string;
  date: string;
  author: string;
  content: string;
}

export const getPosts = (limit = PAGE_SIZE): Post[] => {
  const posts: Post[] = [];
  for (let index = 0; index < limit; index++) {
    const post = {
      id: faker.datatype.uuid(),
      title: faker.lorem.words(5),
      author: faker.name.fullName(),
      date: faker.date.recent().toISOString(),
      content: faker.lorem.paragraphs(3),
    };
    posts.push(post);
  }

  return posts;
};
