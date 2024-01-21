import { Injectable } from '@nestjs/common';
import { Telegraf } from 'telegraf';
import { InjectBot } from 'nestjs-telegraf';

@Injectable()
export class TelegramBotService {
  constructor(@InjectBot() private readonly bot: Telegraf) {}

  async sendMessage(chatId: string, message: string): Promise<void> {
    await this.bot.telegram.sendMessage(chatId, message);
  }
}
