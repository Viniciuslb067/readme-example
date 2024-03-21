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
      throw formatError(
        HttpStatus.INTERNAL_SERVER_ERROR,
        'Ocorreu um erro ao buscar todas as conversas.',
        error,
      );
    }
  }

  @Get(':conversationId')
  async getChat(
    @Param('conversationId') conversationId: number,
  ): Promise<Conversation | ErrorResponse> {
    try {
      return await this.chatService.getChat(conversationId);
    } catch (error) {
      throw formatError(
        HttpStatus.INTERNAL_SERVER_ERROR,
        'Ocorreu um erro ao buscar a conversa.',
        error,
      );
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
      throw formatError(
        HttpStatus.INTERNAL_SERVER_ERROR,
        'Ocorreu um erro ao enviar a mensagem.',
        error,
      );
    }
  }
}
