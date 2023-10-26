import { Controller, Get } from '@nestjs/common';

@Controller('dogs')
export class DogsController {
    @Get('/')
    getHello() {
        return {
            name: "dog",
        };
    }
}
