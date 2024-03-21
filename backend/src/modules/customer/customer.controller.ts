import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer } from '.prisma/client';
import {
  ErrorResponse,
  formatError,
} from '../../utils/error/error-response-util';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  async findAll(): Promise<Customer[] | ErrorResponse> {
    try {
      const customers = await this.customerService.findAll();
      return customers;
    } catch (error) {
      const formattedError: ErrorResponse = formatError(
        HttpStatus.INTERNAL_SERVER_ERROR,
        'Ocorreu um erro ao buscar os clientes.',
        error,
      );
      return formattedError;
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Customer | ErrorResponse> {
    try {
      const customer = await this.customerService.findOne(Number(id));
      return customer;
    } catch (error) {
      const formattedError: ErrorResponse = formatError(
        HttpStatus.INTERNAL_SERVER_ERROR,
        'Ocorreu um erro ao buscar o cliente.',
        error,
      );
      return formattedError;
    }
  }
}
