import { Injectable } from '@nestjs/common';
import { Conversation, Message } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class ChatService {
  constructor(private prisma: PrismaService) {}

  async getAllChats(): Promise<Conversation[]> {
    return this.prisma.conversation.findMany({
      include: {
        customer: true,
        salesperson: true,
        messages: true,
      },
    });
  }

  async getChat(conversationId: number): Promise<Conversation> {
    return this.prisma.conversation.findUnique({
      where: {
        id: Number(conversationId),
      },
      include: {
        customer: true,
        salesperson: true,
        messages: true,
      },
    });
  }

  async sendMessage(
    conversationId: number,
    sender: 'CUSTOMER' | 'SALESPERSON',
    content: string,
  ): Promise<Message> {
    return this.prisma.message.create({
      data: {
        content,
        sender,
        conversationId,
      },
    });
  }
}
