import { Controller, Get, Param } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('say-hello/:name')
  async getSayHello(@Param('name') name: string) {    
    return this.userService.sayHello(name);
  }

  @Get('test')
  @EventPattern('hello')
  async test(msg){
    console.log(msg);
    
    return msg
  }
}
