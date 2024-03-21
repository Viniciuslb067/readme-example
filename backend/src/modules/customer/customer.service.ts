import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { Customer } from '@prisma/client';

@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Customer[]> {
    return this.prisma.customer.findMany();
  }

  async findOne(id: number): Promise<Customer | null> {
    return this.prisma.customer.findUnique({
      where: { id },
    });
  }
}
