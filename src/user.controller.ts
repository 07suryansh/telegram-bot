// src/user/user.controller.ts
import { Controller, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('subscribe')
  subscribeUser(@Req() req): string {
    const userId = req.body.userId;
    this.userService.subscribeUser(userId);
    return 'User subscribed successfully!';
  }

  @Post('unsubscribe')
  unsubscribeUser(@Req() req): string {
    const userId = req.body.userId;
    this.userService.unsubscribeUser(userId);
    return 'User unsubscribed successfully!';
  }
}
