import { Controller, Get, Param } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer } from '.prisma/client';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  async findAll(): Promise<Customer[]> {
    return this.customerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Customer | null> {
    return this.customerService.findOne(+id);
  }
}
