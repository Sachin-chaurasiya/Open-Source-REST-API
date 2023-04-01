import { getComments } from './scripts/comments';
import { getEvents } from './scripts/events';
import { getPosts } from './scripts/posts';
import { getProducts } from './scripts/products';
import { getReviews } from './scripts/reviews';
import { getUsers } from './scripts/users';

export default () => {
  return {
    users: getUsers(),
    posts: getPosts(),
    comments: getComments(),
    products: getProducts(),
    reviews: getReviews(),
    events: getEvents(),
  };
};
