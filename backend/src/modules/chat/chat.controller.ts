import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ChatService } from './chat.service';
import { Conversation, Message } from '@prisma/client';

@Controller('chats')
export class ChatController {
  constructor(private chatService: ChatService) {}

  @Get()
  async getAllChats(): Promise<Conversation[]> {
    return this.chatService.getAllChats();
  }

  @Get(':conversationId')
  async getChat(
    @Param('conversationId') conversationId: number,
  ): Promise<Conversation> {
    return this.chatService.getChat(conversationId);
  }

  @Post(':conversationId/messages')
  async sendMessage(
    @Param('conversationId') conversationId: number,
    @Body()
    {
      sender,
      content,
    }: { sender: 'CUSTOMER' | 'SALESPERSON'; content: string },
  ): Promise<Message> {
    return this.chatService.sendMessage(conversationId, sender, content);
  }
}
