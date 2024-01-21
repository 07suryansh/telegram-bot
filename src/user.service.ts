// src/user/user.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private subscribedUsers: Set<string> = new Set();

  subscribeUser(userId: string): void {
    this.subscribedUsers.add(userId);
  }

  unsubscribeUser(userId: string): void {
    this.subscribedUsers.delete(userId);
  }

  getSubscribedUsers(): Set<string> {
    return this.subscribedUsers;
  }
}
