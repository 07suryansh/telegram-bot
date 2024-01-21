// src/weather/weather.controller.ts
import { Controller, Get } from '@nestjs/common';
import { TelegramBotService } from '../telegram/telegram.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly telegramService: TelegramBotService) {}

  @Get('update')
  async updateWeather(): Promise<string> {
    const message = 'Today\'s weather update: ...'; // Fetch and format weather data
    const subscribedUsers = ['user1', 'user2']; // Fetch subscribed users from UserService

    for (const user of subscribedUsers) {
      await this.telegramService.sendMessage(user, message);
    }

    return 'Weather update sent successfully!';
  }
}
