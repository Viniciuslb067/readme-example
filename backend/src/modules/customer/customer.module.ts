import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { PrismaService } from 'nestjs-prisma';

@Module({
  controllers: [CustomerController],
  providers: [CustomerService, PrismaService],
})
export class CustomerModule {}
