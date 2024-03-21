import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function addUsers() {
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
      webSite: 'https://www.example.com',
      phone: '(31) 99999-9999',
      role: 'Gerente',
      companyName: 'Springfield Elementary',
      companyCnpj: '00.000.000/0001-00',
      employees: 100,
    },
  });

  console.log({ customer, salesperson });
}

async function createConversation() {
  const customer = await prisma.customer.findUnique({
    where: { email: 'lisa@simpson.com' },
  });
  const salesperson = await prisma.salesperson.findUnique({
    where: { email: 'home@simpson.com' },
  });

  const messages = [
    { sender: 'salesperson', content: 'Olá, Lisa! Como posso ajudá-la hoje?' },
    {
      sender: 'customer',
      content:
        'Olá! Estou interessada em saber mais sobre os produtos que vocês oferecem.',
    },
    {
      sender: 'salesperson',
      content:
        'Com certeza! Temos uma variedade de produtos de alta qualidade. Posso fornecer mais detalhes sobre eles.',
    },
  ];

  for (const message of messages) {
    await prisma.chatMessage.create({
      data: {
        ...message,
        customerId: customer.id,
        salespersonId: salesperson.id,
      } as any,
    });
  }

  console.log('Chat criado com sucesso!');
}

async function seed() {
  await addUsers();
  await createConversation();
}

seed()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
