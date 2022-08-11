import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  users = [
    {
      id: 1,
      email: 'mail01@gmail.com',
      createdAt: new Date(),
    },
    {
      id: 2,
      email: 'mail02@gmail.com',
      createdAt: new Date(),
    },
    {
      id: 3,
      email: 'mail03@gmail.com',
      createdAt: new Date(),
    },
  ];
  findCustomerById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
