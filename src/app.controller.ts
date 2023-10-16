import {
  Controller,
  Get,
  HostParam,
  HttpCode,
  Ip,
  Redirect,
  Req,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('example/:params')
  example(@Req() req: Request, @Ip() ip, @HostParam() host) {
    const result = req;
    console.log(result.params);
    console.log(ip, host);
    return 'example';
  }

  @Get('wildcard/wond*r')
  wildcard(@Req() req: Request) {
    const result = req;
    console.log(result.url);
    return 'return wildcard';
  }

  @Get('return204')
  @HttpCode(204)
  httpCode() {
    console.log(204);
    return 'This action return 204 status code';
  }

  @Get('redirect')
  @Redirect('https://docs.nestjs.com')
  redirect() {
    // return { url: 'facebook.com' };
  }
}
