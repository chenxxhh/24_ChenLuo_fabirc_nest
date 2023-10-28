import {
  Request,
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/uploadFile')
  @UseInterceptors(FileInterceptor('file'))
  postAddFile(
    @Body() body: any,
    @Request() req: any,
    @UploadedFile() file,
  ): string {
    // console.log(body);
    // console.log('res:', file);
    return this.appService.postAddFile(file);
  }
}
