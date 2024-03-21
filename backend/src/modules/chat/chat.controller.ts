import { Controller, Get, Post, Body, Param, HttpStatus } from '@nestjs/common';
import { ChatService } from './chat.service';
import { Conversation, Message } from '@prisma/client';
import {
  ErrorResponse,
  formatError,
} from '../../utils/error/error-response-util';

@Controller('chats')
export class ChatController {
  constructor(private chatService: ChatService) {}

  @Get()
  async getAllChats(): Promise<Conversation[] | ErrorResponse> {
    try {
      return await this.chatService.getAllChats();
    } catch (error) {
      const formattedError: ErrorResponse = formatError(
        HttpStatus.INTERNAL_SERVER_ERROR,
        'Ocorreu um erro ao buscar todas as conversas.',
        error,
      );
      return formattedError;
    }
  }

  @Get(':conversationId')
  async getChat(
    @Param('conversationId') conversationId: number,
  ): Promise<Conversation | ErrorResponse> {
    try {
      return await this.chatService.getChat(conversationId);
    } catch (error) {
      const formattedError: ErrorResponse = formatError(
        HttpStatus.INTERNAL_SERVER_ERROR,
        'Ocorreu um erro ao buscar a conversa.',
        error,
      );
      return formattedError;
    }
  }

  @Post(':conversationId/messages')
  async sendMessage(
    @Param('conversationId') conversationId: number,
    @Body()
    {
      sender,
      content,
    }: { sender: 'CUSTOMER' | 'SALESPERSON'; content: string },
  ): Promise<Message | ErrorResponse> {
    try {
      return await this.chatService.sendMessage(
        conversationId,
        sender,
        content,
      );
    } catch (error) {
      const formattedError: ErrorResponse = formatError(
        HttpStatus.INTERNAL_SERVER_ERROR,
        'Ocorreu um erro ao enviar a mensagem.',
        error,
      );
      return formattedError;
    }
  }
}
