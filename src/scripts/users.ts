import { SexType, faker } from '@faker-js/faker';
import { PAGE_SIZE } from '../constant';

interface User {
  id: string;
  avatar: string;
  birthday: Date;
  email: string;
  firstName: string;
  lastName: string;
  sex: SexType;
}

export const getUsers = (limit = PAGE_SIZE): User[] => {
  const users: User[] = [];
  for (let index = 0; index < limit; index++) {
    const sex = faker.name.sexType();
    const firstName = faker.name.firstName(sex);
    const lastName = faker.name.lastName();
    const email = faker.helpers.unique(faker.internet.email, [
      firstName,
      lastName,
    ]);

    const user = {
      id: faker.datatype.uuid(),
      avatar: faker.image.avatar(),
      birthday: faker.date.birthdate(),
      email,
      firstName,
      lastName,
      sex,
    };
    users.push(user);
  }

  return users;
};
