import {
    Injectable,
    InternalServerErrorException,
    NotFoundException,
    UnauthorizedException,
} from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService,
    ) {}

    async register(registerUserDto: RegisterUserDto) {
        bcrypt.genSalt(10, (err, salt) => {
            if (err) {
                throw new InternalServerErrorException(err);
            } else {
                bcrypt.hash(
                    registerUserDto.password,
                    salt,
                    async (err, hash) => {
                        if (err) {
                            throw new InternalServerErrorException(err);
                        } else {
                            registerUserDto.password = hash;
                            return this.prisma.user.create({
                                data: registerUserDto,
                            });
                        }
                    },
                );
            }
        });
    }

    async findUserByEmail(email: string) {
        const user = await this.prisma.user.findUnique({ where: { email } });
        if (!user) {
            return null;
        }
        return user;
    }
    
    async findUserById(id: number) {
        const user = await this.prisma.user.findUnique({ where: { id } });
        if (!user) {
            return null;
        }
        return user;
    }
    

    async authenticate(loginUserDto: LoginUserDto) {
        const user = await this.findUserByEmail(loginUserDto.email);
        if (!user) {
            throw new NotFoundException('User does not exist');
        } else {
            const isMatch = await bcrypt.compare(
                loginUserDto.password,
                user.password,
            );
            if (!isMatch) {
                throw new UnauthorizedException('Invalid email or password');
            } else {
                return user;
            }
        }
    }

    async login(id: number) {
        const payload = { id };
        const token = this.jwtService.sign(payload);
        return {token};
    }
}
