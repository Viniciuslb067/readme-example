import { Injectable, HttpStatus } from '@nestjs/common';
import { Conversation, Message } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import {
  ErrorResponse,
  formatError,
} from '../../utils/error/error-response-util';

@Injectable()
export class ChatService {
  constructor(private prisma: PrismaService) {}

  async getAllChats(): Promise<Conversation[] | ErrorResponse> {
    try {
      const chats = await this.prisma.conversation.findMany({
        include: {
          customer: true,
          salesperson: true,
          messages: true,
        },
      });
      return chats;
    } catch (error) {
      throw formatError(
        HttpStatus.INTERNAL_SERVER_ERROR,
        'Ocorreu um erro ao buscar as conversas.',
        error,
      );
    }
  }

  async getChat(conversationId: number): Promise<Conversation | ErrorResponse> {
    try {
      const conversation = await this.prisma.conversation.findUnique({
        where: {
          id: Number(conversationId),
        },
        include: {
          customer: true,
          salesperson: true,
          messages: true,
        },
      });

      if (!conversation) {
        throw formatError(
          HttpStatus.NOT_FOUND,
          'Conversa não encontrada.',
          `Conversa com id ${conversationId} não encontrada.`,
        );
      }

      return conversation;
    } catch (error) {
      throw formatError(
        HttpStatus.INTERNAL_SERVER_ERROR,
        'Ocorreu um erro ao buscar a conversa.',
        error,
      );
    }
  }

  async sendMessage(
    conversationId: number,
    sender: 'CUSTOMER' | 'SALESPERSON',
    content: string,
  ): Promise<Message | ErrorResponse> {
    try {
      return await this.prisma.message.create({
        data: {
          content,
          sender,
          conversationId,
        },
      });
    } catch (error) {
      throw formatError(
        HttpStatus.INTERNAL_SERVER_ERROR,
        'Ocorreu um erro ao enviar a mensagem.',
        error,
      );
    }
  }
}
