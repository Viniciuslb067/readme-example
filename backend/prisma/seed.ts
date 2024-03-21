import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  try {
    await prisma.customer.deleteMany();
    await prisma.salesperson.deleteMany();

    const salesperson = await prisma.salesperson.create({
      data: {
        name: 'Homer Simpson',
        email: 'home@simpson.com',
        phone: '(31) 99999-9999',
        position: 'Vendedor',
      },
    });

    const customer = await prisma.customer.create({
      data: {
        name: 'Lisa Simpson',
        email: 'lisa@simpson.com',
        cpf: '123.456.789-00',
        website: 'https://www.example.com',
        phone: '(31) 99999-9999',
        role: 'Gerente',
        companyName: 'Springfield Elementary',
        companyCnpj: '00.000.000/0001-00',
        employees: 100,
      },
    });

    const conversation = await prisma.conversation.create({
      data: {
        identifier: 'unique_identifier',
        customerId: customer.id,
        salespersonId: salesperson.id,
      },
    });

    const messages = [
      {
        sender: 'SALESPERSON',
        content: 'Olá, Lisa! Como posso ajudá-la hoje?',
      },
      {
        sender: 'CUSTOMER',
        content:
          'Olá! Estou interessada em saber mais sobre os produtos que vocês oferecem.',
      },
      {
        sender: 'SALESPERSON',
        content:
          'Com certeza! Temos uma variedade de produtos de alta qualidade. Posso fornecer mais detalhes sobre eles.',
      },
    ];

    for (const message of messages) {
      await prisma.message.create({
        data: {
          ...message,
          conversationId: conversation.id,
        } as any,
      });
    }

    console.log('Seed executado com sucesso!');
  } catch (error) {
    console.error('Erro ao executar seed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
