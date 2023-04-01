import { faker } from '@faker-js/faker';
import { PAGE_SIZE } from '../constant';

interface Event {
  id: string;
  name: string;
  date: Date;
  location: string;
  description: string;
}

export const getEvents = (limit = PAGE_SIZE): Event[] => {
  const events: Event[] = [];
  for (let index = 0; index < limit; index++) {
    const event = {
      id: faker.datatype.uuid(),
      name: faker.lorem.words(),
      date: faker.date.future(),
      location: faker.address.city(),
      description: faker.lorem.paragraph(),
    };
    events.push(event);
  }

  return events;
};
