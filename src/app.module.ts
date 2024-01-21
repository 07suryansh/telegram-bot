import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TelegrafModule } from 'nestjs-telegraf';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TelegrafModule.forRoot({
      token: process.env.TELEGRAM_BOT_KEY,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
