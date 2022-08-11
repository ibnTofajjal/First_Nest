import { Customer } from './../../types/Customer';
import { CreateCustomerDto } from './../../dtos/CreateCustomer.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      email: 'mail01@gmail.com',
      name: 'CustomerName-1',
    },
    {
      id: 2,
      email: 'mail02@gmail.com',
      name: 'CustomerName-1',
    },
    {
      id: 3,
      email: 'mail03@gmail.com',
      name: 'CustomerName-1',
    },
  ];
  findCustomerById(id: number) {
    return this.customers.find((user) => user.id === id);
  }

  createCustomer(customerDto: CreateCustomerDto) {
    this.customers.push(customerDto);
  }

  getCustomers() {
    return this.customers;
  }
}
