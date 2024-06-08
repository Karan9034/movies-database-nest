import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    async register(@Body() userDto: RegisterUserDto) {
        let user = await this.authService.findUserByEmail(userDto.email);
        if (user) {
            throw new BadRequestException('User already exists');
        }
        return this.authService.register(userDto);
    }

    @Post('login')
    async login(@Body() userDto: LoginUserDto) {
        const user = await this.authService.authenticate(userDto);
        return this.authService.login(user.id);
    }
}
