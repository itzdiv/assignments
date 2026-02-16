import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';

@Controller('home')
export class HomeController {
    @UseGuards(JwtAuthGuard)
    @Get()
    home(){
        return {message:"This is home route!"}
    }
}
