// src/admin/admin.controller.ts
import { Controller, Get } from '@nestjs/common';

@Controller('admin')
export class AdminController {
  @Get('login')
  login(): string {
    // Implement Google Login logic here
    return 'Google Login Page';
  }

  // Implement other admin functionalities
}
