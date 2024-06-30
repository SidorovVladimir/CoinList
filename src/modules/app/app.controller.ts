import {
  // BadRequestException,
  // Body,
  Controller,
  Get,
  // Param,
  // ParseIntPipe,
  // Post,
  // UsePipes,
  // ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
// import { CreateDto } from './dto/create.dto';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get')
  getHello() {
    return this.appService.getHello();
  }

  // @Get('get/:id')
  // getHello(@Param('id', ParseIntPipe) id: number) {
  //   // return this.appService.getHello();
  //   if (id < 1) {
  //     throw new BadRequestException('Id должен быть больше 0');
  //   }
  //   return id;
  // }

  // @UsePipes(new ValidationPipe())
  // @Post('create')
  // create(@Body() dto: CreateDto) {
  //   console.log('post');
  //   return dto;
  // }
}
