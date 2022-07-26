import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

    async sayHello(name: string) {
        const msg = `Hello ${name}`;
        return msg;
    }
}
